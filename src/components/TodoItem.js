import React from 'react'

export const TodoItem = ({todo, onDelete }) => {
    const divStyle = {
        width: '40rem',
        border: '5px solid blue',
    };
    return (
        <div className="container my-3 ">
            <div className="col-md-6 offset-md-3">
                <div className="card" style={divStyle}>
                    <div className="card-body">
                        <h4>{todo.title}</h4>
                        <p>{todo.desc}</p>
                        <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
