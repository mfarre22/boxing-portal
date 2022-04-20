import Parse from "parse";

export const getAllWorkouts = () => {
    const Workout = Parse.Object.extend("Workout");
    const query = new Parse.Query(Workout);
    return query.find().then((results) => {
    return results;
  });
};

// Service to retrieve workouts specific to user
export const getUserWorkouts = () => {

  // This function grabs the workouts object from the current user

  const User = Parse.User.current();

  // console.log(User);

  const relation = User.relation("workouts");

  // console.log(relation);

  const query = relation.query();

  // console.log(query);

  return query.find().then((results) => {
    // console.log(results);
    // console.log(results[0]);
    // console.log(results[0].get("name"));
    // console.log(results[1]);
    return results;
  });
};

export const addWorkout = (data) => {
  // Create new workout and add values to it
  let Workout = new Parse.Object('Workout');
  Workout.set("name", data.get("workoutName"))
  Workout.set("muscleGroup", data.get("focus"));

  try {
    Workout.save().then(() => {
      const User = Parse.User.current();
      const relation = User.relation("workouts");
      relation.add(Workout);
      User.save();
      alert('Success! Workout created!');
    });
    return true;
  } catch (error) {
    alert(`Error! ${error.message}`);
    return false;
  };
}