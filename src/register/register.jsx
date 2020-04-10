import React, { Component } from 'react';
import './css/register.css';
import { Form, Input, Select, Checkbox, Button } from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;

class Register extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        confirmDirty: false,
        autoCompleteResult: [],
        username: '',
        password: '',
        email: '',
        phoneNumber: '',
    };
    handleSubmit = e => {
        e.preventDefault();
        const {username,password,email,phoneNumber}=this.state
        if(username&&password&&email&&phoneNumber){
            console.log('test success')
        }
        
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    handleConfirmBlur = e => {
        const { value } = e.target;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('两次密码输入的不一致!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const { form } = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };
    handleUsernameChange = e => {
        const inputUsername = e.target.value;
        this.setState({
            username: inputUsername,
        });
    };
    handlePasswordChange = e => {
        const inputPassword = e.target.value;
        this.setState({
            password: inputPassword,
        });
    };
    handleEmailChange = e => {
        const inputEmail = e.target.value;
        this.setState({
            email: inputEmail,
        });
    };
    handlePhoneChange = e => {
        const inputPhone = e.target.value;
        this.setState({
            phoneNumber: inputPhone,
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        const prefixSelector = getFieldDecorator('prefix', {
            initialValue: '86',
        })(
            <Select style={{ width: 70 }}>
                <Option value="86">+86</Option>
                <Option value="87">+87</Option>
            </Select>
        );

        return (
            <div className="register-div-block">
                <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                    <Form.Item label="用户名">
                        {getFieldDecorator('nickname', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入用户名！',
                                    whitespace: true,
                                },
                            ],
                        })(<Input onChange={this.handleUsernameChange} />)}
                    </Form.Item>
                    <Form.Item label="密码" hasFeedback>
                        {getFieldDecorator('password', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入密码!',
                                },
                                {
                                    validator: this.validateToNextPassword,
                                },
                            ],
                        })(
                            <Input.Password
                                onChange={this.handlePasswordChange}
                            />
                        )}
                    </Form.Item>
                    <Form.Item label="确认密码" hasFeedback>
                        {getFieldDecorator('confirm', {
                            rules: [
                                {
                                    required: true,
                                    message: '请再次输入密码!',
                                },
                                {
                                    validator: this.compareToFirstPassword,
                                },
                            ],
                        })(<Input.Password onBlur={this.handleConfirmBlur} />)}
                    </Form.Item>
                    <Form.Item label="电子邮箱">
                        {getFieldDecorator('email', {
                            rules: [
                                {
                                    type: 'email',
                                    message: '请输入正确的电子邮箱!',
                                },
                                {
                                    required: true,
                                    message: '请输入电子邮箱!',
                                },
                            ],
                        })(<Input onChange={this.handleEmailChange} />)}
                    </Form.Item>

                    <Form.Item label="手机号码">
                        {getFieldDecorator('phone', {
                            rules: [
                                {
                                    required: true,
                                    message: '请输入电话号码!',
                                },
                            ],
                        })(
                            <Input
                                addonBefore={prefixSelector}
                                style={{ width: '100%' }}
                                onChange={this.handlePhoneChange}
                            />
                        )}
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        {getFieldDecorator('agreement', {
                            valuePropName: 'checked',
                        })(
                            <Checkbox>
                                我已经同意 <a href="">协议</a>
                            </Checkbox>
                        )}
                    </Form.Item>
                    <Form.Item {...tailFormItemLayout}>
                        <Button
                            type="primary"
                            style={{
                                background: 'rgb(255, 153, 0)',
                                borderColor: 'unset',
                            }}
                            htmlType="submit"
                        >
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default Form.create()(Register);
