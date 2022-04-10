import React from 'react';
import FullContainerFlexLayout from '../layouts/FullContainerFlexLayout';
import SignUpForm from '../modules/SignUpModule/forms/SignUpForm';
import Container from '@mui/material/Container';

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
      <Container>
        <SignUpForm />
      </Container>
    </FullContainerFlexLayout>
  );
};

export default SignUpPage;
