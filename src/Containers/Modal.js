import React from 'react'



const Modal = (props) => {

    if (!props.show) {
        return null
    }
    return (
        <div>
            <div className="container">
                <div className="modal-content" href="#modal1">
                    Insert Form Here
                </div>
            </div>
        </div>
    )
}


export default Modal