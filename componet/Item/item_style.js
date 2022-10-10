import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 4,
    paddingHorizontal: 10,
    paddingVertical: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  id: {
    marginRight: 20,
  },
  title: {
    flex: 1,
  },
  btnRemove: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#ff4040",
  },
  titleRemove: {
    color: "#fff",
    fontWeight: "700",
  },
});

export default styles;
