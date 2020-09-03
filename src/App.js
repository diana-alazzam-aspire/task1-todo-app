import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import TasksList from './components/list';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentUsername, setCurrentUsername] = useState('');


  const addTask = (task)=> {
    let newList = tasks.slice();
    newList.push(task);
    setTasks(newList);
    localStorage.setItem('Tasks List', newList);
    localStorage.setItem('users', newList)

  }
  const showTasks = (userData)=> {
    localStorage.setItem('Current user', userData)
    setCurrentUsername(userData[0].split(' ')[0]);
    setTasks(userData.tasks)
  };

  useEffect(()=> {
    let localStorageTasksList = localStorage.getItem('Tasks List');
    // let localStorageCurrentUser = localStorage.getItem('Current user');

    if (localStorageTasksList) setTasks(localStorageTasksList.split(','));

  },[]);

  return (
    <div id='app'>
      <Header showTasks={showTasks} currentUsername={currentUsername}/>
      <Form addTask={addTask}/>
      {/* add condition and show not found if there we no tasks */}
      <TasksList tasksList={tasks}/>
      <Footer/>
    </div>
  );
}

export default App;
