import React from 'react';
import { DialogActions } from '@mui/material';
import Button from '@mui/material/Button';

interface FormButtonsProps {
  submitBtnText?: string;
  rejectBtnText?: string;
  isModal?: boolean;
  handleModalClose?: () => void;
}

const FormButtons = (props: FormButtonsProps): JSX.Element => {
  const submitButton = (
    <Button type={'submit'}>{props.submitBtnText ?? 'Отправить'}</Button>
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
