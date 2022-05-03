import { StyleSheet, Text, View, Pressable } from 'react-native';

function GoalItem(props) {

  return (

    <View View
      style={styles.goalItem} >
      <Pressable
        android_ripple={{ color: '#5e0acc' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

export default GoalItem;

// Style sheet object
const styles = StyleSheet.create({
  // Border radius is not working in iOS
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  pressedItem: {
    opacity: 0.5
  },
  goalText: {
    padding: 8,
    color: 'white',
  },
});

