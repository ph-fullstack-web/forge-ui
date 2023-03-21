export type PeopleDTO = {
  cognizantid_id: number;
  last_name: string;
  first_name: string;
  middle_name: string;
  full_name: string;
  csv_email: string;
  hired_date: string;
  is_active: boolean;
  community: CommunityDTO;
};

export type CommunityDTO = {
  community_id: number;
  community_name: string;
  manager: ManagerDTO;
};

export type ManagerDTO = {
  email: string;
  name: string;
};
