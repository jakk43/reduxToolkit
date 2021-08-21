import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove, update } from '../redux/userSlice'

function Input() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const user = useSelector((state) => state.user)

    const dispatch = useDispatch()

    function handleUpdate(e) {
        e.preventDefault()
        dispatch(update({ name, email }))
        setName('')
        setEmail('')
    }
    function handleRemove(e) {
        e.preventDefault()
        dispatch(remove())

    }

    return (

        <div className="row">
            <button className="btn btn-danger" onClick={handleRemove}>Remove</button>
            <div className="container">
                <p> Name: {user.name}</p>
                <p> Email: {user.email}</p>
            </div>
            <form className="form-group container col-md-3">
                <h2>INPUT</h2>
                <input
                    className="form-control mt-3"
                    placeholder="Name"
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    className="form-control mt-3"
                    placeholder="Email"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <button className="btn btn-primary mt-3" onClick={handleUpdate} > Update</button>
            </form>

        </div>
    )
}

export default Input
