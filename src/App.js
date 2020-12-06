import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'
import Errorboundry from './Errorboundry';


//This is for the comunication of the SearchBox and the App


class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        console.log('Constructor');
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))
    }


    //make sure to use arrow function, because the 'this' keyword is refering to the input in our SearchBox
    onSearchChange = (event) =>{
        this.setState({searchfield: event.target.value});
    }

    render(){

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
       
        if(this.state.robots.length === 0){
            return <h1 className="tc">Loading</h1>
        } else {
            return (
                <div className="tc">
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox SearchChange={this.onSearchChange}/>
                    <Scroll>
                        <Errorboundry> 
                            <CardList robots={filteredRobots}/>
                        </Errorboundry>
                    </Scroll>
                </div>
            );
        }
        
    }
    
};

export default App;