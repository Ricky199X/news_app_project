import React from 'react'

class HomePage extends React.Component {
    render() {
        return (
            <div class="container">
                <section class="greeting">
                    <div>
                        <h1>Landing Page</h1>
                    </div>
                </section>

                <section class="links">
                    <button class="btn signup">Sign Up</button>
                    <button class="btn login">Log In</button>
                </section>
            </div>
        )
    }
}


export default HomePage