import React from 'react';
import './index.css';
import BrandRoutes from '../BrandRoutes';
import Navbar from '../components/Navbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  brandA: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1'
  }
});

const BrandA = () => {
  const classes = useStyles();
  const navbarProps = {
    title: 'BrandA',
    menu: [
      {
        name: 'Offer',
        path: '/brandA/offer'
      },
      {
        name: 'Sign In',
        path: '/brandA/signIn'
      }
    ],
    link: {
      path: '/brandB/offer',
      name: 'Brand B'
    }
  };

  return (
    <div className={classes.brandA}>
      <Navbar {...navbarProps} />
      <BrandRoutes />
    </div>
  );
};

export default BrandA;
