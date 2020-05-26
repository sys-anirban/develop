import React, { Component } from 'react';
import { Employees } from '../Actions/Employees';
import { connect } from 'react-redux';
class ListDashBoard extends Component {
  componentDidMount() {
    this.props.Employees();
  }
  render() {
    return (
      <div>
        <p>DashBoard</p>
      </div>
    );
  }
}
export default connect(null, { Employees })(ListDashBoard);
