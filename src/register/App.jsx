import React, { useCallback, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './css/App.css';
import Header from '../common/Header';
import 'antd/dist/antd.css';
import Register from './register';

function App(props) {
    const onBack = useCallback(() => {
        window.history.back();
    }, []);
    return (
        <div className="App-div-total">
            <Header title={'注册'} onBack={onBack}></Header>
            <Register></Register>
        </div>
    );
}

export default connect(
    function mapStateToProps(state) {
        return state;
    },
    function mapDispatchToProps(dispatch) {
        return { dispatch };
    }
)(App);
