import React, { Component, ReactElement } from 'react';
import HistoryRouter from './components/HistoryRouter';
import EmployeeListDashBoard from './EmployeeList/containers/Dashboard';
import Authentication from './Authentication';
import DefaultLayout from './Layout/Default';
import { Switch } from 'react-router-dom';
/**
 * CSS and Bootstrap
 */
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(): ReactElement {
    return (
      <div>
        <HistoryRouter>
          <Switch>
            <Authentication path="/" exact>
              <DefaultLayout component={EmployeeListDashBoard} />
            </Authentication>
          </Switch>
        </HistoryRouter>
      </div>
    );
  }
}
export default App;
