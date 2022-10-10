import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "./item_style";

export default function LayoutItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.id}> {item.id} </Text>
      <Text style={styles.title}>{item.title}</Text>
      <TouchableOpacity style={styles.btnRemove} onPress={onPress}>
        <Text style={styles.titleRemove}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
}
