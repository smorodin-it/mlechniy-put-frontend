import React from 'react';
import SignInFormFields from '../components/SignInFormFields';

interface SignInFormProps {
  a?: any;
}

const SignInForm = (props: SignInFormProps): JSX.Element => {
  return (
    <div>
      <SignInFormFields />
    </div>
  );
};

export default SignInForm;
