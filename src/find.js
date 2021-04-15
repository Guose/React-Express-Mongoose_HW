import React, { Component } from 'react';
import axios from 'axios';

class Find extends Component {
    constructor(props) {
        super(props);

        this.state = {
            findFruit: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/find')
            .then(res => {
                console.log(res.data);
                this.setState({findFruit: res.data});
            })
    }
    render() {
        console.log('this.state: ', this.state.findFruit)
        let element = this.state.findFruit.map(ele => {
            var delic = ele.delicious == true ? "true" : "false";            
            return (
                <ul>
                    <li>Name: {ele.name}</li>
                    <li>Color: {ele.color}</li>
                    <li>Weight: {ele.weight}</li>
                    <li>Is it Delicious: {delic}</li>
                </ul>
            )
            
        })
        var count = this.state.findFruit.length - 1;
        return (
            <div>
                <h1>Fruit FOUND on the Database</h1>
                <h3>Total Fruit Count: {count}</h3>
                <div>
                    {element}
                </div>

            </div>
        )
    }
}
export default Find;