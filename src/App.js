import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import Usehttp from './Hooks/use-http';

function App() {
 const { isLoading, error, sendRequest: fetchTasks} = Usehttp();
  const [tasks, setTasks] = useState([]);


  function addTask(taskData){
  
    const loadedTasks = [];

    for (const taskKey in taskData) {
      loadedTasks.push({ id: taskKey, text: taskData[taskKey].text });
    }

    setTasks(loadedTasks);
  }
  

     
    
  useEffect(() => {
    fetchTasks({}, addTask);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
