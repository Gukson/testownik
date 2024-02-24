import { Button, Dimensions, StyleSheet, Text, View, Modal, TextInput } from "react-native";
import React, { useState } from "react";
import useDrivePicker from "react-google-drive-picker";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";


WebBrowser.maybeCompleteAuthSession();

const NewTesto = () => {
  const [userInfo, setUserInfo] = React.useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [request, response, promptAsync] = Google.useAuthRequest({
    iosClientId: "929651149844-qf9m03dv503ae8jeacg739cu0ql05i14.apps.googleusercontent.com",
    webClientId: "929651149844-6e2l68a094jgq3pn1h25sdiemhmf6s9u.apps.googleusercontent.com",
    androidClientId: "929651149844 - 7em5hhrc330iddgqkl8t7q360sndqkq5.apps.googleusercontent.com"
  });
  return (
    <View style={styles.button}>
      <Button
        title="Dodaj"
        onPress={() => setModalVisible(true)}
        color="white"
      />
      <Modal visible={isModalVisible}
             onRequestClose={() => setModalVisible(false)}
             animationType="slide"
             presentationStyle="pageSheet">
        <View style={styles.modal}>
          <LoadFromDrive />
          <Button title="sign with google" onPress={() => promptAsync} />
          <View style={styles.button}>
            <Button title="close" color="midnightblue" onPress={() => setModalVisible(false)} />
          </View>

        </View>
      </Modal>
    </View>
  );
};


const LoadFromDrive = () => {
  const [text, setText] = useState("");

  return (
    <View style={{ height: 100, marginBottom: 75 }}>
      <Text style={styles.title}>Nowy testownik</Text>
      <TextInput
        style={styles.input}
        placeholder="link do folderu na dysku google"
        value={text}
        onChangeText={text => setText(text)}
      />
      <Button title="Dodaj" color="midnightblue" onPress={() => handleOpenPicker} />
    </View>
  );
};

const handleOpenPicker = () => {
  const [openPicker, authResponse] = useDrivePicker();
  openPicker({
    clientId:
      "929651149844-6e2l68a094jgq3pn1h25sdiemhmf6s9u.apps.googleusercontent.com",
    developerKey: "AIzaSyA2OoS3BdBKrBc7GIIeYCVOHxe__lMXq0Q",
    viewId: "DOCS",
    // token: token, // pass oauth token in case you already have one
    showUploadView: true,
    showUploadFolders: true,
    supportDrives: true,
    multiselect: true,
    // customViews: customViewsArray, // custom view
    callbackFunction: (data) => {
      if (data.action === "cancel") {
        console.log("User clicked cancel/close button");
      }
      console.log(data);
    }
  });
};


const styles = StyleSheet.create({
  button: {
    width: 0.3 * Dimensions.get("window").width,
    marginTop: 20,
    backgroundColor: "rgba(217, 217, 217, 0.12)",
    borderRadius: 10,
    alignContent: "center"
  },
  modal: {
    backgroundColor: "rgba(217, 217, 217, 0.12)",
    flex: 1,
    alignItems: "center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 10,
    width: 0.8 * Dimensions.get("window").width
  },
  title: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 30
  }

});

export default NewTesto;
