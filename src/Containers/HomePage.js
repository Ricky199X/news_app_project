import React from 'react'
import Modal from '../Components/Modal'

class HomePage extends React.Component {

    state = {
        show: false,
        formType: ""
    };

    // function to change the state of the homepage component if the user clicks
    //  will track if the user has clicked an option, and add the appropriate type of form to render to the state
    showModal = (event) => {
        this.setState({
            show: true,
            formType: event.target.innerText
        });
    }


    render() {
        return (
            <div>
                <div className="container">
                    <h1>Landing Page</h1>

                    <section className="actions">
                        <button className="signup btn modal-trigger"
                            onClick={event => {
                                this.showModal(event)
                            }}
                        >
                            Sign Up
                            </button>
                        <button className="login btn modal-trigger"
                            onClick={event => {
                                this.showModal(event)
                            }}
                        >
                            Login
                        </button>

                    </section>

                    {/* The updated state with the action to render the form + form type is passed down as props to the modal component */}
                    <Modal show={this.state.show} formType={this.state.formType} />
                </div>

            </div >
        )
    }
}


export default HomePage