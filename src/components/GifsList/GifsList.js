import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchGifs, setPage } from '../../store/actions';
import numeral from 'numeral';
import Gif from '../Gif/Gif';
import Button from '../Button/Button';

class GifsList extends Component {
    handleButtonClick = (type) => {
        this.props.dispatch(setPage(type));
        this.props.dispatch(fetchGifs());
    }
    renderDetailsMessage() {
        let formattedNum = numeral(this.props.totalItems).format('0,0');
        return (
            this.props.searchVal
            ? <span> Showing { this.props.firstItemNumber } - { this.props.lastItemNumber} results of total { formattedNum } for "<b>{ this.props.searchVal}</b>"</span>
            : <span> Nothing to show... </span>
        )
    }
    renderGifsList() {
        return (
            <div className="giphy__gifs">
                {this.props.gifs
                .map(item => <Gif key = { item.id } 
                url = { item.images.fixed_height_small.url } 
                title = { item.title.toUpperCase() }
                width = { item.images.fixed_height_small.width } />
            )}
                
            </div> 
        )
    }
    render() {
        return (
            <Fragment>
                <div className='giphy__details'>
                    { this.renderDetailsMessage() }
                    { this.props.pageNumber > 1 ? <Button className='giphy__navbtn' onBtnClick = { this.handleButtonClick } type='PREVIOUS'/> : '' }
                    { this.props.pageNumber * this.props.amountOfItems <= this.props.totalItems ? <Button className='giphy__navbtn' onBtnClick = { this.handleButtonClick } type='NEXT'/> : '' }
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
    amountOfItems: state.amountOfItems,
    firstItemNumber: state.firstItemNumber,
    lastItemNumber: state.lastItemNumber
})
export default connect(mapStateToProps)(GifsList);