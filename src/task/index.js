import { BiTrashAlt } from 'react-icons/bi';
import { useRef } from 'react';

import './style.css'

const Task = (props) => {
    const inputButton = useRef(null);
    const taskTitle = useRef(null);
    const subtitle = useRef(null);

    const handleDone = () => {
        if(inputButton.current.checked === true){
            taskTitle.current.style.textDecoration = "line-through";
            subtitle.current.style.textDecoration = "line-through";
        }else{
            taskTitle.current.style.textDecoration = "none";
            subtitle.current.style.textDecoration = "none";
        }
    }

     return (
        <div className="task">
            <div className="taskContainer">
                <input type='checkbox' className='input' onChange={handleDone} ref={inputButton}></input>
                <div className="texts">
                    <h3 className='h3' ref={taskTitle}>{props.task}</h3>
                    <p className='p' ref={subtitle}>Tarefas</p>
                </div>
            </div>
            <div className="trashIcon">
                <BiTrashAlt className='trash' onClick={props.delete}/>
            </div>
        </div>
    );
}


export default Task;