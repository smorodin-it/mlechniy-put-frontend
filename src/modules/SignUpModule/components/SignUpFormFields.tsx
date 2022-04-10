import React from 'react';
import TextFieldDebounced from '../../../components/inputs/TextFieldDebounced';
import { usePropsForFormik } from '../../../utils/hooks/usePropsForFormik/usePropsForFormik';
import { SignUpFormModel } from '../../../models/AuthModel';

interface SignUpFormFieldsProps {
  a?: any;
}

const SignUpFormFields = (props: SignUpFormFieldsProps): JSX.Element => {
  const { setPropsForTextFieldFormik } = usePropsForFormik<SignUpFormModel>();
  return (
    <>
      {/* Auth credentials */}
      <TextFieldDebounced
        label={'Электронная почта'}
        {...setPropsForTextFieldFormik('email', true)}
      />
      <TextFieldDebounced
        label={'Пароль'}
        {...setPropsForTextFieldFormik('password', true)}
      />
      <TextFieldDebounced
        label={'Подтвердите пароль'}
        {...setPropsForTextFieldFormik('passwordConfirm', true)}
      />
      {/* Book data */}
      <TextFieldDebounced
        label={'Название рассказа'}
        {...setPropsForTextFieldFormik('storyTitle', true)}
      />
      <TextFieldDebounced
        label={'Загрузить рассказ'}
        {...setPropsForTextFieldFormik('storyFile', true)}
      />
      {/* Profile Data */}
      <TextFieldDebounced
        label={'Фамилия'}
        {...setPropsForTextFieldFormik('firstName', true)}
      />
      <TextFieldDebounced
        label={'Имя'}
        {...setPropsForTextFieldFormik('lastName', true)}
      />
      <TextFieldDebounced
        label={'Отчество'}
        {...setPropsForTextFieldFormik('patronymic')}
      />
      <TextFieldDebounced
        label={'Возраст'}
        {...setPropsForTextFieldFormik('age', true)}
      />
      {/* TODO: Make masked! */}
      <TextFieldDebounced
        label={'Контактный номер телефона'}
        {...setPropsForTextFieldFormik('phone', true)}
      />
      <TextFieldDebounced
        label={'Почтовый адресс автора'}
        {...setPropsForTextFieldFormik('postAddressAuthor', true)}
      />
      <TextFieldDebounced
        label={'Наименование учебного заведения'}
        {...setPropsForTextFieldFormik('eduOrganizationName')}
      />
      <TextFieldDebounced
        label={'Адресс учебного заведения'}
        {...setPropsForTextFieldFormik('eduOrganizationAddress')}
      />
      <TextFieldDebounced
        label={'Полные Ф.И.О. учителя/преподавателя'}
        {...setPropsForTextFieldFormik('teacherFullName')}
      />
      <TextFieldDebounced
        label={'Должность учителя/преподавателя'}
        {...setPropsForTextFieldFormik('teacherPosition')}
      />
    </>
  );
};

export default SignUpFormFields;
