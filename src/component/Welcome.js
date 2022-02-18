import React, { Component } from "react";

class Welcome extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            payment: ""
        };
    }

    DoOnClick = () => {
        this.setState(
            {
                name: "John",
                email: "John@gmail.com",
                payment: "100K"
            }
        );
    };

    render() {
        return (
            <div>
                <h1>This is from Welcome</h1>
                <button onClick={ this.DoOnClick }>Click Me!</button>
                <p>{ this.state.name }</p>
                <p>{ this.state.email }</p>
                <p>{ this.state.payment }</p>
            </div>
        );
    }
}

export default Welcome;