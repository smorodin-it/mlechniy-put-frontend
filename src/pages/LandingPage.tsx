import React from 'react';
import FullScreenFlexLayout from '../layouts/FullScreenFlexLayout';
import HeaderNavigationBar from '../modules/HeaderNavigationModule/HeaderNavigationBar';
import { Outlet } from 'react-router-dom';

interface LandingPageProps {
  a?: any;
}

const LandingPage = (props: LandingPageProps): JSX.Element => {
  return (
    <FullScreenFlexLayout flexDirection={'column'}>
      <HeaderNavigationBar />
      <Outlet />
    </FullScreenFlexLayout>
  );
};

export default LandingPage;
