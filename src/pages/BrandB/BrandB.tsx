import React from 'react';
import './index.css';
import BrandRoutes from '../BrandRoutes';
import Navbar from '../components/Navbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  brandB: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1'
  }
});

const BrandB = () => {
  const classes = useStyles();
  const navbarProps = {
    title: 'BrandB',
    menu: [
      {
        name: 'Offer',
        path: '/brandB/offer'
      },
      {
        name: 'Sign In',
        path: '/brandB/signIn'
      }
    ],
    link: {
      path: '/brandA/offer',
      name: 'Brand A'
    },
    styles: {
      background: '#2E3B55',
      order: { title: 3, menu: 2, linkButton: 1 }
    }
  };
  return (
    <div className={classes.brandB}>
      <Navbar {...navbarProps} />
      <BrandRoutes />
    </div>
  );
};

export default BrandB;
