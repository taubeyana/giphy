import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchGifs, setPage } from '../../store/actions';

import Gif from '../Gif/Gif';
import Button from '../Button/Button';

class GifsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstItemNumber: this.props.pageNumber * this.props.gifs.length - (this.props.gifs.length - 1),
            lastItemNumber: this.props.pageNumber * this.props.gifs.length
        }
    }
    componentDidMount() {
        if (this.props.isLoading) {
            this.props.dispatch(fetchGifs())
        } 
    }
    handleButtonClick = (type) => {
        this.props.dispatch(setPage(type))
        this.props.dispatch(fetchGifs())
    }
    renderDetailsMessage() {
        return (
            this.props.searchVal
            ? `Showing ${ this.state.firstItemNumber } - ${ this.state.lastItemNumber} results of total ${this.props.totalItems} for "${ this.props.searchVal }"`
            : `Nothing to show... `
        )
    }
    renderGifsList() {
        return (
            <div className="giphy__gifs">
                {this.props.gifs
                .map(item => <Gif key = { item.id } 
                url = { item.images.fixed_height_small.url } 
                title = { item.title }/>) }
            </div> 
        )
    }
    render() {
        return (
            <Fragment>
                <div className='giphy__details'>
                    { this.renderDetailsMessage() }
                    { this.props.pageNumber > 1 ? <Button className='giphy__navbtn' onBtnClick = { this.handleButtonClick } type='Previous'/> : '' }
                    { this.props.pageNumber * this.props.amountOfItems <= this.props.totalItems ? <Button className='giphy__navbtn' onBtnClick = { this.handleButtonClick } type='Next'/> : '' }
                </div>
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