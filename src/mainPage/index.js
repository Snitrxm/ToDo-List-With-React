import './style.css';
import { BsPlus } from 'react-icons/bs';
import { useState } from 'react';
import Task from '../task/index.js';


const MainPage = () => {
    const [input, setInput] = useState('');
    const [tasks, setTasks] = useState([]);

    const handleChange = (e) => {
        setInput(e.target.value);
    }


    const handleSubmit = () => {
        if(input !== ''){
            setTasks(prevTasks => [...prevTasks, input]);
            setInput('');
        }else{
            alert('Please, fill with a task');
        }

    }

    const handleDelete = (deletedTask) => {
        const filteredTask = tasks.filter(task => task !== deletedTask);
        setTasks(filteredTask);
        
    }

    

  return (
    <div className='body'>
      <div className='container'>
          <div className='title'>
              <h1>Tarefas</h1>
          </div>
          <div className='tasks'>
            {tasks.map(task => {
                return <Task task={task} delete={() => handleDelete(task)} />
            })}
          </div>
          <div className='addTask'>
                <div className='button' onClick={handleSubmit}>
                    <BsPlus className='icon'/>
                </div>
                <div className='inputField'>
                    <input type="text" placeholder='Add some task' value={input} onChange={handleChange}></input>
                </div>
          </div>
      </div>
    </div>
  );
}


export default MainPage;