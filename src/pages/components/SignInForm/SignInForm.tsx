import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import * as AUTHENTICATION_ACTIONS from '../../../actions/authentication';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const SignInForm: React.SFC<any> = () => {
  const [formData, setFormDataValue] = useState({ email: '', password: '' });
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(AUTHENTICATION_ACTIONS.signIn(formData));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormDataValue({ ...formData, [name]: value });
  };

  return (
    <ValidatorForm onSubmit={handleSubmit}>
      <h2>Simple form</h2>
      <TextValidator
        label="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
        validators={['required', 'isEmail']}
        errorMessages={['this field is required', 'email is not valid']}
      />
      <br />
      <TextValidator
        label="Password"
        onChange={handleChange}
        name="password"
        value={formData.password}
        validators={['required']}
        errorMessages={['this field is required']}
      />
      <br />
      <br />
      <Button
        color="primary"
        variant="contained"
        type="submit"
        disabled={false}
      >
        Submit
      </Button>
    </ValidatorForm>
  );
};

export default SignInForm;
