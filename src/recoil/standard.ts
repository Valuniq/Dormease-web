import { DistanceScoreResList } from '@/types/standard';
import { atom } from 'recoil';

export type standardSettingModalState = {
  region: {
    isOpened: boolean;
    regionScore: number;
  };
  standardWritingEdit: boolean;
};

export const standardSettingModalState = atom<standardSettingModalState>({
  key: 'standardSettingModalState',
  default: {
    region: {
      isOpened: false,
      regionScore: 0,
    },
    standardWritingEdit: false,
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
    {
      distanceScoreId: 6,
      distanceScore: 3,
      regionResList: [],
    },
    {
      distanceScoreId: 7,
      distanceScore: 3.5,
      regionResList: [],
    },
    {
      distanceScoreId: 8,
      distanceScore: 4,
      regionResList: [],
    },
    {
      distanceScoreId: 9,
      distanceScore: 4.5,
      regionResList: [],
    },
  ],
});
