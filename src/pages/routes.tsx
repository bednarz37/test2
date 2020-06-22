import React from 'react';
import './Routes.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import BrandA from './BrandA';
import BrandB from './BrandB';

function getPathDepth(location: any) {
  let pathArr = (location || {}).pathname.split('/');
  pathArr = pathArr.filter((n: any) => n !== '');
  return pathArr;
}

const getSlideClassName = (pathArr: any) => {
  const pathname = pathArr[0];
  if (pathname === 'brandB') {
    return 'pageSliderLeft';
  }
  if (pathname === 'brandA') {
    return 'pageSliderRight';
  }
  return '';
};

const isAnimated = (pathArr: any) => {
  if (pathArr.length > 1) {
    return false;
  }
  return true;
};

const routes = [
  { path: '/brandA', name: 'BrandA', Component: BrandA },
  { path: '/brandB', name: 'BrandB', Component: BrandB }
];

const Routes = () => {
  return (
    <div className="App">
      <Router>
        <Route
          render={({ location }) => {
            const isAnime = isAnimated(getPathDepth(location));

            return (
              <TransitionGroup
                className="brandsTransition noTransition"
                childFactory={child =>
                  React.cloneElement(child, {
                    classNames: isAnime
                      ? getSlideClassName(getPathDepth(location))
                      : 'hiddenSideAnimationEffect',
                    timeout: isAnime ? 1500 : 1500,
                    enter: isAnime,
                    leave: isAnime
                  })
                }
              >
                <CSSTransition
                  key={location.key}
                  timeout={isAnime ? 1500 : 1500}
                  classNames={
                    isAnime
                      ? getSlideClassName(getPathDepth(location))
                      : 'hiddenSideAnimationEffect'
                  }
                  mountOnEnter={true}
                  unmountOnExit={true}
                >
                  <div className="routerWrapper">
                    <Switch location={location}>
                      <Route path="/brandA" component={BrandA} />
                      <Route path="/brandB" component={BrandB} />
                      <Redirect to="/brandA" />
                    </Switch>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
      </Router>
    </div>
  );
};

export default Routes;
