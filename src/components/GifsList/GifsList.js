import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchGifs, setPage } from '../../store/actions';

import Gif from '../Gif/Gif';
import Button from '../Button/Button';

class GifsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifsDetailsMsg: this.props.searchVal 
                            ? `Showing 
                            ${this.props.amountOfItems * this.props.pageNumber - (this.props.amountOfItems - 1) }
                            - ${this.props.amountOfItems * this.props.pageNumber}
                            results of total ${this.props.totalItems} 
                            for "${ this.props.searchVal }"`
                            : `Nothing to show... `
        }
    }
    componentDidMount() {
        if (this.props.isLoading) {
            this.props.dispatch(fetchGifs())
        } 
    }
    handleButtonClick =(type)=> {
        this.props.dispatch(setPage(type))
        this.props.dispatch(fetchGifs())
    }
    renderGifsList() {
        return (
            <div className="giphy__gifs">
                {this.props.gifs
                .map(el => <Gif key={el.id} 
                url={el.images.preview_gif.url} 
                title={el.title}/>) }
            </div> 
        )
    }
    render() {
        return (
            <Fragment>
                <span className='giphy__details'> { this.state.gifsDetailsMsg } </span>
                { this.props.pageNumber > 1 ? <Button className='giphy__navbtn' onBtnClick = { this.handleButtonClick } type='Previous'/> : '' }
                { this.props.pageNumber * this.props.amountOfItems <= this.props.totalItems ? <Button className='giphy__navbtn' onBtnClick = { this.handleButtonClick } type='Next'/> : '' }
                { this.renderGifsList() }
            </Fragment>
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
export default connect(mapStateToProps)(GifsList);