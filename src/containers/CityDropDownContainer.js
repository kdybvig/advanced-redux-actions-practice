import { connect } from 'react-redux';
import {setCurrentCity} from "../actions";
import CityDropDown from "../components/CityDropDown";


function mapDispatchToProps(dispatch){
  return {
   set:function(txt){
     const action = setCurrentCity(txt);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(CityDropDown);