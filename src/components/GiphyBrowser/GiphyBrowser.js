import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { setPage } from '../../store/actions';

import Header from '../Header/Header';
import GifsList from '../GifsList/GifsList';
import { Loader } from '../Loader/Loader';

class GiphyBrowser extends Component {
    componentWillMount() {
        this.props.dispatch(setPage('Next'));
    }
    render() {
        return (
            <Fragment>
                <Header className="giphy__header" header="Giphy Browser"/>
                { this.props.isLoading ? <Loader/> : <GifsList/>}
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    isLoading: state.isLoading
})
export default connect(mapStateToProps)(GiphyBrowser);