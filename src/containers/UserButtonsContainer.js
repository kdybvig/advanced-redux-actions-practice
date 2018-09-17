import { connect } from 'react-redux';
import {addUser, removeUser} from "../actions";
import UserButtons from "../components/UserButtons";


function mapDispatchToProps(dispatch){
  return {
   add:function(user){
     const action = addUser(user);
     dispatch(action);
   },
   remove: function(){
       dispatch(removeUser());
   }
  }
}

export default connect(null,mapDispatchToProps)(UserButtons);