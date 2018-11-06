import { NativeModules } from "react-native";

export const AppName = NativeModules.ConfigModule.APP_NAME as string;
export const AppBaseUri = NativeModules.ConfigModule.APP_BASE as string;
export const IsDebug = NativeModules.ConfigModule.IS_DEBUG as boolean;
