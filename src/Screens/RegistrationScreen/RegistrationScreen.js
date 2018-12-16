import React,{Component} from "react";
import { View, Text, Button } from "react-native";
import Registration from '../../Components/Registration/Registration'

class RegistrationScreen extends Component {
   confirmCodeHandler = () => {
    this.props.navigator.resetTo({
      screen: "smartwash.ConfirmCodeScreen",
      title: "Enter Validation numberr",
      passProps: {
        myProp: null
      },
      animationType: 'fade'
    })
  }
  render() {
    return (
      <View>
        <Registration/>
        <Button title="Next" onPress={this.confirmCodeHandler}/>
      </View>
    );
  }
}

export default RegistrationScreen;
