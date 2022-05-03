import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Another Piece of text!</Text>
      </View>

      {/* Margin, for example, typically wants a number and this number will then be 
        translated to pixels which are automatically adjusted to the device pixel 
        density. */}

      {/* Inline styling (not the best way) */}
      {/* <Text style={{
        margin: 16,
        borderWidth: 2,
        borderColor: 'red',
        padding: 16
      }}
      >Hello World</Text> */}

      <Text style={styles.dummyText}
      >Hello World</Text>
      <Button title="Tap me!" />
    </View >
  );
}

// Style sheet object
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    alignItems: 'center',
    justifyContent: 'center',
  },
  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'blue',
    padding: 16
  }
});

