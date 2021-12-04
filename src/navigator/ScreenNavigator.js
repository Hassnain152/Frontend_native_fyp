import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Login from '../../screens/Login';
import AboutUs from '../../screens/AboutUs';
import Home from '../../screens/Home';
import Menu from '../../screens/Menu';
import Register from '../../screens/Register';
import OfficerList from '../../screens/OfficerList';
import Compliants from '../../screens/Compliants';
import LoginUser from '../../screens/LoginUser';
import Location from '../../screens/Location';

const Stack = createNativeStackNavigator();

export const ScreenNavigator =()=>  {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
      
      <Stack.Screen name="Login" component={Login}  options={{headerShown:false}} />
      <Stack.Screen name="LoginUser" component={LoginUser}  options={{headerShown:false}} />
      <Stack.Screen name="Register" component={Register}  options={{headerShown:false}} />
      <Stack.Screen name="Menu" component={Menu}  options={{headerShown:false}} />
      <Stack.Screen name="Home" component={Home}  options={{headerShown:false}} />
      <Stack.Screen name="OfficerList" component={OfficerList}  options={{headerShown:false}} />
      <Stack.Screen name="Location" component={Location}  options={{headerShown:false}} />
      <Stack.Screen name="AboutUs" component={AboutUs}  options={{headerShown:false}} />
      <Stack.Screen name="Compliants" component={Compliants}  options={{headerShown:false}} />
      
     
      
     
      
      
    
     
      
      
 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

  export default ScreenNavigator;
