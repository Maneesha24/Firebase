import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookie = cookies.get('Kiddo');

const styles = theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },
  });

class Notifications extends React.Component{

    state = {
        title: '',
        content: '',
        to: ''
    }

    onTitleChange = (event) => {
        this.setState({title: event.target.value})
    }

    onContentChange = (event) => {
        this.setState({content: event.target.value})
    }

    onToChange = (event) => {
        this.setState({to: event.target.value})
    }

    onSubmit = async() => {
        const res = await fetch('/api/super-admin/push', {
            method: 'POST',
            headers: {
                'Authorization': cookie,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                registration_token: this.state.to,
                title: this.state.title,
                content: this.state.content
            })
        });
        const data = await res.json();
        console.log(data);
    }


    
    render(){

        return(
            <div className="notifications">
            {/* <h3>Notifications</h3> */}
            <div>

                <section className = "notifications-filter">
                    <div className = "title">
                    <h2>Filter</h2>
                    </div>
<form>
    <div className="radio-btns">
  <input type="radio" name="role" value="admin" /> All admins<br />
  <input type="radio" name="role" value="teacher" /> All teachers<br />
  <input type="radio" name="role" value="parent" /> All parents<br />
  </div>
</form> 

</section>

                <section className = "notifications-form">
                <div className = "title">
                 <h2>Add Details</h2>
                    </div>
<form>
    <div className = "notifications-firebase-input">
        <p>Choose file* : </p>
        <input type = "file" name="logo" />
    </div>
    <div className = "notifications-firebase-input">
        <p>Title* : </p>
{/* <input type = "text" className= "notification-firebase" value = {this.state.title} onChange={this.onTitleChange} className = "input" placeholder = "Enter title"/> */}
    
    <TextField
          id="standard-multiline-static"
          rows="4"
          margin="normal" style = {{marginLeft:'0.3rem'}}
        />   
    </div>
    <div className = "notifications-firebase-input">
        <p>Message* : </p>
        
        <TextField
          id="standard-multiline-static"
          rows="4"
          margin="normal" style = {{marginLeft:'0.3rem'}}
        />    
        </div >
    <div className = "notifications-firebase-input">
    <Button color="primary" type = "button" onClick = {this.onSubmit} style = {{border: '1px solid blue',marginTop:'1.5rem'}}>
        Submit
      </Button>
      </div>
      </form> 
</section>

            </div>            
            
            </div>
        )
    }
}


Notifications.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Notifications);
  

