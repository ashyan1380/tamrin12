import React, {useState} from 'react';
import Header from './components/Header'
import Bottun from './components/Bottun'
import Tasks from './components/Tasks';


const App = ()=>{
  const title = "Task Manager";
//     const [tasks, setTasks] = useState([
//       {
//       id: 1,
//       text: "Doctors Appointment",
//       day: "Feb 5th at 2:30pm",
//       reminder: true,
//       },
//       {
//       id: 2,
//       text: "Meeting at School",
//       day: "Feb 6th at 1:30pm",
//       reminder: true,
//       },
//       {
//       id: 3,
//       text: "Food Shopping",
//       day: "Feb 5th at 2:30pm",
//       reminder: false,
//       }

//    ]);
// useEffect(() => {
//   const getTasks = async () => {
//   const tasksFromServer = await fetchTasks();
//   setTasks(tasksFromServer);
//   };
//   getTasks();
//   }, []);
  /*
  * Fetch Tasks
  */
  // const fetchTasks = async () => {
  // const response = await fetch("http://localhost:5000/tasks");
  // const data = await response.json();
  // return data;
  // };
  //  /*delete a task*/
  //  const handleDelete = (taskId) =>{
  //   //  console.log(tasks.filter((task)=>task.id=== taskId));
  //   setTasks(tasks.filter((task)=>task.id !== taskId))
    
  //  }

  //  /*Reminder Tggle*/

  //  const handleRminderChange = (id) => {
  //   // console.log(id);
  //   ////steps//
  //   ////step1: find task with task id
  //   ////step2: reminder toggle
  //   let tempTask = tasks.map((task)=> task.id === id ? {...task, reminder: !task.reminder} : task)
  //   // console.log(tempTask);
  //   ////step3: set new state and save it
  //   setTasks(tempTask)
  //   };
  
    return(
      <div className="container">
         <Header  headerTitle={title}  />
         {/* <Tasks tasksList={tasks} setTasks={setTasks}></Tasks> */}
         {/* {tasks.length > 0 ?
          <Tasks tasksList={tasks} onDelete={handleDelete} onReminderChange={handleRminderChange}/> 
          : <div className="noTasks">There is no task</div>

          } */}
        </div>
      );
};


export default App;



