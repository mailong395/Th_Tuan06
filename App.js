import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import ScreenBai01 from "./componet/Bai01/Bai01_index";
import ScreenBai02 from "./componet/Bai02/Bai02_index";

export default function App() {
  const [isScreen, setScreen] = useState(false);

  return (
    <View style={styles.container}>
      {isScreen ? <ScreenBai01 /> : <ScreenBai02 />}
      <View style={styles.listButton}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setScreen(true);
          }}
        >
          <Text style={styles.title}>Bài 01</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setScreen(false);
          }}
        >
          <Text style={styles.title}>Bài 02</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "#c3c3c3",
  },
  btn: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 4,
    backgroundColor: "#034bd9",
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
  },
});
