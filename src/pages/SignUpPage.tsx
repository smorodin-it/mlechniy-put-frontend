import React from 'react';
import FullContainerFlexLayout from '../layouts/FullContainerFlexLayout';
import SignUpForm from '../modules/SignUpModule/forms/SignUpForm';

interface SignUpPageProps {
  a?: any;
}

const SignUpPage = (props: SignUpPageProps): JSX.Element => {
  return (
    <FullContainerFlexLayout
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <SignUpForm />
    </FullContainerFlexLayout>
  );
};

export default SignUpPage;
