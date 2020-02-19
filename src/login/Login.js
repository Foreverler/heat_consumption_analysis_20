import React, {Component} from 'react';
import {Form, Icon, Input, Button, message, Layout,} from 'antd';
// import Login from 'ant-design-pro/lib/Login';
// import moment from 'moment';
// import Header from "../homePage/header/Header";
import './Login.css'
import {requestUserLogin} from "../../src/http/request/RequestCenter"
const {Header, Content, Footer, Sider} = Layout;
const FormItem = Form.Item;

//新登陆页面参数
// const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;
class LoginDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            password: '',
            errorMessage: '',
        }

    }

    handleLogin = (e) => {
        e.preventDefault();
        const {phone, password} = this.state;
        const jsonData = {
            'phone': phone,
            'password': password,
        };


        fetch("/api/login", {
            method: 'POST',
            credentials: "include",
            body: JSON.stringify(jsonData),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data['code'] === 0 && data['info']['phone'] === phone && data['info']['state'] === '1') {//判定是否成功
                    const d = new Date();
                    window.localStorage.token = data.token;
                    window.localStorage.info = data['info'];
                    window.localStorage.name = data['info']['name'];
                    window.localStorage.type = data['info']['type'];
                    window.localStorage.state = data['info']['state'];
                    window.localStorage.department = data['info']['department'];
                    window.localStorage.section = data['info']['section'];
                    window.localStorage.authorization = 'bearer ' + data.token;
                    window.localStorage.time = d.getTime();
                    this.props.history.push('/')
                }
                else{

                    message.error('登录失败！')
                }

            })
            .catch(
                error => {

                    // const d = new Date();
                    // window.localStorage.token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvbG9naW4iLCJpYXQiOjE1NzA1OTA2MDgsImV4cCI6MTU3MDYzMzgwOCwibmJmIjoxNTcwNTkwNjA4LCJqdGkiOiJ5ZUNJVjRkTXNiU3FMZ2JGIn0.SDc3pqxJUNFp0C8Gza9IYY7ldBdnZumdAaDZ3UaOP34";
                    // //window.localStorage.info = data['info'];
                    // window.localStorage.name = "admin";
                    // window.localStorage.type = "4";
                    // window.localStorage.state = "1";
                    // window.localStorage.department = "3";
                    // window.localStorage.section = "1";
                    // //window.localStorage.authorization = 'bearer ' + data.token;
                    // window.localStorage.time = d.getTime();
                    // this.props.history.push('/')
                    //
                    // console.error('Error:', error)
                })
    };


    handleChangePhone = (e) => {
        this.setState({phone: e.target.value});
    };

    handleChangePassword = (e) => {
        this.setState({password: e.target.value});
    };


    render() {
        const {phone, password} = this.state;
        const {getFieldDecorator} = this.props.form;
        return (
            <div className="login">
                <img id="logo" alt=""
                     src='https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=4669515db8389b502cf2e800e45c8eb8/ac4bd11373f082022a17da7c4afbfbedaa641bef.jpg'/>
                <Form onSubmit={this.handleLogin} className="login-form">
                    <FormItem>
                        <h2 id='pleaseLogin'>欢迎登录</h2>
                        {getFieldDecorator('phone', {
                            rules: [{required: true, message: '请输入注册手机号!'},
                                {pattern: '\\d{11}', message: '请输入11位手机号!'}],
                        })(
                            <Input prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
                                   placeholder="请输入注册手机号" setFieldsValue={phone} onChange={this.handleChangePhone}/>
                        )}
                    </FormItem>
                    <FormItem>
                        {getFieldDecorator('password', {
                            rules: [{required: true, message: '请输入密码!'},
                                {min: 6, message: '请输入6位以上密码'}],
                        })(
                            <Input prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>} type="password"
                                   placeholder="请输入密码" setFieldsValue={password} onChange={this.handleChangePassword}/>
                        )}
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        <a href="/" >返回首页</a>
                        {/*<a href="/reg" style={{float: 'right'}}>注册账号</a>*/}
                    </FormItem>
                </Form>
                <Footer style={{textAlign: 'center'}} className="footer">
                    SmartLab Design ©2018 Powered By 武汉理工大学智能技术实验室
                </Footer>
            </div>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(LoginDemo);

export default WrappedNormalLoginForm;

