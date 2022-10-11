import { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import LayoutItem from "../Item/item_index";
import styles from "./Bai02_style";

export default function ScreenBai02() {
  const [isData, setData] = useState([]);
  const [isTitle, setTitle] = useState([]);

  useEffect(() => {
    fetch("https://63452f62dcae733e8feb7e5f.mockapi.io/todos")
      .then((response) => {
        return response.json();
      })
      .then(async (data) => {
        await setData(data);
      })
      .catch((error) => {
        return console.error("Error: " + error);
      });
  }, []);

  const addItem = () => {
    const data = { title: isTitle };

    fetch("https://63452f62dcae733e8feb7e5f.mockapi.io/todos", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setData((prev) => [...prev, data]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log("Add Finish");
  };

  const renderItem = ({ item }) => {
    const deleteItem = (key) => {
      fetch("https://63452f62dcae733e8feb7e5f.mockapi.io/todos/" + key, {
        method: "DELETE",
      })
        .then((response) => response.json())
        .then((data) => {
          setData((prev) => [...prev].filter((item) => item.id !== data.id));
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      console.log("Delete Finish");
    };

    return <LayoutItem item={item} onPress={() => deleteItem(item.id)} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerAdd}>
        <TextInput
          style={styles.inputText}
          placeholder="Input Text"
          value={isTitle}
          onChangeText={setTitle}
        />
        <TouchableOpacity style={styles.btnAdd} onPress={addItem}>
          <Text style={styles.titleBtnAdd}>+</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.section}>
        <FlatList data={isData} renderItem={renderItem} />
      </SafeAreaView>
    </View>
  );
}
