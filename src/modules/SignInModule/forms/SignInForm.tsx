import React from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
import * as Yup from 'yup';

import { SignInFormModel } from '../../../models/AuthModel';
import SignInFormFields from '../components/SignInFormFields';
import FormButtons from '../../../components/buttons/FormButtons';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FullContainerFlexLayout, {
  formLayout,
} from '../../../layouts/FullContainerFlexLayout';
import { formikValidationMessages } from '../../../constants/messages';

interface SignInFormProps {
  a?: any;
}

const SignInForm = (props: SignInFormProps): JSX.Element => {
  const formik = useFormik<SignInFormModel>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email(formikValidationMessages.email())
        .required(formikValidationMessages.required()),
      password: Yup.string().required(formikValidationMessages.required()),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form>
        <Card>
          <CardContent>
            <FullContainerFlexLayout {...formLayout}>
              <SignInFormFields />
              <FormButtons submitBtnText={'Войти'} />
            </FullContainerFlexLayout>
          </CardContent>
        </Card>
      </Form>
    </FormikProvider>
  );
};

export default SignInForm;
