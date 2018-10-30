import Cookies from 'universal-cookie';
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const cookies = new Cookies();


const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
      },
      dense: {
        marginTop: 19,
      },
      menu: {
        width: 400,
      }
  });

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
      <div className = "home-content">
      <div>
      <TextField
          id="standard-dense"
          label="Phone"
          margin="dense" className = "input phone"
          value = {this.state.phone} onChange = {this.onPhoneChange}
        />
        </div>
        <div className = "input password">     
<TextField
          id="standard-dense"
          label="Password"
          margin="dense"
          value = {this.state.password}
          onChange = {this.onPasswordChange}
        />  
        </div>
        <div>    
        <Button color="primary" style = {{border: '1px solid navy'}} type = "button" onClick = {this.onLogin}>
       Submit
      </Button>      </div>
      </div>

      </div>
    );
  }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Home);
