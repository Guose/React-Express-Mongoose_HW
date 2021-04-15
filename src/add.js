import React, { Component } from 'react';
import axios from 'axios';

class Add extends Component {
    constructor(props) {
        super(props);

        this.state = {
            addFruit: []
        }
    }
    componentDidMount() {
        let dataObj = {
            name: "Grapes",
            color: "Blue",
            weight: 15,
            delicious: true
        }

        if (dataObj.name !== "Apple") {
            axios.post('http://localhost:3001/add', dataObj)
                .then(res => {
                    console.log('Fruit Added: ', res.data);
                    this.setState({ addFruit: res.data });
                });
        }
    }
    render() {
        console.log('this.state.addFruit: ', this.state.addFruit)
        let element = this.state.addFruit.map(ele => {
            return (
                <ul>
                    <li>{ele.name}</li>
                    <li>{ele.color}</li>
                    <li>{ele.weight}</li>
                    <li>{ele.delicious}</li>
                </ul>
            )
        })
        return (
            <div>
                <h1>Fruit ADDED to the Database</h1>
                <div>
                    {element}
                </div>
            </div>
        )
    }
}
export default Add;