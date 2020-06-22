import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import BrandRoutes from '../BrandRoutes';

const BrandB = () => (
  <div className="BrandB">
    <h1>BrandB</h1>
    Link: <Link to="/brandA">Brand A</Link>
    <BrandRoutes />
  </div>
);

export default BrandB;
