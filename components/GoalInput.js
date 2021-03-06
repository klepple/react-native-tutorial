import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal('');
  }

  return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
          <TextInput 
            placeholder= " Enter goal... " 
            style={styles.textInput} 
            onChangeText={goalInputHandler}
            value={enteredGoal}
          />
          <View style={styles.horizontal}>
            <View style={styles.button}>
              <Button title=" ADD " onPress={addGoalHandler}/>
            </View>
            <View style={styles.button}>
              <Button title=" CANCEL " color="red" onPress={props.onCancelGoal}/>
            </View>
          </View>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
    inputContainer: {
      justifyContent: 'center', 
      alignItems: 'center',
      flex: 1
    },
    textInput: {
      borderColor: 'black', 
      borderWidth: 1, 
      width: '80%',
      padding: 10
    }, 
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '60%'
    },
    button: {
        width: '40%',
        justifyContent: 'space-around'
    }
});

export default GoalInput;