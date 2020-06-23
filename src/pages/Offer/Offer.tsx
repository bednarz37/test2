import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as BRANDS_ACTIONS from '../../actions/brands';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import Loading from '../components/Loading';
import Alert from '../components/Alert';
import ProductsCard from '../components/ProductsCard';

const useStyles = makeStyles({
  offer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 20px 20px 20px'
  }
});

const Offer = () => {
  const { brandName } = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();

  const brandInfo = useSelector((state: any): any =>
    state.brands.get(brandName).toJS()
  );

  useEffect(() => {
    if (!brandInfo.loaded && !brandInfo.isLoading) {
      dispatch(BRANDS_ACTIONS.fetchBrand(brandName));
    }
  }, []);
  const { isLoading, error, info, loaded } = brandInfo;

  return (
    <div className={classes.offer}>
      {isLoading && !error && <Loading />}
      {!isLoading && error && (
        <Alert type="error" description="Offer cannot be loaded" />
      )}
      {loaded && !error && (
        <>
          <h2>{info.title}</h2>
          <p>{info.description}</p>
          <ProductsCard info={info} />
        </>
      )}
    </div>
  );
};

export default Offer;
