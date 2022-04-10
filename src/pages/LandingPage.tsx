import React from 'react';
import FullScreenFlexLayout from '../layouts/FullScreenFlexLayout';
import HeaderNavigationBar from '../modules/HeaderNavigationModule/HeaderNavigationBar';

interface LandingPageProps {
  a?: any;
}

const LandingPage = (props: LandingPageProps): JSX.Element => {
  return (
    <FullScreenFlexLayout direction={'column'}>
      <HeaderNavigationBar />
    </FullScreenFlexLayout>
  );
};

export default LandingPage;
