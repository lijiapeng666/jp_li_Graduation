import React, { useCallback, useMemo, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './css/App.css';
import Header from './Header';
import { Form, Icon, Input, Button, Checkbox,message } from 'antd';
import 'antd/dist/antd.css';

function App(props) {
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
  
      
    
    
    function handleLoingClick(){
        if(username==="root"&&password==="root"){
            message.success('登陆成功');
            window.location.href="./home.html"
        }else{
            message.error('账号或密码不正确')
        }
        
    }
    function handleUsername(e){
        setUsername(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }
    return (
        <div className="App-div-total" >
            <Header title={'携程旅行'}></Header>

            <div style={{padding:16}} className="App-div-block"  >
                <Input
                    value={username}
                    prefix={
                        <Icon
                            type="user"
                            style={{ color: 'rgba(0,0,0,.25)' }}
                        />
                    }
                    placeholder="请输入用户名"
                    style={{marginBottom:15}}
                    onChange={handleUsername}
                />
                <Input
                    value={password}
                    onChange={handlePassword}
                    prefix={
                        <Icon
                            type="lock"
                            style={{ color: 'rgba(0,0,0,.25)' }}
                        />
                    }
                    type="password"
                    placeholder="请输入密码"
                    style={{marginBottom:15}}
                />
                <Button onClick={handleLoingClick}  style={{width:"100%",background:"#f90",height:40,borderColor:"unset"}} type="primary" className="login-form-button">
                    登陆
                </Button>
                <div style={{textAlign:"right",marginTop:20}} >
                还没有账号，快来<a href="./register.html" style={{cursor:"pointer"}} >注册一个吧!</a>
                </div>
            </div>
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
