import { Employees } from '../EmployeeList//Reducer/Employees';
import { combineReducers } from 'redux';
import { routeReducer as routing } from 'react-router-redux';
const appReducer = combineReducers({
  Employees,
});
export default appReducer;
