import React, { Component }  from 'react';
import { connect } from 'react-redux';
import { setSearchValue, fetchGifs } from '../../store/actions'

class Search extends Component  {
    constructor(props) {
        super(props);
        this.searchValue = React.createRef();
    }
    handleSearch() {
        if ( this.searchValue.current.value ) {
            this.props.dispatch(setSearchValue(this.searchValue.current.value))
            this.props.dispatch(fetchGifs())
        }
    }
    render() {
        return (
        <div className="search">
            <input ref = {this.searchValue} placeholder = "Search GIFs..."/>
            <button onClick = { () => this.handleSearch() }> Search </button>
        </div>
    )}
}

export default connect()(Search);