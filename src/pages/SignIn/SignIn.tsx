import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '../components/Alert';
import SignInForm from '../components/SignInForm';

const useStyles = makeStyles({
  signInWrapper: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 20px 20px 20px',
    justifyContent: 'center',
    alignItems: 'center',
    flex: '1'
  }
});

const Form: React.SFC<any> = () => {
  const classes = useStyles();
  const authentication = useSelector((state: any): any =>
    state.authentication.toJS()
  );
  const { error, isLoading, user, isLogged } = authentication;

  return (
    <div className={classes.signInWrapper}>
      {!isLoading && error && (
        <Alert type="error" description="Wrong email or password" />
      )}
      {isLogged && (
        <Alert type="success" description={`you are logged as ${user}`} />
      )}

      {!isLogged && <SignInForm />}
    </div>
  );
};

export default Form;
