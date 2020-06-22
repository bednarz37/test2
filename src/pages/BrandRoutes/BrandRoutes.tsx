import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import fromJS from 'immutable';
import * as BRANDS_ACTIONS from '../../actions/brands';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './index.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const BrandRoutes = ({ location, match }: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const brandName = match.path.substring(1);
  const brandInfo = useSelector((state: any): any =>
    state.brands.get(brandName).toJS()
  );

  useEffect(() => {
    if (!brandInfo.loaded && !brandInfo.isLoading) {
      dispatch(BRANDS_ACTIONS.fetchBrand(brandName));
    }
  }, []);

  console.log('brandInfo', brandInfo);

  const { isLoading, error, info, loaded } = brandInfo;

  return (
    <div className="BrandRoutes">
      <h2>{info.title}</h2>
      <p>{info.description}</p>

      <div className="cardsWrapper">
        {loaded &&
          info.products.map((item: any) => (
            <Container maxWidth="md">
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image="https://via.placeholder.com/150"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Container>
          ))}
      </div>

      {/* Offer: <Link to={`${match.path}/offer`}>Offer</Link>
      SignIn: <Link to={`${match.path}/signIn`}>SignIn</Link> */}
      <Switch location={location}>
        <Route exact path={`${match.path}/offer`}>
          <h3>Offer.</h3>
        </Route>
        <Route exact path={`${match.path}/signIn`}>
          <h3>Sign In</h3>
        </Route>
      </Switch>
    </div>
  );
};

export default withRouter(BrandRoutes);
