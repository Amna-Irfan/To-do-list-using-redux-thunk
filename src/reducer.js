import {FETCH_DATA, ADD_TASK, DELETE_TASK, COMPLETE_TASK} from './action';

function reducer(state, action){
    switch(action.type){
        case FETCH_DATA:
        {
            return {...state, tasks: action.payload.tasks};
        }
        case ADD_TASK:
        {
            let newTask = action.payload.newTask;
            let tempTasks = [...state.tasks, newTask];
            return {...state, tasks: tempTasks};
        }
        case DELETE_TASK:
        {
            let tempTasks = state.tasks.filter((task) => task.id !== action.payload.id);
            return {...state, tasks: tempTasks};
        }
        case COMPLETE_TASK:
        {
            let tempTasks = state.tasks.map((task)=>{
            if(task.id === action.payload.id){
                task = {...task, completed: !task.completed}
            }
            return task;
            });
            return {...state, tasks: tempTasks};
        }
        default:
            return state;
    }
}

export default reducer;