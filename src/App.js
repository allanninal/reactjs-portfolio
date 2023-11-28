import React, { Component} from "react";

class App extends Component {

    constructor(){
        super();
        this.state = { displayBio: false };

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    toggleDisplayBio(){
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        
        const bio = this.state.displayBio ? (
            <div>
                <p>I live in Cebu, Philippines, and code every day.</p>
                <p>My favorite language is Python and JavaScript.</p>
                <button onClick={this.toggleDisplayBio}>Show Less</button>
            </div>
        ) : (
            <div>
                <button onClick={this.toggleDisplayBio}>Read More</button>
            </div>
        );

        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Allan. I'm a software engineer.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {bio}
            </div>
        )
    }
}

export default App;