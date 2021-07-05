import React from 'react';
import { createStackNavigator}from 'react-navigation-stack';
import { createAppContainer, NavigationContainer, useIsFocused } from 'react-navigation';
import {StyleSheet, Text, View, Button, Settings, Easing, Image} from 'react-native';
import {Provider} from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from "./src/screens/EditScreen";

/*const IndexScreen = ({navigation}) =>{
  const isFocused = useIsFocused();

  return (<View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }}><Text style={{color: isFocused? 'grey': 'green', fontSize: 24}}>Index</Text>
  <Button title="Go to Home screen" onPress={()=>navigation.goBack()}/>
  </View>
);}

const ShowScreen = ({navigation}) =>{
  const isFocused = useIsFocused();

  return (<View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }}><Text style={{color: isFocused? 'grey': 'green', fontSize: 24}}>Show</Text>
  <Button title="Go to Home screen" onPress={()=>navigation.goBack()}/>
  </View>
);}

const CreateScreen = ({navigation}) =>{
  const isFocused = useIsFocused();

  return (<View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }}><Text style={{color: isFocused? 'grey': 'green', fontSize: 24}}>Create</Text>
  <Button title="Go to Home screen" onPress={()=>navigation.goBack()}/>
  </View>
);}
const EditScreen = ({navigation}) =>{
  const isFocused = useIsFocused();

  return (<View style={{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }}><Text style={{color: isFocused? 'grey': 'green', fontSize: 24}}>Edit</Text>
  <Button title="Go to Home screen" onPress={()=>navigation.goBack()}/>
  </View>
);}*/


const navigator = createStackNavigator(

  {

    Index: IndexScreen,

    Show: ShowScreen,

    Create: CreateScreen,

    Edit: EditScreen

  },

  {

    initialRouteName: 'Index',

    defaultNavigationOptions: {

      title: 'Blogs'

    }

  }
);

 const App = createAppContainer(navigator);

//const Stack = createStackNavigator();

export default () => {

   return (
     <Provider>
     <App></App>
   </Provider>
  );

 };
 /*
 
 <Provider>
      <NavigationContainer>
     <Stack.Navigator initialRouteName = "Index">
       <Stack.Screen name = "Index" component = {IndexScreen}/>
       <Stack.Screen name = "Show" component = {ShowScreen}/>
       <Stack.Screen name = "Create" component = {CreateScreen}/>
       <Stack.Screen name = "Edit" component = {EditScreen}/>
     </Stack.Navigator>
   </NavigationContainer>
     </Provider>
 */