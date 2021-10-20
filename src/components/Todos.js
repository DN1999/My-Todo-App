import React from 'react';
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh"
    }
    let myStyle1 = {
        // margin:"auto",
        border: "6px solid red"
    }
    return (
        <div className="conatiner mb-3 " style={myStyle}>
            <h4 className="text-center">Todos List </h4>
            {/* <TodoItem todo={props.todos[0]}/> */}
            {/* use  loop higher order concept map */}
            {props.todos.length === 0 ?
                <div className="container">
                    <div className="col-md-5 offset-md-3" style={myStyle1}>
                        <div className="card">
                            <h5 style={{ textAlign: "center" }}>No Todos to Display</h5>
                        </div>
                    </div>
                </div> :
                props.todos.map((todo) => {
                    return <TodoItem todo={todo} Key={todo.sno} onDelete={props.onDelete} />
                    
                })}
        </div>
    )
}
