import React from 'react';
import { connect } from 'react-redux';
import '../css/List.css';
import Task from './Task';

const List = ({ tasks = []}) => {
    return (
    <section className='list'>
        {
            tasks.map((task)=>{
                return(
                    <Task key={task.id} {...task}/>
                )
            })
        }
    </section>
)};

const mapStateToProps = (store) =>{
    const {tasks} = store;
    return {tasks};
}

export default connect(mapStateToProps)(List);