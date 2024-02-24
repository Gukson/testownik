import { Dimensions, StyleSheet, Text, View } from "react-native";

const Title = () => {
    return (
        <View>
            <Text style={styles.container}>Testownik</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        fontSize: 40,
        textAlign: 'center',
        height: 0.1 * Dimensions.get("window").height,
        color: "white"
    }
})

export default Title;