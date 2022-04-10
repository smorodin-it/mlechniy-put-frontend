import React from 'react';
import { Form, FormikProvider, useFormik } from 'formik';
import { SignUpFormModel } from '../../../models/AuthModel';
import * as Yup from 'yup';
import { formikValidationMessages } from '../../../constants/messages';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import FullContainerFlexLayout, {
  formLayout,
} from '../../../layouts/FullContainerFlexLayout';
import FormButtons from '../../../components/buttons/FormButtons';
import SignUpFormFields from '../components/SignUpFormFields';

interface SignUpFormProps {
  a?: any;
}

const SignUpForm = (props: SignUpFormProps): JSX.Element => {
  const formik = useFormik<SignUpFormModel>({
    initialValues: {
      age: '',
      eduOrganizationAddress: '',
      eduOrganizationName: '',
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      passwordConfirm: '',
      patronymic: '',
      phone: '',
      postAddressAuthor: '',
      storyFile: null,
      storyTitle: '',
      teacherFullName: '',
      teacherPosition: '',
    },
    validationSchema: Yup.object({
      age: Yup.number().required(formikValidationMessages.required()),
      eduOrganizationAddress: Yup.string(),
      eduOrganizationName: Yup.string(),
      email: Yup.string()
        .email(formikValidationMessages.email())
        .required(formikValidationMessages.required()),
      firstName: Yup.string().required(formikValidationMessages.required()),
      lastName: Yup.string().required(formikValidationMessages.required()),
      password: Yup.string().required(formikValidationMessages.required()),
      passwordConfirm: Yup.string().oneOf(
        [Yup.ref('password'), ''],
        formikValidationMessages.passwordMatch()
      ),
      patronymic: Yup.string(),
      phone: Yup.string().required(formikValidationMessages.required()),
      postAddressAuthor: Yup.string(),
      storyFile: Yup.string(),
      storyTitle: Yup.string(),
      teacherFullName: Yup.string(),
      teacherPosition: Yup.string(),
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
              <SignUpFormFields />
              <FormButtons />
            </FullContainerFlexLayout>
          </CardContent>
        </Card>
      </Form>
    </FormikProvider>
  );
};

export default SignUpForm;
