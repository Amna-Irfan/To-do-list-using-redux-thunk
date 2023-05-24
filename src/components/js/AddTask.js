import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import '../css/AddTask.css';
import { v4 as uuid } from 'uuid';
import { addTask, fetchData } from '../../action';

const AddTask = ({task_add, task_fetch}) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title){
            const newTask = {"id": uuid().slice(0,8), "title":title, "completed":false};
            task_add(newTask);
            setTitle('');
        }
        else{
            alert('Please Enter Values');
        }
    };

    useEffect(() => {
        task_fetch();
    }, [task_fetch]);

    return (
    <React.Fragment>
        <h1>ToDo List App</h1>
        <div className='form-center'>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label style={{fontWeight: 'bold'}} htmlFor='taskName'>Task Name: </label>
                    <input 
                    type='text'
                    id='title'
                    name='title'
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <button className='button' type='submit'>+Add ToDo</button>
            </form>
        </div>
    </React.Fragment>
)};

const mapDispatchToProps= (dispatch) =>{
    return {
        task_add: (newTask) => dispatch(addTask(newTask)),
        task_fetch: () => dispatch(fetchData())
    };
}

export default connect(null, mapDispatchToProps)(AddTask);