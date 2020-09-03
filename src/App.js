import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import List from './components/list';

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
    setTasks(localStorageTasksList.split(','));
  },[])

  return (
    <div className="App">
      <Header/>
      <Form addTask={addTask}/>
      <List tasksList={tasks}/>
      <Footer />
    </div>
  );
}

export default App;
