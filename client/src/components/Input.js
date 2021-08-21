import React from 'react'

function Input() {
    return (
        <div className="row">
            <form className="form-group container col-md-3">
                <h2>INPUT</h2>
                <input
                    className="form-control mt-3"
                    placeholder="Name"
                    type="text"
                />
                <input
                    className="form-control mt-3"
                    placeholder="Email"
                    type="text"
                />
                <button className="btn btn-primary mt-3" > ADD</button>
            </form>

        </div>
    )
}

export default Input
