import { NavigationContainer } from "@react-navigation/native";
import "./global.css"
import { Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
 
export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle:() => (
              <Text
                className ="w-full h-15 font-bold flex-row items-center justify-center "
              >
                Home
              </Text>
            )
          }}
      />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}