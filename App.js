import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import UserScreen from "./screens/UserScreen";
import { Provider } from "react-redux";
import { store } from './store';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <Provider store={store} >
      <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen 
                name="Home" 
                component={HomeScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen 
                name="User" 
                component={UserScreen}
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
