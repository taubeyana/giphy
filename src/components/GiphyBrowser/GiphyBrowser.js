import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setLoadingStatus } from '../../store/actions';

import Header from '../Header/Header';
import GifsList from '../GifsList/GifsList';
class GiphyBrowser extends Component {
    componentWillMount() {
        this.props.dispatch(setLoadingStatus(false))
    }
    render() {
        return (
            <Fragment>
                <Header header="Giphy Browser"/>
                { this.props.isLoading ? <span style={{color: 'red'}}>Loading...</span> : <GifsList/>}
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    isLoading: state.isLoading
})
export default connect(mapStateToProps)(GiphyBrowser);