import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Profile: undefined;
  Settings: undefined;
  LoggedHome: undefined;
  ShoppingList: undefined;
};

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
export type SettingsScreenProps = NativeStackScreenProps<RootStackParamList, 'Settings'>;
export type LoggedHomeProps = DrawerScreenProps<RootStackParamList, 'LoggedHome'>;
export type ShoppingListScreenProps = DrawerScreenProps<RootStackParamList, 'ShoppingList'>;
