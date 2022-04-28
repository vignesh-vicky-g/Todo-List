import React from "react"

export default function Todo({taskName, age, email}) {
    // console.log(taskName, age, email);
    return(
        <div className="todo">
            <h4>Name: {taskName}</h4>
            <h4>Age: {age}</h4>
            <h4>Email: {email}</h4>
        </div>
    )
}