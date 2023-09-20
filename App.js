import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const GetScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>GET Screen</Text>
  </View>
);

const PostScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>POST Screen</Text>
  </View>
);

const PutScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>PUT Screen</Text>
  </View>
);

const DeleteScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>DELETE Screen</Text>
  </View>
);

const HomeScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home Screen</Text>
  </View>
);

const AboutScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>About Screen</Text>
  </View>
);

function EmployeeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="GET"
        component={GetScreen}
        options={{
          tabBarLabel: 'GET',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-get" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="POST"
        component={PostScreen}
        options={{
          tabBarLabel: 'POST',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-post" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="PUT"
        component={PutScreen}
        options={{
          tabBarLabel: 'PUT',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-put" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="DELETE"
        component={DeleteScreen}
        options={{
          tabBarLabel: 'DELETE',
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-delete" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Employee Operations" component={EmployeeTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
