import actions from '../../../components/constants/ActionTypes';
const defaultState = {
  isLoadingempPersonalData: false,
  empPersonalData: [],
};
export const Employees = (state = defaultState, action: any): any => {
  switch (action.type) {
    case actions.REQUEST_EMPLOYEE_PERSONAL_DATA:
      return { ...state, isLoadingempPersonalData: true };
    case actions.RECEIVE_EMPLOYEE_PERSONAL_DATA:
      return { ...state, isLoadingempPersonalData: false, empPersonalData: action.payload };
    default:
      return { ...state };
  }
};
