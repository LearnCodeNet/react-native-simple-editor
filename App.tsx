import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import Editor from "./Editor";

const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);

export default function App() {
  return (
    <View style={styles.root}>
      <MyStatusBar backgroundColor="#5E8D48" barStyle="light-content" />
      <Editor />
    </View>
  );
}

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
});
