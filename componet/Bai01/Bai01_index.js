import { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import data from "../data";
import LayoutItem from "../Item/item_index";
import styles from "./Bai01_Style";

export default function ScreenBai01() {
  const [isData, setData] = useState(data);
  const [isId, setId] = useState(1);
  const [isTitle, setTitle] = useState("");

  function addItem() {
    setId(isData.length + 1);
    const item = {
      id: isId,
      title: isTitle,
    };
    isData.forEach((i) => {
      if (i.id === item.id) {
        item.id++;
      }
    });
    isData.push(item);
    setData(isData);
  }

  function deleteItem(key) {
    setData((element) =>
      element.filter((isData) => {
        return isData.id !== key;
      })
    );
    for (let i = 0; i < isData.length; i++) {
      if (isData[i].id === key) {
        isData.splice(i, 1);
      }
    }
  }

  const renderItem = ({ item }) => {
    return <LayoutItem item={item} onPress={() => deleteItem(item.id)} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerAdd}>
        <TextInput
          onChangeText={setTitle}
          value={isTitle}
          style={styles.inputText}
          placeholder="Input Text"
        />
        <TouchableOpacity style={styles.btnAdd} onPress={addItem}>
          <Text style={styles.titleBtnAdd}>+</Text>
        </TouchableOpacity>
      </View>
      <SafeAreaView style={styles.section}>
        <FlatList
          data={isData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}
