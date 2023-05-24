import React from 'react';
import { connect } from 'react-redux';
import '../css/Task.css';
import { deleteTask, completeTask } from '../../action';

const Task = ({title, completed, task_delete, task_complete}) => {
    return (
    <React.Fragment>
        { 
            <div className='item'>
                <input type="checkbox" onChange={()=>task_complete()} checked={completed} />
                <h4 className={completed? 'completed-task': 'pending-task'}>{title}</h4>
                <button className='delete-button' type='button' onClick={()=>task_delete()}>Delete</button>
            </div>
        }
    </React.Fragment>
)};

const mapDispatchToProps= (dispatch, ownProps) =>{
    const {id} = ownProps;
    return {
        task_delete: () => dispatch(deleteTask(id)),
        task_complete: () => dispatch(completeTask(id))
    };
}

export default connect(null, mapDispatchToProps)(Task);