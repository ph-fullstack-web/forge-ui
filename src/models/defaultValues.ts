import {getDateTimeNow} from 'lib/helpers';
import {CECRequest, Community} from './core';

export const defaultCommunity: Community = {
  id: '',
  name: '',
  approvers: [],
};

export const defaultCECRequest: CECRequest = {
  cecRequestId: '',
  userId: '',
  activityDescription: '',
  activity: {
    activityId: '',
    activityCategory: '',
    name: '',
    points: 0,
  },
  attachments: [],
  dateCreated: getDateTimeNow(),
  dateStarted: getDateTimeNow(),
  dateCompleted: getDateTimeNow(),

  status: 'Draft',
};
