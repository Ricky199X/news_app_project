import React from 'react'
import Modal from '../Containers/Modal'
import M from "materialize-css";

class HomePage extends React.Component {


    // state = {
    //     show: false
    // };

    // // function to change the state of the homepage component if the use clicks
    // //  sign up or log in - sets the show property to true, meaning we can show the modal
    // showModal = () => {
    //     this.setState({
    //         show: true
    //     });
    // }

    componentDidMount() {
        const options = {
            inDuration: 150,
            outDuration: 150,
            opacity: 0.5,
            dismissible: false,
            startingTop: "4%",
            endingTop: "10%"
        };
        M.Modal.init(this.Modal, options);
    }


    render() {
        // console.log(this.state.show)
        return (
            <div class="container">
                <section class="greeting">
                    <div>
                        <h1>Landing Page</h1>
                    </div>
                </section>

                <section class="links">

                    <a className="waves-effect waves-light btn modal-trigger"
                        data-target="modal1"
                    >
                        Modal
                    </a>

                    <div ref={Modal => {
                        this.Modal = Modal;
                    }}
                        id="modal1"
                        className="modal"
                    >

                        <div className="modal-content">
                            <h4>Modal Header</h4>
                            <p>This is where the form will be</p>
                        </div>
                        <div class="modal-footer">
                            <a href="#" class="modal-close waves-effect waves-red btn-flat">
                                Disagree
                            </a>
                            <a href="#" class="modal-close waves-effect waves-green btn-flat">
                                Agree
                            </a>
                        </div>
                    </div>

                </section>



            </div>
        )
    }
}


export default HomePage