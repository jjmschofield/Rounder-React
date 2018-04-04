import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { RoundCreate, RoundEdit, RoundOverview, RoundView } from '../views';

export class RoundsRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={RoundOverview} />
          <Route path="/round-create" component={RoundCreate} />
          <Route path="/round-edit/:roundId" component={RoundEdit} />
          <Route path="/round-view/:roundId" component={RoundView} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default RoundsRouter;
