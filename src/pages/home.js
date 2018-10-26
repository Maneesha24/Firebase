import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

const cookies = new Cookies();

class Home extends Component {

    state = {
        phone: '',
        password: ''
    }

    onPhoneChange = (event) => {
        this.setState({phone: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onLogin = async () => {
       
        const res = await fetch('/api/users/login',{
            method: 'POST',
            credentials: 'include',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                phone: this.state.phone,
                password: this.state.password
            })
        })
        const data = await res.json();
        if(data.success){
            console.log(data);
            this.setState({
                phone:'',
                password: ''
                // showLogin: false
            })
            cookies.set('Kiddo', data.token); 
            if(cookies.get('Kiddo')== data.token){
                console.log('Reeed');
                window.location.reload();
                this.props.history.push('/landing')
            }      
        }


    }

  render() {

      
    return (
      <div className="home">
      <input placeholder= "Enter phone number" name = "phone" value = {this.state.phone} onChange={this.onPhoneChange} /><br />
      <input placeholder= "Enter password " name = "password" value={this.state.password} onChange={this.onPasswordChange}/><br />
      <button  onClick={this.onLogin}>Submit</button>

      </div>
    );
  }
}

export default withRouter(Home);
