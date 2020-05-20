import React, { Component, ReactElement } from 'react';
import HistoryRouter from './components/HistoryRouter';
import EmployeeListDashBoard from './EmployeeList/containers/Dashboard';
import ErrorBoundary from './components/Errorboundary';

/**
 * CSS and Bootstrap
 */
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(): ReactElement {
    return (
      <div>
        <HistoryRouter>
          <ErrorBoundary>
            <EmployeeListDashBoard />
            <p>APP Component</p>
            <p>MY Component</p>
          </ErrorBoundary>
        </HistoryRouter>
      </div>
    );
  }
}
export default App;
