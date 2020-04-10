import React, { Component } from 'react'
import House from '../House/House'
import axios from 'axios';

export default class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            houses: []
        }
    }
    componentDidMount() {
        this.getHouses()
    }

    getHouses = () => {
        axios.get('/api/houser')
            .then(response => {
                this.setState({ houses: response.data })
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            })
    }

    addHouses= newArr => {
        this.setState({ houses: newArr })
    }

    // removeHouses = () => {
    //     axios.delete(`/api/houser/${this.props.val.id}`)
    //     .then(response => {
    //         this.props.houses(response.data);
    //         this.props.getHouses();
    //     })
    // }


    render() {
        console.log(this.state.houses)
        let mappedHouses = this.state.houses.map((val, index) => {
            return (
                <House val={val} getHouses={this.getHouses}/>
            )
        })
        return (
            <div>
                <h1>Dashboard</h1>
                <House/>
                {mappedHouses}
                
            
            <div>
                {/* <button onClick={() => this.handleClickAdd()}>Add New Property</button> */}
            </div></div>
        )
    }
}

