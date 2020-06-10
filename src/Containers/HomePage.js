import React from "react";

class HomePage extends React.Component {
  state = {
    modalShown: false,
  };

  handleShowLogin = () => {
    this.setState({ modalShown: true });
  };

  render() {
    return (
      <div class="container">
        <section class="greeting">
          <div>
            <h1>Landing Page</h1>
            {/* temporary modal for login UNFINISHEDDDDDD */}
            {this.state.modalShown ? (
              <div id="login-form">
                <div class="modal-content">
                  <button onClick={() => this.setState({ modalShown: false })}>X</button>
                  <h4>LOG IN!!!!!!!!!</h4>
                  <form style={{ maxWidth: "50%", margin: "auto" }}>
                    <input type="text" placeholder="user?" />
                    <input type="password" placeholder="password" />
                    <input type="submit" value="Login" />
                  </form>
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <section class="links">
          <button class="btn signup">Sign Up</button>
          <button class="btn login" onClick={this.handleShowLogin}>
            Log In
          </button>
        </section>
      </div>
    );
  }
}

export default HomePage;
