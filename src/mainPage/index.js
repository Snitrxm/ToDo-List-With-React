import './style.css';
import { BsPlus } from 'react-icons/bs';

import { useState } from 'react';
import Task from '../task/index.js';


const MainPage = () => {
    const[input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }


    const handleSubmit = () => {
        if(input !== ''){
            const tasks = document.getElementsByClassName('tasks');
            tasks[0].appendChild(<Task task={input}/>); //Como fazer isso funcionar?
            
            setInput('');
        }else{
            alert('Please, fill with a task');
        }

    }

    

  return (
    <div className='body'>
      <div className='container'>
          <div className='title'>
              <h1>Tarefas</h1>
          </div>
          <div className='tasks'>
                
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