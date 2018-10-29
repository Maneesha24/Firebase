import Cookies from 'universal-cookie';
import React from 'react';

const cookies = new Cookies();

class Home extends React.Component {

    state = {
        phone: '',
        password: '',
        showLogin: true
    }

    onPhoneChange = (event) => {
        this.setState({phone: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password: event.target.value})
    }

    onLogin = async () => {
       
        const res = await fetch('/api/super-admin/login',{
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
                password: '',
                showLogin: false
            })
            cookies.set('Kiddo', data.token);
            this.props.history.push('/landing');
            window.location.reload();
        }
    }

  render() {
      
    return (
      <div className="home">
      <div>
      <input type="text" className="input" placeholder = "Enter your mobile number" value = {this.state.phone} onChange={this.onPhoneChange}/><br />
      <input type="password" className="input" placeholder = "Enter your password" value={this.state.password} onChange={this.onPasswordChange}/><br />
      <button type = "button" onClick={this.onLogin}>Submit</button>
      </div>

      </div>
    );
  }
}

  
  export default Home;
