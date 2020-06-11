import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'


const Modal = (props) => {

    console.log(props)
    if (!props.show) {
        return null
    }

    // This will be a decision maker:
    // If the button clicked is sign up, it'll render sign up form
    // If the button clicked is login, it'll render login form
    return props.formType === "LOGIN" ?

        (
            <div>
                <div className="container">
                    <div className="modal-content" href="#modal1">
                        <LoginForm />
                    </div>
                </div>
            </div>
        )
        :
        (
            <div>
                <div className="container">
                    <div className="modal-content" href="#modal1">
                        <SignupForm />
                    </div>
                </div>
            </div>
        )
}


export default Modal