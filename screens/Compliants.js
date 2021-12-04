import React from 'react';
//import Header from '@mindinventory/rn-top-navbar';
import { FlatList,SafeAreaView,StyleSheet,Text,TextInput,TouchableWithoutFeedback,Keyboard, View,Image,Dimensions, } from 'react-native';
 //import Icon from 'react-native-vector-icons';
//import { Input } from 'react-native-elements';
import { Formik } from 'formik';
import Button from 'react-native-button';
import { StatusBar } from 'expo-status-bar';
import ModalDropdown from 'react-native-modal-dropdown';
export default function Complaints (){
 
    return (
        <TouchableWithoutFeedback
        onPress={()=>{
            Keyboard.dismiss();
          }}>
    <View style={styles.container}>
    <StatusBar style="auto"/>


<View style={styles.logo}>
          
          <Image  style={{backgroundColor:"white" ,}} source={require('../assets/logoM.png')} />
 
       </View>

       <View style={styles.txt0}>

           <Text style={styles.txt0}>Complaints</Text>
       </View>

     <View>
         <Formik initialValues={{title:'',name:'',rating:'',Number:''}}
         onSubmit={(values)=>{
console.log(values)
         }}
         >

             {(props)=>(
                 <View>
                     <Text  style={styles.txt1}> Name</Text>
               <TextInput
               style={styles.input}
               onChangeText={props.handleChange('title')}
               value={props.values.title}
                />
<Text style={styles.txt2}> Name</Text>
<TextInput
               style={styles.input}
               onChangeText={props.handleChange('name')}
               value={props.values.name}
               
               />
<Text style={styles.txt3}> Name</Text>
<TextInput
               style={styles.input}
               onChangeText={props.handleChange('rating')}
               value={props.values.rating}
               
               />
<Text style={styles.txt4}> Name</Text>
<TextInput
        
               style={styles.input}
               onChangeText={props.handleChange('Number')}
               value={props.values.Number}
               
               />
               <View style={styles.btn}>
               <Button
                                style={{fontSize: 25,fontWeight: 'bold', color: 'white'}}
                                styleDisabled={{color: 'red'}}
                               
                                >
                                Submit 
                            </Button>
               </View>
                 </View>
             )}


         </Formik>
     </View>

            
 </View>
 </TouchableWithoutFeedback>
    )}

    const styles = StyleSheet.create({
        container:{

flex:1,
// ModalDropdown:{
//     width:90,

// },
backgroundColor:'white',
        },
        txt0:{
backgroundColor:'red',
height:40,
fontSize:29,
color:'white',
//paddingTop:-10,
alignContent:'center',
textAlign:'center',
marginVertical:30

        },

    
        btn:{
            backgroundColor:'red',
            width:160,
            height:50,
            borderRadius:15,
            marginHorizontal:130,
            marginVertical:20,
            alignContent:'center',
            alignItems: 'center',
            justifyContent: "center",
            fontSize:50
        },
        txt1:{
           marginVertical:20,
           marginHorizontal:50
        },
        txt2:{
           // marginVertical:12,
           marginHorizontal:50
        },
        txt3:{
            //marginVertical:12,
           marginHorizontal:50
        },
        txt4:{
            //marginVertical:12,
           marginHorizontal:50
        },

        txt:{
            // backgroundColor:'#ddd',
            color:'#808080',
            alignContent:'center',
            alignItems: 'center',
            justifyContent: "center",
            marginVertical:30,
            marginHorizontal:50,
        },
        drop:{
            marginVertical:50,
            marginHorizontal:50, 
            fontSize:30,
            color:'blue',
            borderWidth:2,
            backgroundColor: 'white',
            borderBottomColor: 'black',
            borderBottomWidth: 0.5,
            width:300,
            height:20,
            borderRadius:5,
            height:30
        },
        // input1:{
        //     width:300,
        //     borderWidth:2,
        //     marginHorizontal:50,
        //     height:30,
        //     borderRadius:5,marginVertical:60,
        // },
        input:{
            width:300,
            borderWidth:2,
            marginHorizontal:50,
            marginVertical:20,
            borderRadius:5,
            height:30
            
        },
        logo:{
            //flex:1,
            marginTop:50,
            paddingLeft:105,
            width:20,
            //height:20,
           
            
        },
    })