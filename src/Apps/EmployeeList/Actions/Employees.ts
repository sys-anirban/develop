import apiClient from '../../../components/apiClient/index';
import actions from '../../../components/constants/ActionTypes';
import { Dispatch } from 'redux';
export function Employees() {
  return (dispatch: Dispatch) => {
    dispatch({ type: actions.REQUEST_EMPLOYEE_PERSONAL_DATA });
    apiClient
      .get('employees')
      .then((res) => console.log('RES', res.data))
      .catch((error) => console.log('err', error));
  };
}
