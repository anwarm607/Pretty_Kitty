import React,{Component} from 'react';
import CardList from '../Components/CardList';
import Scroll from '../Components/Scroll';
import SearchBox from '../Components/SearchBox.js';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            kitties:[],
            searchfield: ''
        }
    }
    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users =>
            this.setState({ kitties: users }));
    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
render() {
    const {kitties, searchfield} = this.state;
    const filteredKitties = kitties.filter(kitty => {
        return kitty.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return (!kitties.length) ? 
    <h1>Loading</h1> : 
    ( <div className='tc'>
            <h1><span>P</span>retty<span>K</span>itty</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <CardList kitties={filteredKitties} />
            </Scroll>
        </div>
    );
}
}
export default App; 