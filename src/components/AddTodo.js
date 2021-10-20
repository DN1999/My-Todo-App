import React, { useState } from 'react'


const AddTodo = ({addTodo}) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

    //   const inputHandler =(e)=>{
    //     e.preventDefault()
    //     const {name,value}=e.target
    //     setData({ ...data,[name]:value})
    // }    

    const submit = (e)  => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank")
        }else{
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }  
 
    return (
        <div className="container-fluid mt-3">
            <div className="row" >
                <div className="col-md-5 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form onSubmit={submit}>
                                <h5>Add Todo</h5>
                                <div className="form-group mb-2">
                                    <label htmlFor="title">Title Name</label>
                                    <input type="text" name="title" value={title} id="title" className="form-control"  onChange={(e) => {setTitle(e.target.value)}} />
                                </div>
                                <div className="form-group mb-2">
                                    <label htmlFor="desc">Description</label>
                                    <input type="text" name="desc" value={desc} id="desc" className="form-control" onChange={(e) => {setDesc(e.target.value) }} />
                                </div>
                                <button type="submit" value="submit" className="btn btn-outline-success">Add Todo</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTodo
