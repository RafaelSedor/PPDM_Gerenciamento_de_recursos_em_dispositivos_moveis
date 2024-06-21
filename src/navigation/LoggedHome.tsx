import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import ShoppingListScreen from '../screens/ShoppingListScreen';
import CustomDrawerContent from '../components/CustomDrawerContent';
import { RootStackParamList } from '../types';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useAuthStore } from '../store';

const Drawer = createDrawerNavigator<RootStackParamList>();

const LoggedHome = () => {
  const setToken = useAuthStore((state) => state.setToken);

  const handleLogout = () => {
    setToken(false);
  };

  return (
    <Drawer.Navigator drawerContent={(props) => <CustomDrawerContentComponent {...props} handleLogout={handleLogout} />}>
      <Drawer.Screen name="ShoppingList" component={ShoppingListScreen} />
    </Drawer.Navigator>
  );
};

const CustomDrawerContentComponent = (props: DrawerContentComponentProps & { handleLogout: () => void }) => {
  return (
    <View style={styles.drawerContent}>
      <CustomDrawerContent {...props} />
      <Button title="Logout" onPress={props.handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default LoggedHome;
