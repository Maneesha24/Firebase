import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookie = cookies.get('Kiddo');

const styles = theme => ({
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
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  }
});


class Profile extends React.Component {

  state = {
    profile: [],
    name: '',
    email: '',
    gender:''
  }


  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

  onGenderChange = (event) => {
    this.setState({gender: event.target.value})
  }

  componentDidMount = async() => {
    const res = await fetch('/api/super-admin/profile',{
      method: 'GET',
      credentials: 'include',
      withCredentials: true,
      headers: {
        'Authorization' : cookie,
        'Content-Type' : 'application/json',
      }
    });
    const data = await res.json();
    if(data.success){
      this.setState({ profile: data.user, isLoading: true })
    }
    console.log(this.state.profile[0]);
  }

  onProfileUpdate = async() => {
    const res = await fetch('/api/super-admin/edit',{
      method: 'POST',
      credentials: 'include',
      headers:{
        'Authorization': cookie,
          'Content-Type': 'application/json'
      },
      body:JSON.stringify({
          name: this.state.name,
          gender: this.state.gender,
          email: this.state.email
      })
  })
  const data = await res.json();
  if(data.success){
      console.log(data);
      this.setState({
          name:'',
          email: '',
          gender: ''
      })
      window.location.reload();
  }
}

  render() {

    const { classes } = this.props;

    if(!this.state.isLoading){
      return <div>Loading...</div>
  }

    return (
        <div className="profile">
        <div className = "">
         <h2>EDIT PROFILE</h2>
         <hr />
         </div>
         <article>
         <section className = "user-image">
      <div className="user-pic">
      <img alt = "profile" src = {this.state.profile[0].logo} style={{width: '148px',borderRadius : '50%',border : '3px groove #5e6e92'}}/>
      </div>
      <h4>{this.state.profile[0].name}</h4>
      <h4>{this.state.profile[0].phone}</h4>
      <h4>Super Admin Panel</h4>
      <hr />
      <h1>KIDDO</h1>
      </section>
        <section>
          <h2>Edit Profile</h2>
          <div className = "user-details">
          <div>
          <div className = "user-details-row">
          <TextField
          disabled
          id="standard-disabled"
          label="Product name"
          defaultValue="Kiddo"
          className={classes.textField}
          margin="normal"
        />
          <TextField
          id="standard-dense"
          label="Name"
          className={classNames(classes.textField, classes.dense)}
          margin="dense" value = {this.state.name} onChange={this.onNameChange}
        />
        </div>
        <div>
        <TextField
          id="standard-dense"
          label="Gender"
          className={classNames(classes.textField, classes.dense)}
          margin="dense" value = {this.state.gender} onChange={this.onGenderChange}
        />
        </div>
        <div>
        <TextField
          id="standard-full-width"
          label="Email"
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          fullWidth value = {this.state.email} onChange={this.onEmailChange}
        />
        </div>
        <div className = "user-details-btn">
        <Button variant="outlined" color="primary" className={classes.button} type = "button" onClick = {this.onProfileUpdate}>
        Submit
      </Button>

        </div>

        </div>
        <div className = "user-details-image">
          <img alt = "profile" src = {this.state.profile[0].logo} style={{width: '148px',borderRadius : '50%',border : '3px groove #5e6e92'}} />
          <input type = "file" className = "input-file" />
        </div>
          </div>
      </section>
      </article>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);
