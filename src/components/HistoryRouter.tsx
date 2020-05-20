import React, { PropsWithChildren, ReactElement } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export default function HistoryRouter(props: PropsWithChildren<unknown>): ReactElement {
  const history = createBrowserHistory();
  return <Router history={history}>{props.children}</Router>;
}
