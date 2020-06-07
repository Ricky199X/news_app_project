import React from 'react'
import Modal from '../Containers/Modal'
// import M from "materialize-css";

class HomePage extends React.Component {


    state = {
        show: false
    };

    // // function to change the state of the homepage component if the use clicks
    // //  sign up or log in - sets the show property to true, meaning we can show the modal
    showModal = () => {
        this.setState({
            show: true
        });
    }


    render() {
        // console.log(this.state.show)
        return (
            <div>
                <div className="container">
                    <h1>Landing Page</h1>

                    <section className="actions">
                        <button className="login btn modal-trigger"
                            onClick={this.showModal}
                        >
                            Sign Up
                            </button>
                        <button className="signup btn modal-trigger"
                            onClick={this.showModal}
                        >
                            Login
                        </button>

                    </section>

                    <Modal show={this.state.show} />
                </div>

            </div >
        )
    }
}


export default HomePage