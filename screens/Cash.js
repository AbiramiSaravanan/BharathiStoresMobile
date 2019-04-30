import React, { Component } from 'react'
import {View,Text,Image,ScrollView} from 'react-native'
import {Card,Left,Right,Button,Footer, ListItem} from 'native-base'
import { Divider,Icon } from 'react-native-elements';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';


var options=[
  {label:"Cash on Delivery",value:0},
  {label:"card on Delivery",value:1},
  {label:"Online payement",value:2},
          ];

export class Cash extends Component{

    static navigationOptions = { 
        title:'Payement',
        headerTintColor: 'black',
        headerStyle:{
          backgroundColor:'blue',
          fontSize:7,
          fontWeight:'normal'
        },
      };



     

  render() {
    return (
      <View style={{flex:1,height:heightPercentageToDP('80%'),}}>
      <ScrollView>
      <Card>
       <View style={{paddingTop:4}}>
       
      <RadioForm  style={{flexDirection:"column",justifyContent:'space-evenly'}}
      radio_props={options}
    
      onPress={(value)=>{}}
      buttonColor={'grey'}
      selectedButtonColor={'blue'}
      buttonSize={12}
       />
      
       </View>
       </Card>
       </ScrollView>
        <Footer style={{backgroundColor:null}}>
          <Card style={{width:widthPercentageToDP('100%')}}>
              <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
                  <Text style={{fontWeight:'bold',fontSize:25,paddingTop:heightPercentageToDP('1%'),paddingLeft:widthPercentageToDP('5%')}}>
                    Rs : 
                  </Text>
                  <View style={{paddingRight:widthPercentageToDP('3%')}}>
                    <Button style={{width:widthPercentageToDP('50%')}}>
                    <Text style={{color:'white',fontWeight:'bold',textAlign:'center',justifyContent:'center',alignContent:'center',alignItems:'center',alignSelf:'center'}}>Place Order</Text>
                    </Button>
               
           
                            </View>
                            </View>
          </Card>
          </Footer> 
      
       </View>

    )
  }
}

export default Cash