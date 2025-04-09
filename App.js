import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Contato from './screens/faleconosco';
import Login from './screens/login';
import Estoque from './screens/estoque';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


export function DrawerTabs(){
  const Drawer = createDrawerNavigator();
  return(
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
        name="Estoque"
        component={Estoque}

        />
        <Drawer.Screen
        name="Contato"
        component={Contato}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
export default function App() {
  const Drawer = createDrawerNavigator();
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
         options={{
          headerShown:false,
         }}
          component={Login}
        />
        <Stack.Screen
        name="Estoque"
        component={DrawerTabs} /* essa função nunca é chamada no Stack por algum motivo mas ela funciona  */
        >
        </Stack.Screen>
      /* </Stack.Navigator>

        <Drawer.Navigator>
        <Drawer.Screen
        name="Estoque"
        component={Estoque}  prof to só deixando comentario de ultima hora, mas descomenta essa linha pra aparecer o estoque e contato e comenta todo stack pra n interferir

        />
        <Drawer.Screen
        name="Contato"
        component={Contato}
        />
      </Drawer.Navigator> */
      </NavigationContainer>
  );
}

