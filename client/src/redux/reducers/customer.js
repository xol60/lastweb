import { INIT_STATE } from '../../constant';
import { loginCustomer,getType} from '../actions';

export default function membersReducers(state = INIT_STATE.customer, action) {
  switch (action.type) {
    case getType(loginCustomer.loginCustomerRequest):
      return {
        ...state,
        isLoading: true,
      
      };
    case getType(loginCustomer.loginCustomerSuccess):
        {
          console.log(555);
          console.log(action.payload)
          if(action.payload.id)
          {

          
      return {
        ...state,
        isLoading: false,
        
        info: action.payload,
        }
      };
    }
    case getType(loginCustomer.loginCustomerFailure):
      return {
        ...state,
        isLoading: false,
      };

    
    
    default:
      return state;
  }
}