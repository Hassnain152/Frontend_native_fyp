import React from 'react';
//import Header from '@mindinventory/rn-top-navbar';
import { FlatList,SafeAreaView, TouchableOpacity ,StyleSheet,TouchableWithoutFeedback,Keyboard,Text,TextInput, View,Button,Image,Dimensions, } from 'react-native';
 //import Icon from 'react-native-vector-icons';
//import { Input } from 'react-native-elements';
//import { Formik } from 'formik';
import { StatusBar } from 'expo-status-bar';
import ModalDropdown from 'react-native-modal-dropdown';

import { useNavigation } from '@react-navigation/native';

export default function Register (){
  const navigation =useNavigation();
    return (
    <TouchableWithoutFeedback  onPress={()=>{
      Keyboard.dismiss();
    }}>
        <View style={styles.container}>
        <StatusBar style="auto"/>
   <View>
        <Image
        source={require('../assets/logoM.png')}
        style={{
          height: 150,
          resizeMode: 'contain',
          alignSelf: 'center',
          marginTop:50,
          alignContent:'center'
        }}
      />

      <Image
      source={require('../assets/registration.png')}
      style={{
        height: 150,
        //backgroundColor:'#ddd',
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop:30,
        alignContent:'center'
      }}
    />
</View>

<View  style={styles.cnt}>
<View style={styles.SectionStyle}>
    
    
            <TextInput
              style={styles.inputStyle}
              
              underlineColorAndroid="#f000"
              placeholder="Enter Name"
              placeholderTextColor="#8b9cb5"
              //ref={passwordInputRef}
             // returnKeyType="next"
              //secureTextEntry={true}
             
              blurOnSubmit={false}
            />
            
          </View>


<View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              
             // underlineColorAndroid="#f000"
              placeholder="Enter CNIC"
              placeholderTextColor="#8b9cb5"
              keyboardType='number-pad'
              //ref={passwordInputRef}
              //returnKeyType="next"
              //secureTextEntry={true}
             
              blurOnSubmit={false}
            />
          </View>

<View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              
              underlineColorAndroid="#f000"
              placeholder="Enter Phone-Number"
              placeholderTextColor="#8b9cb5"
              keyboardType='number-pad'
              //ref={passwordInputRef}
              //returnKeyType="next"
              //secureTextEntry={true}
             
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              
              underlineColorAndroid="#f000"
              placeholder="Enter email"
              placeholderTextColor="#8b9cb5"
              keyboardType='name-phone-pad'
              //ref={passwordInputRef}
              //returnKeyType="next"
              //secureTextEntry={true}
             
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
              multiline
              underlineColorAndroid="#f000"
              placeholder="Enter Address"
              placeholderTextColor="#8b9cb5"
              keyboardType='name-phone-pad'
              //ref={passwordInputRef}
              //returnKeyType="next"
              //secureTextEntry={true}
             
             
              blurOnSubmit={false}
            />
          </View>

          <View style={styles.SectionStyle}>
            <TextInput
              style={styles.inputStyle}
             
              underlineColorAndroid="#f000"
              placeholder="Enter Password"
              placeholderTextColor="#8b9cb5"
              keyboardType='name-phone-pad'
              //ref={passwordInputRef}
              //returnKeyType="next"
              secureTextEntry={true}
              autoCorrect={false}
              blurOnSubmit={false}
            />
          </View>
          <View 
                    style={styles.viewStyle}

          >
          <TouchableOpacity 
          
          style={styles.buttonStyle}
          onPress={()=>{
            navigation.navigate('Menu')
          }}
           
            // activeOpacity={0.5}
           // onPress={handleSubmitButton}
          
            >
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
</View>
          </View>

</View>
</TouchableWithoutFeedback>
        
    )}

    const styles = StyleSheet.create({
        container:{
         backgroundColor:'white'
        },
      cnt:{
        
        width:415,
        borderRadius:30,
        //marginHorizontal:20,
        marginVertical:50,
        backgroundColor:'#ddd',

      },

        inputStyle: {
            //flex: 1,
            color: "black",
            marginHorizontal:60,
            marginVertical:10,
            paddingLeft: 15,
            paddingRight: 15,
            borderWidth: 1,
            borderRadius: 30,
            borderColor: 'black',
            width:300,
            height:30,
            alignContent:'center',
            alignItems: 'center',
            justifyContent: "center",
          },
          buttonStyle: {
            textAlign:'center',
            backgroundColor: 'red',
            borderWidth: 2,
            borderColor:'blue',
            paddingTop:14,
            color: 'white',
         // borderColor: '#7DE24E',
            height: 50,
            width:250,
            alignItems: 'center',
            borderRadius: 30,
            marginVertical:10,
            marginLeft: 80,
          
            marginTop: 20,
            //marginBottom: 20,
          },
          buttonTextStyle:{
            color:'white',
            fontWeight:'bold'
          },
            viewStyle:{
              marginTop:30,
            }

        
    })