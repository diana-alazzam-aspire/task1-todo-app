import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Form from './components/form';
import TasksList from './components/list';
import { If, Then } from './components/if/if';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentUser, setCurrentUser] = useState({});


  const addTask = (task) => {
    let newList = tasks.slice();
    newList.push(task);
    setTasks(newList);
    localStorage.setItem('Tasks List', newList);
    localStorage.setItem('users', newList)

  }
  const addCurrentUser = (userData) => {
    localStorage.setItem('Current user', JSON.stringify(userData));
    setCurrentUser(userData);
    setTasks(userData.tasks)
  };
  const logoutHandler = () => {
    setCurrentUser({});
    localStorage.removeItem('Current user');
  }

  useEffect(() => {
    let localStorageCurrentUser = JSON.parse(localStorage.getItem('Current user'));

    if (localStorageCurrentUser) {
      setCurrentUser(localStorageCurrentUser);
      setTasks(localStorageCurrentUser.tasks);
    };

  }, []);

  return (
    <div id='app'>
      <Header addCurrentUser={addCurrentUser} currentUser={currentUser} logout={logoutHandler} />
      <Form addTask={addTask} />
      <If condition={tasks.length}>
        <Then>
          <TasksList tasksList={tasks} />
        </Then>
      </If>
      <Footer />
    </div>
  );
}

export default App;
