import React from 'react'

export const Edit = (props) => {
    return (
        <div className="container mt-3">
            <div className="row" >
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form >
                                <div className="form-group">
                                    <h4>Edit Todo</h4>
                                    {/* <input type="text" name="todo" id="todo" className="form-control" /> 
                                        onChange={inputHandler} /> */}
                                    <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput" />
                                    <label htmlFor="floatingInput">Todo Name</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="floatingInput"  />
                                    <label htmlFor="floatingInput">Description</label>
                                    </div>
                                </div>
                                <button className="btn btn-primary btn-block" style={{width:"30%"}}>Edit </button>
                                {/* <input type="submit" value="submit" className="btn btn-outline-success" /> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

// export default Edit
