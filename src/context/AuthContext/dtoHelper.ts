import {Employee} from 'models/core';
import {PeopleDTO} from 'models/communityTrackerDTO';

export const getEmployeeDetailsFromList = (
  peopleList: PeopleDTO[],
  email: string
) => {
  if (peopleList) {
    const peopleDetail = peopleList.find(_ => _.csv_email === email);

    if (peopleDetail) {
      const employeeDetail: Employee = {
        employeeId: peopleDetail.cognizantid_id.toString(),
        firstName: peopleDetail.first_name,
        lastName: peopleDetail.last_name,
        fullname: peopleDetail.full_name,
        softvisionEmail: peopleDetail.csv_email,
        dateHired: peopleDetail.hired_date,
        position: 'Software Engineer',
        managerName: peopleDetail.community.manager.name,
        community: {
          id: peopleDetail.community.community_id.toString() ?? '',
          name: peopleDetail.community.community_name ?? '',
        },
      };

      return employeeDetail;
    }
  }

  return undefined;
};

export const getEmployeeDetails = (peopleData: PeopleDTO) => {
  if (peopleData) {
    const employeeDetail: Employee = {
      employeeId: peopleData.cognizantid_id.toString(),
      firstName: peopleData.first_name,
      lastName: peopleData.last_name,
      fullname: peopleData.full_name,
      softvisionEmail: peopleData.csv_email,
      dateHired: peopleData.hired_date,
      position: 'Software Engineer',
      managerName: peopleData.community.manager.name,
      community: {
        id: peopleData.community.community_id.toString() ?? '',
        name: peopleData.community.community_name ?? '',
      },
    };

    return employeeDetail;
  }

  return undefined;
};
