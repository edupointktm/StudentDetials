import React from 'react'

function message(){
    alert("Welcome to Event Handling")
    console.log("Welcome to Event handling in Console")
}

function Course() {
    return (
        <>
            <section className="content">
                <div className="cont">
                    <h1>Course</h1>
                    <div className="container py-3">
                        <button type="button" class="btn btn-danger" onClick={message}>Danger</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Course