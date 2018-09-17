import { connect } from 'react-redux';
import Modal from "../components/Modal";
import {setIsLoading} from "../actions";


function mapDispatchToProps(dispatch){
  return {
   setIsLoading:function(isLoading){
     const action = setIsLoading(isLoading);
     dispatch(action);
   }
  }
}

function mapStateToProps(state){
  return {
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);