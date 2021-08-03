import { useEffect, useState, useCallback, useRef } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { useGetEventsQuery } from '@bdi/store/services/events';

const ELEMENTS_PER_PAGE = 25;

const POLLING_INTERVAL = 60 * 1000;
const REFETCH_INTERVAL = 15 * 1000;

interface Config {
  pollingInterval: number;
  refetchAllowed: boolean;
}

const useEvents = () => {
  const [config, setConfig] = useState<Config>({
    pollingInterval: POLLING_INTERVAL,
    refetchAllowed: false,
  });
  const { pollingInterval, refetchAllowed } = config;

  const { data, error, refetch, isLoading, isFetching, startedTimeStamp } = useGetEventsQuery(
    ELEMENTS_PER_PAGE,
    {
      pollingInterval,
    },
  );

  const savedRefetch = useRef<(() => void) | null>(null);
  useEffect(() => {
    savedRefetch.current = refetch;
  }, [refetch]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined;
    if (startedTimeStamp && pollingInterval && !isFetching && !isLoading) {
      timer = setTimeout(() => {
        const now = Date.now();
        setConfig(prev => ({
          ...prev,
          refetchAllowed: now - startedTimeStamp >= REFETCH_INTERVAL,
        }));
      }, REFETCH_INTERVAL);
    } else {
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
  }, [startedTimeStamp, pollingInterval, isFetching, isLoading]);

  useFocusEffect(
    useCallback(() => {
      savedRefetch.current?.();
      setConfig(prev => ({
        ...prev,
        pollingInterval: POLLING_INTERVAL,
      }));
      return () => {
        setConfig({
          pollingInterval: 0,
          refetchAllowed: false,
        });
      };
    }, []),
  );

  return {
    data,
    error,
    refetchAllowed,
    refetch,
    isLoading,
    isFetching,
  };
};

export default useEvents;
