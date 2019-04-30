import React from 'react';
import { View,StyleSheet,Text, AsyncStorage} from "react-native";
import { Input,Button,Card } from 'react-native-elements';
import {loginUser} from '../project11/CustomerRedux/actions/authActions';
import {  widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen'

import {connect} from 'react-redux';
import axios from 'axios';
 class LoginScreen extends React.Component {
   constructor(){
     super();
     this.state = {
       mobilenumber : "",
       password : "",
       errors : {}
     };
    //  this._bootstrapAsync();
   }
async componentDidMount(){
  const token = await AsyncStorage.getItem("jwtToken")
  if(token){
    this.props.navigation.navigate('Main')
  }
}

  //  _bootstrapAsync = async () => {
  //   const userToken = await AsyncStorage.getItem('jwtToken');
  //   console.log(userToken);
  //   // This will switch to the App screen or Auth screen and this loading
  //   // screen will be unmounted and thrown away.
  //   this.props.navigation.navigate(userToken ? 'Main' : 'Login');
  //  }

    handlepress = () => {
     console.log("I entered login function");
     const userLogin = {
       mobilenumber : this.state.mobilenumber,
       password : this.state.password
     }
      this.props.loginUser(userLogin);
    
     setTimeout(() =>this.props.navigation.navigate('Main'), 2000);
   }
   handlefacebook = () => {
     axios.get('http://192.168.29.229:3000/auth/facebook').then(res=>{
       console.log(res.data);
       console.log("facebook logged in")
       this.props.navigation.navigate('Main')
     }).catch(err => console.log(err))
   }

    render() {
      const { navigate } = this.props.navigation;
      return (
        <View  style={{height: hp('130%'),backgroundColor:'#f2efef'}}>
          <View style={{paddingTop:hp('25%')}}>
            <Card>
             <Text  style={{fontWeight: 'bold',fontSize:25,textAlign:'center',paddingTop:hp('3%')}}>
               Bharati Stores
             </Text>
            <View style={{flexDirection: 'column',paddingTop:hp('5%')}}>
             <Input onChangeText={mobilenumber => this.setState({ mobilenumber })}
              placeholder='Mobile Number' value={this.state.mobilenumber}/>
             <View style={{paddingTop:hp('3%')}}>
             <Input secureTextEntry={true} onChangeText={password => this.setState({ password })}
              placeholder='Password' value={this.state.password}/>
              </View>
              </View>
             <View style={{flexDirection: 'column',paddingTop:hp('5%')}}>
             <Button onPress={() => this.handlepress()} style={styles.Button}
              title="Login"
              type="solid"/>
              <Button onPress={() =>this.handlefacebook()}
              title="Facebook"
              type="clear"/>
             <View style={{paddingTop:hp('2%')}}>
              <Button
               title="ForgetPassword.?"
               type="clear"/>
              </View>
              <View style={{paddingTop:hp('1.5%'),flexDirection:'column',display:'flex'}}>
              <Text style={{textAlign:'center',fontWeight:'bold'}}>
                Don't have an Account..?
              </Text>
             <Button onPress={() =>this.props.navigation.navigate('Registration')}
              title="Register"
              type="clear"/>
              </View>
             </View>
             </Card>
             </View>
             </View>
        
      
        
      );
    }
}
  const styles = StyleSheet.create({
  
       Button: {
       height:10,
        width:20,
      padding:5,
  marginRight:20
 }
});
  const mapStateToProps = (state) => ({
    auth : state.auth,
  });
  export default connect(mapStateToProps, {loginUser})(LoginScreen);