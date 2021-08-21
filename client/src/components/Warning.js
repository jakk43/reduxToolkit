import React from 'react'
import { useSelector } from 'react-redux'

function Warning() {
    const name = useSelector((state) => state.user.name)

    return (
        <div>
            <h1>THIS FROM
                <span className="bg-warning mt-3"> WARNING ={'>'}  </span>{name}
            </h1>
        </div>
    )
}

export default Warning
