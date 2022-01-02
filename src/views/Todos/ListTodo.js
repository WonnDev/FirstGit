import React from "react";
import AddTodo from "./AddTodo";
import './ListTodo.scss';
import { toast } from 'react-toastify';


class ListTodo extends React.Component{

    state={
        listTodos:[
            {id:'todo1',title:'Doing Homework'},
            { id: 'todo2', title: 'Reading Book' },
            { id: 'todo3', title: 'Watching Videos' },
        ]
    }

    addNewTodo=(todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success('Import Done!')
    }

    render() {
        let {listTodos} = this.state;
        // let listTodos = this.state.listTodos;
        return(
        <div className="list-todo-container">
            <AddTodo
            addNewTodo={this.addNewTodo}
                />
            <div className="list-todo-content">
                {listTodos && listTodos.length > 0 &&
                listTodos.map((item,index)=>{
                    return(
                        <div className="todo-child">
                            <span>{index+1}-{item.title}</span>
                            <button className="edit">Edit</button>
                            <button className="del">Del</button>
                        </div>
                    )
                })
                }
                
                    
            </div>
        </div>
        )
    }

}

export default ListTodo;