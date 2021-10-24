
import { Component } from 'react';
import './App.css'
import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';

class App extends Component {
 
   state = {
    searchValue: '',
  };

  handleSubmit = value => {
    this.setState({
      searchValue: value,
    });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit}/>
        <ImageGallery searchValue={this.state.searchValue}/>
         
      </div>
        

    )
    
  };
}

export default App;


