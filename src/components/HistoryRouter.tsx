import React, { PropsWithChildren, ReactElement } from 'react';
import { Router } from 'react-router-dom';
import History from './BrowserHistory';

export default function HistoryRouter(props: PropsWithChildren<unknown>): ReactElement {
  return <Router history={History}>{props.children}</Router>;
}
