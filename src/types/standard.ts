// 기준 설정 조회
export type standardSettingResponse = {
  check: boolean;
  information: StandardSettingResponseInformation;
};

export type StandardSettingResponseInformation = {
  standardSettingId: number;
  minScore: number; // 최소 학점
  scoreRatio: number; // 성적 비율
  distanceRatio: number; // 거리 비율
  pointReflection: boolean; // 상/벌점 반영 여부
  tiePriority: 'SCORE' | 'DISTANCE' | ''; // 동점자 우선 순위 산정 방식
  freshmanStandard: 'EVERYONE' | 'LONG_DISTANCE' | ''; // 신입생 점수 산정 방식
  prioritySelection: boolean; // 우선 선발 설정 활성화 여부
  movePassSelection: boolean; // 이동 합격 설정 활성화 여부
  sameSmoke: boolean; // 흡연 설정 활성화 여부
  sameTerm: boolean; // 동일 기간 설정 활성화 여부
  entrancePledge: string; // 입사 서약서
  distanceScoreResList: DistanceScoreResList[];
};

export interface DistanceScoreResList {
  distanceScoreId: number;
  distanceScore?: number;
  regionResList: StandardSettingRegionResList[];
}

// 기준 설정 중 거리 지역 조회
export type StandardSettingRegionsResponse = {
  check: boolean;
  information: StandardSettingRegionResList[];
};

export type StandardSettingRegionResList = {
  information?: any;
  regionId: number;
  regionName?: string;
};

// 기준 설정 생성
// 현재 standard Page에서 resList로 상태를 관리하여둔 상태임
export type StandardSettingRequest = {
  minScore: number; // 최소 학점
  scoreRatio: number; // 성적 비율
  distanceRatio: number; // 거리 비율
  pointReflection: boolean; // 상/벌점 반영 여부
  tiePriority: 'SCORE' | 'DISTANCE' | ''; // 동점자 우선 순위 산정 방식
  freshmanStandard: 'EVERYONE' | 'LONG_DISTANCE' | ''; // 신입생 점수 산정 방식
  prioritySelection: boolean; // 우선 선발 설정 활성화 여부
  movePassSelection: boolean; // 이동 합격 설정 활성화 여부
  sameSmoke: boolean; // 흡연 설정 활성화 여부
  sameTerm: boolean; // 동일 기간 설정 활성화 여부
  entrancePledge: string; // 입사 서약서
  distanceScoreReqList: DistanceScoreReqList[];
};

export interface DistanceScoreReqList {
  distanceScoreId: number;
}
