export const FETCH_DATA = "FETCH_DATA";
export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const COMPLETE_TASK = "COMPLETE_TASK";

export const fetchData = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(tasks => {
        dispatch({type: FETCH_DATA, payload: {tasks}});
    });    
}

export const addTask = (newTask) => {
    return {type: ADD_TASK, payload: {newTask}};
}

export const deleteTask = (id) => {
    return {type: DELETE_TASK, payload: {id}};
}

export const completeTask = (id) => {
    return {type: COMPLETE_TASK, payload: {id}};
}
