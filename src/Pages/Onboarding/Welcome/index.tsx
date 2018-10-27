import * as React from "react";
import { View, Text } from "react-native";

import * as config from "../../../Services/Configuration";

import styles from "./styles";

export default function Welcome() {
    return <View style={styles.container}>
        <Text>{config.AppName}, {config.AppBaseUri}, {config.IsDebug ? "DEBUG" : "NON DEBUG"}</Text>
    </View>
}
