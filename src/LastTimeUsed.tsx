import { Dimensions, StyleSheet, Text, View } from "react-native";

const MainPage = () => {
  return (
    <>
      <View style={styles.square}>
        <Text style={styles.text}>Ostatnio uzywane</Text>
        <View
          style={{
            borderBottomColor: 'white',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        />
      </View>
    </>

  )
}

const styles = StyleSheet.create({
  square: {
    width: 0.9 * Dimensions.get('window').width,
    height: 400,
    backgroundColor: "rgba(217, 217, 217, 0.12)",
    borderRadius: 15
  },
  text: {
    textAlign: "center",
    fontSize: 30,
    color: "white"
  }
})



export default MainPage;

