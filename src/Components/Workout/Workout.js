import React, { useEffect, useState } from "react";
import { addWorkout, getAllWorkouts, getUserWorkouts } from "../../Common/Services/WorkoutService";
import Menubar from "../Menubar/Menubar";
import WorkoutTable from "./WorkoutTable";
import WorkoutForm from "./WorkoutForm";
import { authenticationCheck } from "../../Common/Services/AuthService";
import { Link } from "react-router-dom";
import '../../Common/css/workout.css';

const WorkoutModule = () => {
  const [workouts, setWorkouts] = useState([]);
  const [userWorkouts, setUserWorkouts] = useState([]);
  const [filterOn, setFilterOn] = useState(false);
  const [category, setCategory] = useState('');

  var check = authenticationCheck();

  // call getAllWorkouts from service 
  useEffect(() => {
    if(check) {
      getAllWorkouts().then((workouts) => {
        setWorkouts(workouts);
        console.log(workouts)
      });
    }
  }, [check]);

  useEffect(() => {
    if(check) {
      getUserWorkouts().then((userWorkouts) => {
        setUserWorkouts(userWorkouts);
      });
    }
  }, [check]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submitted: ", e.target);
    const data = new FormData(e.target);
    addWorkout(data);
  };

  if(check) {
    return (
      <div>
        <Menubar/>
        {/*
        <p class="filter">
        <Box sx={{ minWidth: 120 }}>
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Filter"
              onChange={handleChange}
            >
              <MenuItem value={10}>Full Body</MenuItem>
              <MenuItem value={20}>Upper Body</MenuItem>
              <MenuItem value={30}>Lower Body</MenuItem>
              <MenuItem value={40}>Core</MenuItem>
            </Select>
          </FormControl>
        </Box>
    </p>*/}
        <WorkoutTable workouts={userWorkouts}/>
        <WorkoutForm onSubmit={onSubmitHandler}/>
      </div>
    );
  }
  else {
    return(
      <div>
        {/* Two buttons to send users to login or register if they reach this */}
        <p>You shouldn't be here! <Link to="/login">Log In</Link> or <Link to="/register">Register</Link> to view your page.</p>
      </div>
    );
  }
};

export default WorkoutModule;
