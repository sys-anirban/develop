import React, { Component, ReactElement } from 'react';
import HistoryRouter from './components/HistoryRouter';
class App extends Component {
  render(): ReactElement {
    return (
      <div>
        <HistoryRouter>
          <p>APP Component</p>
          <p>MY Component</p>
        </HistoryRouter>
      </div>
    );
  }
}
export default App;
