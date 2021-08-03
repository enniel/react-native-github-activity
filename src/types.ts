import { Event } from '@bdi/store/services/events/types';

export enum Screens {
  Home = 'Home',
  Event = 'Event',
}

export type RootStackScreenParamList = {
  [Screens.Home]: undefined;
  [Screens.Event]: {
    event: Event;
  };
};
