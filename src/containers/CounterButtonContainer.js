import { connect } from 'react-redux';
import {decreaseCounter, increaseCounter} from "../actions";
import CounterButton from "../components/CounterButton";


function mapDispatchToProps(dispatch){
  return {
   increase:function(){
     const action = increaseCounter();
     dispatch(action);
   },
   decrease:function(){
       dispatch(decreaseCounter());
   }
  }
}

export default connect(null,mapDispatchToProps)(CounterButton);