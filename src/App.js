import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import {robots} from './robots';

//This is for the comunication of the SearchBox and the App


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    //make sure to use arrow function, because the 'this' keyword is refering to the input in our SearchBox

    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value});
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox SearchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/>
            </div>
        );
    }
    
};

export default App;