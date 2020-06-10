import React from 'react'

class SignupForm extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            email: '',
            password: '',
            shouldRedirect: false
        }
    }

    // handle form changes
    handleFormChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render() {
        return (
            <div class="container">
                {/* Sign Up Form */}
                <section class="section form-section">
                    <div class="row">
                        <form class="col s12 l12" onSubmit={this.handleSubmit} >
                            <label>Username:</label>


                            <input
                                onChange={this.handleFormChange}
                                type='text' name='username'
                                value={this.state.username}
                            />

                            <label>Email Address:</label>
                            <input
                                onChange={this.handleFormChange}
                                type='text'
                                name='email'
                                value={this.state.email}
                            />

                            <label>Password:</label>
                            <input
                                onChange={this.handleFormChange}
                                type='password'
                                name='password'
                                value={this.state.password}
                            />
                        </form>
                    </div>
                </section>

                {/* Submit Button */}
                <section class="section button-section center">
                    <button class="btn-large"
                        onClick={this.handleSubmit}>
                        Sign Up!
                  </button>
                </section>

            </div>
        )
    }
}



export default SignupForm