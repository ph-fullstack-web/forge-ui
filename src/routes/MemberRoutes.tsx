import React from 'react';
import {Route, Routes} from 'react-router-dom';

import {PageNotFound} from 'components/pages/Common';
import {
  CECTrackerDashboard,
  CECRequestCreator,
  CECRequestEditor,
  CECRequestReviewer,
  CECRequestView,
  CECPendingApproval,
  CECApprovalView,
  Skills,
} from 'components/pages';
import {AppLayout} from 'layouts';
import {PageTitle} from 'lib/constants';
import {
  CECRequestDataProvider,
  CECRequestListDataProvider,
  ReactFlowProvider,
  SkillProvider,
  SkillTemplateProvider,
} from 'providers';

import {PagePaths} from './PagePaths';
import {AccountDetailsPage} from 'components/pages/Account';

export const MemberRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <CECRequestListDataProvider>
            <AppLayout pageTitle={PageTitle.CECTracker} />
          </CECRequestListDataProvider>
        }
      >
        <Route index element={<CECTrackerDashboard />} />
        <Route path={PagePaths.CECTracker} element={<CECTrackerDashboard />} />
        <Route
          path={PagePaths.CECRequestCreator}
          element={<CECRequestCreator />}
        />
        <Route
          path={`${PagePaths.CECRequestEditor}/:cecRequestId`}
          element={
            <CECRequestDataProvider>
              <CECRequestEditor />
            </CECRequestDataProvider>
          }
        />
        <Route
          path={`${PagePaths.CECRequestView}/:cecRequestId`}
          element={
            <CECRequestDataProvider>
              <CECRequestView />
            </CECRequestDataProvider>
          }
        />
        <Route path={PagePaths.CECApprovalView} element={<CECApprovalView />} />
      </Route>
      <Route
        path="/"
        element={
          <CECRequestListDataProvider>
            <AppLayout pageTitle={PageTitle.CECReviewer} />
          </CECRequestListDataProvider>
        }
      >
        <Route path={PagePaths.CECReviewer} element={<CECPendingApproval />} />
        <Route
          path={`${PagePaths.CECReviewer}/:activityId`}
          element={<CECRequestReviewer />}
        />
      </Route>
      <Route
        path={PagePaths.Skills}
        element={
          <ReactFlowProvider>
            <SkillTemplateProvider>
              <SkillProvider>
                <AppLayout pageTitle={PageTitle.Skills} />
              </SkillProvider>
            </SkillTemplateProvider>
          </ReactFlowProvider>
        }
      >
        <Route index element={<Skills />} />
      </Route>
      <Route
        path="/"
        element={<AppLayout pageTitle={PageTitle.AccountDetails} />}
      >
        <Route
          path={PagePaths.AccountDetails}
          element={<AccountDetailsPage />}
        />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
