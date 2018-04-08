import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { RoundCreate, RoundEdit, RoundOverview, RoundView } from '../views/index';
import { ROUNDS_ROUTES } from './ROUNDS_ROUTES';

export class RoundsRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path={ROUNDS_ROUTES.ROOT} component={RoundOverview} />
          <Route exact path={ROUNDS_ROUTES.CREATE} component={RoundCreate} />
          <Route exact path={`${ROUNDS_ROUTES.CREATE}/bar/:barId`} component={RoundEdit} />
          <Route exact path={`${ROUNDS_ROUTES.EDIT}/:roundId`} component={RoundEdit} />
          <Route exact path={`${ROUNDS_ROUTES.VIEW}/:roundId`} component={RoundView} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default RoundsRouter;
