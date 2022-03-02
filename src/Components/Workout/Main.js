import React, { useEffect, useState } from "react";
import getAllWorkouts from "../../Common/Services/Service";
import WorkoutTable from "./WorkoutTable";
import WorkoutForm from "./WorkoutForm";
import '../../Common/css/workout.css';

const WorkoutModule = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    getAllWorkouts().then((workouts) => {
      console.log(workouts);
      setWorkouts(workouts);
    });
  }, []);
  return (
    <div>
      <WorkoutTable workouts={workouts}/>
      <WorkoutForm/>
    </div>
  );
};

export default WorkoutModule;
