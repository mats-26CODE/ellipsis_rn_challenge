import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useDispatch, useSelector } from "react-redux";
import { fetchItem } from "./src/actions/fetchItem";
import IconBadge from "react-native-icon-badge";
import { Text } from "react-native";

//-> icon imports
import { AntDesign } from "@expo/vector-icons";

//-> component imports
import HomeScreen from "./src/components/home/HomeScreen";
import ItemScreen from "./src/components/common/ItemScreen";
import CartScreen from "./src/components/cart/CartScreen";
import SettingScreen from "./src/components/settings/SettingsScreen";
import Signin from "./src/components/auth/Signin";
import Signup from "./src/components/auth/Signup";
import { selectCart } from "./src/features/cartSlice";

//-> Authentication Screen Stack Navigation
const AuthStack = createNativeStackNavigator();
const AuthSpace = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Signin} />
      <AuthStack.Screen name="Signup" component={Signup} />
    </AuthStack.Navigator>
  );
};

//-> Home Screen Stack Navigation
const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen name="ItemScreen" component={ItemScreen} />
    </HomeStack.Navigator>
  );
};

//-> Cart Screen Stack Navigation
const CartStack = createNativeStackNavigator();
const CartScreenStack = () => {
  return (
    <CartStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <CartStack.Screen name="CartScreen" component={CartScreen} />
    </CartStack.Navigator>
  );
};

//-> Settings Screen Stack Navigation
const SettingsStack = createNativeStackNavigator();
const SettingsScreenStack = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <SettingsStack.Screen name="SettingsScreen" component={SettingScreen} />
    </SettingsStack.Navigator>
  );
};

//-> Our App's Material Bottom Tabs Navigation
const Tab = createBottomTabNavigator();
const AppSpace = () => {
  //-> get cart items from redux
  const cart = useSelector(selectCart);
  const cartQuantity = cart.length;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let badge = false;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Cart") {
            badge = true;
            iconName = focused ? "shoppingcart" : "shoppingcart";
          } else if (route.name === "Settings") {
            iconName = focused ? "setting" : "setting";
          }

          // You can return any component that you like here!
          // return <Ionicons name={iconName} size={24} color="black" />;
          if (badge) {
            return (
              <IconBadge
                MainElement={
                  <AntDesign name={iconName} size={24} color={"black"} />
                }
                BadgeElement={
                  <Text style={{ color: "#ffffff" }}>{cartQuantity}</Text>
                }
                IconBadgeStyle={{
                  width: 20,
                  height: 20,
                  backgroundColor: "#b6aaec",
                  marginRight: -15,
                  marginTop: -5,
                }}
                Hidden={cartQuantity == 0}
              />
            );
          } else {
            return <AntDesign name={iconName} size={24} color="black" />;
          }
          // return <MaterialCommunityIcons name="account-circle" size={24} color="black" />;
        },
        tabBarActiveTintColor: "#b6aaec",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Cart" component={CartScreenStack} />
      <Tab.Screen name="Settings" component={SettingsScreenStack} />
    </Tab.Navigator>
  );
};

//-> As our app doesn't need to have login / auth functionality
//-> Let's just redirect the user from the auth space (signin + signup )
//-> to the app's main space (bottom tabs -> home cart settings)
const UserStack = createNativeStackNavigator();
const UserStackScreen = () => {
  return (
    <UserStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <UserStack.Screen name="AuthSpace" component={AuthSpace} />
      <UserStack.Screen name="AppSpace" component={AppSpace} />
    </UserStack.Navigator>
  );
};

const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchItem({ dispatch });
  }, []);

  return (
    <NavigationContainer>
      <UserStackScreen />
    </NavigationContainer>
  );
};

export default Routes;
