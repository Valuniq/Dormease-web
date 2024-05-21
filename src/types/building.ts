export type BuildingSettingsResponse = {
  check: boolean;
  information: BuildingSettingsResponseInformation[];
};

export type BuildingSettingsResponseInformation = {
  id: number;
  name: string;
  imageUrl: string;
  assignedResidents: boolean;
};

export type BuildingAddDeleteResponse = {
  check: boolean;
  information: {
    message: string;
  };
};
