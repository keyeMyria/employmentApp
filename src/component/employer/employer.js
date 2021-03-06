import React, { Component } from 'react';
import axios from 'axios';
import {Card, WingBlank, WhiteSpace} from 'antd-mobile';
import {connect} from 'react-redux';
import {getUserList} from '../../redux/chatuser.redux';
import UserCard from '../usercard/usercard';

@connect(
	state=>state.chatuser,
	{getUserList}
)
class Employer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			 data: []
		};
	}
  componentDidMount(){
		this.props.getUserList('employee')
	}
  render() {
    return (
			<UserCard userlist={this.props.userlist}></UserCard>
    )
  }
}

export default Employer
