import React from 'react';
import FullContainerFlexLayout from '../layouts/FullContainerFlexLayout';
import SignInForm from '../modules/SignInModule/forms/SignInForm';

interface SignInPageProps {
  a?: any;
}

const SignInPage = (props: SignInPageProps): JSX.Element => {
  return (
    <FullContainerFlexLayout
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <SignInForm />
    </FullContainerFlexLayout>
  );
};

export default SignInPage;
