import React from 'react'
import Form from './SignupForm'


const Modal = (props) => {

    if (!props.show) {
        return null
    }
    return (
        // This will be a decision maker:
        // If the button clicked is sign up, it'll render sign up form
        // If the button clicked is login, it'll render login form 
        <div>
            <div className="container">
                <div className="modal-content" href="#modal1">
                    <Form />
                </div>
            </div>
        </div>
    )
}


export default Modal