import { DistanceScoreResList } from '@/types/standard';
import { atom } from 'recoil';

export type standardSettingModalState = {
  region: {
    isOpened: boolean;
    regionScore: number;
  };
  standardWriting: boolean;
};

export const standardSettingModalState = atom<standardSettingModalState>({
  key: 'standardSettingModalState',
  default: {
    region: {
      isOpened: false,
      regionScore: 0,
    },
    standardWriting: false,
  },
});

export const distanceScoreState = atom<DistanceScoreResList[]>({
  key: 'distanceScoreState',
  default: [
    {
      distanceScoreId: 1,
      distanceScore: 0,
      regionResList: [],
    },
    {
      distanceScoreId: 2,
      distanceScore: 0.5,
      regionResList: [],
    },
    {
      distanceScoreId: 3,
      distanceScore: 1.5,
      regionResList: [],
    },
    {
      distanceScoreId: 4,
      distanceScore: 2,
      regionResList: [],
    },
    {
      distanceScoreId: 5,
      distanceScore: 2.5,
      regionResList: [],
    },
  ],
});
