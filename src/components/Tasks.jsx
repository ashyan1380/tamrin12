import { array, checkPropTypes } from 'prop-types';
import React, {useState} from 'react'
import PropTypes from 'prop-types'; 
// const [task, setTask] = useState(TASKS);

const Tasks = (tasksList,setTasks, ...props) => {
    // const [tasks, setTasks] = useState( [
    //     {
    //         id: 1,
    //         text: "Doctor Appointment",
    //         day: "Feb 5th at 2:30pm",
    //         reminder: true,
    //     },
    //     {
    //         id: 2,
    //         text: "Meeting at School",
    //         day: "Feb 6th at 1:30pm",
    //         reminder: true,
    //     },
    //     {
    //         id: 3,
    //         text: "Food Shopping",
    //         day: "Feb 5th at 2:30pm",
    //         reminder: false,
    //     },
    // ])
    // const handleAddTask = () =>  {
    //     setTasks([...tasksList, {
    //         id:4,
    //         text: "i am new :)", 
    //         day:"....",
    //         reminder: false,
    //     }]);
    // }
    return (
        <div>{tasksList.map(
            (task , index) => (
                    <div key={index}>{task.text}</div>
                )
            )}
        </div>
    );
}
// Tasks.prototypes={
//     tasksList: prototypes.array,
// };
export default Tasks;