import React from 'react';
import FullContainerFlexLayout from '../layouts/FullContainerFlexLayout';
import SignInForm from '../modules/SignInModule/forms/SignInForm';
import Container from '@mui/material/Container';

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
      <Container>
        <SignInForm />
      </Container>
    </FullContainerFlexLayout>
  );
};

export default SignInPage;
