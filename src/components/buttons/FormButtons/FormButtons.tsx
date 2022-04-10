import React from 'react';
import { DialogActions } from '@mui/material';
import Button from '@mui/material/Button';
import { useFormikContext } from 'formik';

interface FormButtonsProps {
  submitBtnText?: string;
  rejectBtnText?: string;
  isModal?: boolean;
  handleModalClose?: () => void;
}

const FormButtons = (props: FormButtonsProps): JSX.Element => {
  const formik = useFormikContext();

  const handleSubmitForm = (): void => {
    formik.submitForm();
  };

  const submitButton = (
    <Button onClick={handleSubmitForm}>
      {props.submitBtnText ?? 'Отправить'}
    </Button>
  );

  if (props.isModal) {
    return (
      <DialogActions>
        {submitButton}
        {props.handleModalClose && (
          <Button type={'reset'} onClick={props.handleModalClose}>
            {props.rejectBtnText ?? 'Отмена'}
          </Button>
        )}
      </DialogActions>
    );
  }

  return submitButton;
};

export default FormButtons;
