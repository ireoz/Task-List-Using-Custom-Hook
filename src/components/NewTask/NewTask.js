import Usehttp from '../../Hooks/use-http';

import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = (props) => {
 const { isLoading, error, sendRequest: sendTask} = Usehttp();
 
const enterdTask = (taskText) => {
  sendTask({
  method: 'POST',
  body: {text: taskText},
  headers: {
    'Content-Type': 'application/json',
  },
  },addTask)

  function addTask(taskid){
    
      const generatedId = taskid.name; // firebase-specific => "name" contains generated id
      const createdTask = { id: generatedId, text: taskText };
      props.onAddTask(createdTask);
   
  }
}

 

  return (
    <Section>
      <TaskForm onEnterTask={enterdTask} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
