import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './index.css';
import BrandRoutes from '../BrandRoutes';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Container from '@material-ui/core/Container';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 0,
    marginRight: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const BrandA = ({ location }: any) => {
  const classes = useStyles();
  const { push } = useHistory();
  return (
    <div className="BrandA">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h2" component="h1" className={classes.title}>
            BrandA
          </Typography>
          <Container maxWidth="md">
            <ButtonGroup
              color="inherit"
              aria-label="outlined secondary button group"
            >
              <Button onClick={() => push('/brandA/offer')}>Offer</Button>
              <Button onClick={() => push('/brandA/signIn')}>Sign in</Button>
            </ButtonGroup>
          </Container>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => push('/brandB')}
          >
            Brand B
          </Button>
        </Toolbar>
      </AppBar>

      <BrandRoutes />
    </div>
  );
};

export default withRouter(BrandA);
