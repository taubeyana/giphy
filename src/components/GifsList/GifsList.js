import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGifs, setPage } from '../../store/actions';

import Gif from '../Gif/Gif';
import Button from '../Button/Button';

class Main extends Component {
    componentDidMount() {
        this.props.dispatch(fetchGifs(this.props.searchVal))
    }
    handleButtonClick(type) {
        console.log('clicked ' + type)
        // this.props.dispatch(fetchGifs(this.props.searchVal))
    }
    render() {
        return (
            <div>
            { this.props.isLoading ? <span>Loading...</span>: ''}
            <span> Showing 1-10 of total {this.props.totalItems} for "{ this.props.searchVal }" </span>
            { this.props.pageNumber > 1 ? <Button onBtnClick = { this.handleButtonClick } type='Previous'/> : '' }
            { this.props.pageNumber * this.props.amountOfItems <= this.props.totalItems ? <Button onBtnClick = { this.handleButtonClick } type='Next'/> : '' }

            { this.props.gifs.map(el => <Gif key={el.id} url={el.images.preview_webp.url} title={el.title}/>) }
            </div>
        )
    }
}
const mapStateToProps = state => ({
    gifs: state.gifs,
    searchVal: state.searchVal,
    isLoading: state.isLoading,
    pageNumber: state.pageNumber,
    totalItems: state.totalItems, 
    amountOfItems: state.amountOfItems
})
export default connect(mapStateToProps)(Main);