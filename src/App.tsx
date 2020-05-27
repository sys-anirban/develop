import React, { Component, ReactElement, lazy, Suspense } from 'react';
import HistoryRouter from './components/HistoryRouter';
import Authentication from './Authentication';
import DefaultLayout from './Layout/Default';
import { Switch } from 'react-router-dom';
import Loader from './components/Loader';

/**
 * CSS and Bootstrap
 */
import 'bootstrap/dist/css/bootstrap.min.css';

const EmployeeDashBoard = lazy(() => import('./Apps/EmployeeList/containers/Dashboard'));
const DashBoard = lazy(() => import('./Apps/Dashboard'));

class App extends Component {
  render(): ReactElement {
    return (
      <div>
        <HistoryRouter>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Authentication path="/" exact>
                <DefaultLayout component={DashBoard} />
              </Authentication>
              <Authentication path="/emp-dashboard">
                <DefaultLayout component={EmployeeDashBoard} />
              </Authentication>
            </Switch>
          </Suspense>
        </HistoryRouter>
      </div>
    );
  }
}
export default App;
