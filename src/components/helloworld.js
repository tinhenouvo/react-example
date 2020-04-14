import React from "react";
import _ from "lodash";
import { loginAPI } from "../api/login";

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: 'Enouvo'
        };
        this.updateMessage = this.updateMessage.bind(this)
    }

    updateMessage() {
        this.setState({
            message: 'Enouvo Girls',
        })
    }

    _login = () => {
        const data = {
            "user": {
                email: "user@gmail.com",
                password: "123123"
            }
        };
        loginAPI(data).then((res) => {
            if (res.status !== 200) {
                this.setState({message: "fail"});
                return
            }
            this.setState({message: "Ok"});
        })
    };

    render() {
        return (
            <div>
                <h1>Hello {this.state.message}!</h1>
                <button onClick={this._login}> Click mee</button>
            </div>
        )
    }
}

export default HelloWorld;