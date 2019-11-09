import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setCourseGoals(currentGoals => [
      //... -> unpacks array
      ...currentGoals,
      {coolId: Math.random().toString(), value: goalTitle}
    ]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      //Filter function: return a new array based on old array filtered by criteria
      //function passed in runs on each element of the array
      return currentGoals.filter((goal) => {
        return goal.coolId !== goalId; //return true if != bc want to keep everything but goalId
      });
    });
  }

  const cancelGoalAdditionHandler = ()=> {
    setIsAddMode(false);
  }

  return (
    <View style={styles.root}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancelGoal={cancelGoalAdditionHandler}/>
      <FlatList 
        keyExtractor={(item, index) => item.coolId}
        data={courseGoals} 
        renderItem={itemData => (
          <GoalItem 
            id={itemData.item.coolId} 
            onDelete={removeGoalHandler} 
            title={itemData.item.value}
          />
        )}
      />
        {/* {courseGoals.map(goal => ( 
          <View style={styles.listItem} key={goal}>
            <Text>{goal}</Text>
          </View>
        ))} */}
      {/* </FlatList> */}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50
  }
});
