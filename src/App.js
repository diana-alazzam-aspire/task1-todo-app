import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import TasksList from './components/list';
import Login from './components/auth/login';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task)=> {
    let newList = tasks.slice();
    newList.push(task);
    setTasks(newList);
    localStorage.setItem('Tasks List', newList)
  }
  const showTasks = (userTasks)=> {
    console.log('hello')
    setTasks(userTasks)
  };

  useEffect(()=> {
    let localStorageTasksList = localStorage.getItem('Tasks List');
    if (localStorageTasksList) setTasks(localStorageTasksList.split(','));
  },[]);

  return (
    <div id='app'>
      <Header showTasks={showTasks}/>
      <Form addTask={addTask}/>
      {/* add condition and show not found if there we no tasks */}
      <TasksList tasksList={tasks}/>
      <Footer/>
    </div>
  );
}

export default App;
