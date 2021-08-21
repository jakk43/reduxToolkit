import React, { useState } from 'react'

function Input() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    console.log(name, email);
    return (
        <div className="row">
            <form className="form-group container col-md-3">
                <h2>INPUT</h2>
                <input
                    className="form-control mt-3"
                    placeholder="Name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="form-control mt-3"
                    placeholder="Email"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button className="btn btn-primary mt-3" > ADD</button>
            </form>

        </div>
    )
}

export default Input
