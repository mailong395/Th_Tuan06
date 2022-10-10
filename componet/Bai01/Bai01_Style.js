import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  headerAdd: {
    paddingTop: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
    backgroundColor: "#c4c4c4",
  },
  inputText: {
    borderWidth: 1,
    width: 200,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginRight: 20,
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  btnAdd: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: "#00aeef",
  },
  titleBtnAdd: {
    fontWeight: "700",
    color: "#fff",
  },

  section: {
    paddingHorizontal: 10,
  },
});

export default styles;
