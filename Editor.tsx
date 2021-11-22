import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import WebView, { WebViewMessageEvent } from "react-native-webview";
import EditorHTML from "./html";
export default class Editor extends Component {
  private _webview: React.RefObject<WebView>;

  constructor(props: any) {
    super(props);
    this._webview = React.createRef();
  }

  handleFormat(format: string) {
    console.log(format);
    this._webview.current?.postMessage(format);
  }

  private onMessage = (event: WebViewMessageEvent) => {
    console.log(event.nativeEvent.data);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
          <TouchableOpacity
            onPress={() => this.handleFormat("bold")}
            style={styles.btn}
          >
            <Text>B</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handleFormat("italic")}
            style={styles.btn}
          >
            <Text>I</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handleFormat("html")}
            style={styles.btn}
          >
            <Text>Source</Text>
          </TouchableOpacity>
        </View>
        <WebView
          ref={this._webview}
          style={styles.editor}
          javaScriptEnabled={true}
          source={{ html: EditorHTML }}
          onMessage={this.onMessage}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  editor: {
    flexGrow: 1,
    borderWidth: 1,
  },
  container: {
    margin: 10,
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  buttons: {
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    alignItems: "center",
    backgroundColor: "#5E8D48",
    padding: 5,
    margin: 3,
    minWidth: 70,
  },
});
