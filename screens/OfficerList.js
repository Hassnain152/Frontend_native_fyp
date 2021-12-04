import React from 'react';
import { StyleSheet,Alert,ScrollView,IconButton,Text,TouchableOpacity, View ,Image, TextInput} from 'react-native';
//import { Button } from 'react-native-elements/dist/buttons/Button';
//import Button from 'react-native-button';
//import { Tooltip } from 'react-native-elements';
//import logoM from './assets/logoM.png'
import Svg, { Path } from 'react-native-svg';
import { StatusBar } from 'expo-status-bar';


 
export default function OfficerList (){

    return (
        <View style={styles.container}>
          <StatusBar style="auto"/>
         
         
         <View style={OfficerList}>
      <View style={{ backgroundColor: 'red', height: 160 }}>
        <Svg
          height="60%"
          width="100%"
          viewBox="0 0 1440 320"
          style={{ position: 'absolute', top: 130 }}
        >
            <Text style={styles.headerText}>PUNJAB POLICE</Text>
          <Path
            fill="red"
            d="M0,96L48,112C96,128,192,160,288,186.7C384
            ,213,480,235,576,213.3C672,192,768,128,864,
            128C960,128,1056,192,1152,208C1248,224,1344,192,
            1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,
            1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,
            384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </Svg>
      </View>
    </View>
         
         
              
        <Text  style={styles.txt}>👮 Officer List</Text>
       <ScrollView>
       <View  style={styles.txt1}>
         <Text style={styles.txt2}>Bilal Muhammad Awais JPO (Junior Patrolling Officer) </Text>  
         <Text style={styles.txt2}>Asad Ijaz JPO (Junior Patrolling Officer) </Text>
         <Text style={styles.txt2}>Syed Ammar kazmi  JPO (Junior Patrolling Officer) </Text>
         <Text style={styles.txt2}>Arslan Haider JPO (Junior Patrolling Officer) </Text>
         <Text style={styles.txt2}>Talha Riaz Khan  JPO (Junior Patrolling Officer) </Text>
         <Text style={styles.txt2}>Younas Khan JPO (Junior Patrolling Officer) </Text>
         <Text style={styles.txt2}>Usama Malik  JPO (Junior Patrolling Officer) </Text>
         <Text style={styles.txt2}>Muzammil Manzoor  JPO (Junior Patrolling Officer) </Text>
         <Text style={styles.txt2}>Zaigham Ali JPO (Junior Patrolling Officer) </Text>
         <Text style={styles.txt2}>Muhammad Shadman  APO (Assistant Patrolling Officer ) </Text>
         <Text style={styles.txt2}>Kumail Haider  APO (Assistant Patrolling Officer) </Text>
         <Text style={styles.txt2}>Abdul Rauf  APO (Assistant Patrolling Officer) </Text>
         <Text style={styles.txt2}>Shoiab Khurshid  APO (Assistant Patrolling Officer) </Text>
         <Text style={styles.txt2}>Ahmed hassan Hashmi APO (Assistant Patrolling Officer) </Text>
         <Text style={styles.txt2}>Hassan Awan APO (Assistant Patrolling Officer) </Text>
         <Text style={styles.txt2}>Ammar Ali  APO (Assistant Patrolling Officer) </Text>
         <Text style={styles.txt2}>Fahad Tariq  APO (Assistant Patrolling Officer) </Text>
         <Text style={styles.txt2}>Abdul Majid  APO (Assistant Patrolling Officer) </Text>
         <Text style={styles.txt2}>Syed SHeryar Shamas  APO (Assistant Patrolling Officer) </Text>
         <Text style={styles.txt2}>Ali Haider APO (Assistant Patrolling Officer) </Text>
         
         
       </View>
     
       </ScrollView>
{/* <View>
        <TouchableOpacity style={styles.list} >
          <Button style={styles.txtl} onPress={Listd()}>Officer List</Button>
        </TouchableOpacity>

        </View> */}
     
        </View>
    )}


    const styles = StyleSheet.create({

      container:{
      flex:1,
      backgroundColor:'white'
      },
      txt1:{
        alignContent:'center',
        alignItems: 'center',
        justifyContent: "center",
        marginTop:40,
        fontSize:40,

      },
      txt2:{
        borderWidth:1,
        borderRadius:4,
        marginTop:10,
        width:380,
      },
      list:{
        alignContent:'center',
            alignItems: 'center',
            justifyContent: "center",
            marginTop:90,
            borderRadius:10,
            borderWidth:1,
            height:42,
            width:"70%",
            backgroundColor:"#808080",
            marginLeft:60,
          
      },
      txtl:{
        color:'white',
        fontSize:20,
      },

        txt:{
            marginTop:90,
         fontSize:40,
         backgroundColor:'red',
         color:'white',
         paddingLeft:78,
        },
        headerText: {
            fontSize: 30,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginTop: -50,
            // alignContent:'center',
            // alignItems: 'center',
            // justifyContent: "center",
          },
    })