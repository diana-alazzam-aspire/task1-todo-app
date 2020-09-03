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
    let users = JSON.parse(localStorage.getItem('users'));
    let modifiedUsers = users && users.map(user=> {
      
      if((user.username === currentUser.username) && (user.password === currentUser.password)){
        let targetedUser = {...user};
        targetedUser.tasks.push(task);
        setTasks(targetedUser.tasks);
        setCurrentUser(targetedUser);
        localStorage.setItem('Current user', JSON.stringify(targetedUser))
        return targetedUser;
      } else {
        return user;
      }
    });
    localStorage.setItem('users', JSON.stringify(modifiedUsers))
  }

  const addCurrentUser = (userData) => {
    localStorage.setItem('Current user', JSON.stringify(userData));
    setCurrentUser(userData);
    setTasks(userData.tasks)
  };
  const logoutHandler = () => {
    setCurrentUser({});
    localStorage.removeItem('Current user');
    setTasks([]);
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
      <Form addTask={addTask} tasksList={tasks}/>
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
