import { Component } from 'react';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    searchValue: '',
    
    };
    
    getSearchValue  = e => {
        this.setState({ searchValue: e.currentTarget.value.toLowerCase() })
    };

    submitSearchValue = e => {
    
        e.preventDefault();
        if (this.state.searchValue.trim() === '') {
            return;
        }
        this.props.onSubmit(this.state.searchValue);
        this.reset();

    };
    

    reset = () => {
        this.setState({
            searchValue: '',
        });
    };

    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.submitSearchValue}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.getSearchValue }
                    />
                </form>
            </header>
        )
    }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};

export default Searchbar;