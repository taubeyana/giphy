import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { setSearchValue, fetchGifs, resetSearch} from '../../store/actions'

class Search extends Component  {
    constructor(props) {
        super(props);
        this.searchValue = React.createRef();
    }
    handleSearch() {
        if ( this.searchValue.current.value ) {
            this.props.dispatch(resetSearch());
            this.props.dispatch(setSearchValue(this.searchValue.current.value))
            this.props.dispatch(fetchGifs());
        }
    }
    handleKeyDown(e) {
        if (e.key === 'Enter') {
            this.handleSearch();
        }
    }
    render() {
        return (
        <div className="search">
            <input ref = {this.searchValue} placeholder = "Search GIFs..." onKeyDown = { (e) => this.handleKeyDown(e) } />
            <button onClick = { () => this.handleSearch() }> Search </button>
        </div>
    )}
}

export default connect()(Search);