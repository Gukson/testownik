import {StyleSheet, View} from 'react-native';
import LastTimeUsed from "./src/LastTimeUsed.tsx";
import Title from "./src/Title.tsx";
import NewTesto from "./src/NewTesto.tsx";



//ios 929651149844-qf9m03dv503ae8jeacg739cu0ql05i14.apps.googleusercontent.com
//web 929651149844-6e2l68a094jgq3pn1h25sdiemhmf6s9u.apps.googleusercontent.com
//android 929651149844-7em5hhrc330iddgqkl8t7q360sndqkq5.apps.googleusercontent.com

export default function App() {
  return (
    <View style={styles.container}>
      <Title/>
      <LastTimeUsed/>
      <NewTesto/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353535',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
});
