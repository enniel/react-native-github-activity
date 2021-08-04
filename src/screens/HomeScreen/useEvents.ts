import { useEffect, useState, useCallback, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useGetEventsQuery } from '@rnga/store/services/events';

const ELEMENTS_PER_PAGE = 25;

const POLLING_INTERVAL = 60 * 1000;
const REFETCH_INTERVAL = 15 * 1000;

interface Config {
  /** polling interval in milliseconds. defaults to `0` (off) */
  pollingInterval: number;

  /** allow/disallow manual refetch */
  refetchAllowed: boolean;
}

const useEvents = () => {
  const [config, setConfig] = useState<Config>({
    pollingInterval: POLLING_INTERVAL,
    refetchAllowed: false,
  });
  const { pollingInterval, refetchAllowed } = config;

  const {
    data,
    error,
    refetch,
    isLoading,
    isFetching,
    isUninitialized,
    isSuccess,
    isError,
    startedTimeStamp,
    requestId,
  } = useGetEventsQuery(ELEMENTS_PER_PAGE, {
    pollingInterval,
  });

  // save refetch to ref for minimize rerenders
  const savedRefetch = useRef<(() => void) | null>(null);
  useEffect(() => {
    savedRefetch.current = refetch;
  }, [refetch]);

  // restarting the timer on new request
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    // start timer for allow manual refetch on new request
    if (
      prevRequestId.current !== requestId &&
      startedTimeStamp &&
      pollingInterval &&
      !isFetching &&
      !isLoading &&
      !isError
    ) {
      timer = setTimeout(() => {
        const now = Date.now();
        setConfig(prev => ({
          ...prev,
          refetchAllowed: now - startedTimeStamp >= REFETCH_INTERVAL,
        }));
      }, REFETCH_INTERVAL);
    }
    // disallow manual refetch on new request, if allowed
    if (prevRequestId.current !== requestId && !isLoading && isFetching && refetchAllowed) {
      setConfig(prev => ({
        ...prev,
        refetchAllowed: false,
      }));
    }
    return () => {
      if (typeof timer !== 'undefined') {
        clearTimeout(timer);
      }
    };
  }, [
    requestId,
    startedTimeStamp,
    pollingInterval,
    isFetching,
    isLoading,
    isError,
    refetchAllowed,
  ]);

  // save prev request id to ref
  const prevRequestId = useRef<string | undefined>(undefined);
  useEffect(() => {
    if (prevRequestId.current !== requestId && !isFetching && !isLoading) {
      prevRequestId.current = requestId;
    }
  }, [requestId, isFetching, isLoading]);

  useFocusEffect(
    useCallback(() => {
      // refetch on focus
      savedRefetch.current?.();
      setConfig({
        // enable polling
        pollingInterval: POLLING_INTERVAL,
        // disable manual refetch
        refetchAllowed: false,
      });
      return () => {
        setConfig({
          // disable polling
          pollingInterval: 0,
          // disable manual refetch
          refetchAllowed: false,
        });
      };
    }, []),
  );

  return {
    data,
    error,
    isError,
    refetchAllowed,
    refetch,
    isLoading,
    isFetching,
    isUninitialized,
    isSuccess,
    requestId,
    pollingInterval,
  };
};

export default useEvents;
