import React from 'react';
import AddTask from "./AddTask";
import List from './List'

const Container = ({ tasks = []}) => {
    return (
        <div>
            <AddTask />
            <List />
        </div>
)};

export default Container;