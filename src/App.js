import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import TasksList from './components/list';


function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task)=> {
    let newList = tasks.slice();
    newList.push(task);
    setTasks(newList);
    localStorage.setItem('Tasks List', newList)
  }
  useEffect(()=> {
    let localStorageTasksList = localStorage.getItem('Tasks List');
    if (localStorageTasksList) setTasks(localStorageTasksList.split(','));
  },[]);

  return (
    <div id='app'>
      <Header/>
      <Form addTask={addTask}/>
      <TasksList tasksList={tasks}/>
      <Footer/>
    </div>
  );
}

export default App;
