import React from 'react';
import './SearchBar.css'

class SearchBar extends React.Component {
    state = {term:''};
    // onInputChange (event) {
    //     console.log(event.target.value);
    // }
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    };
    clearText(){
        this.setState({text:''})
      }
     
    
    render(){
        return( 
            <div className="ui segment"> 
                <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Image Search</label>
                    <input 
                    type="text" 
                    value={this.state.term}
                    onChange={e => this.setState({term: e.target.value})}
                    />
                    <button>Search</button> 
                </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;
