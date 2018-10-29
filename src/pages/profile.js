import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 300,
  },
});

class Profile extends React.Component {

  state = {
    profile: [],
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    gender:''
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
    console.log(data);
    console.log(this.state.profile[0]);
  }


  state = {
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {

    if(!this.state.isLoading){
      return <div>Loading...</div>
  }

    const { classes } = this.props;

    return (
        <div className="profile">
         <h2>Edit Profile</h2>
         <article>
        <section>
      <form className={classes.container} noValidate autoComplete="off">
      <div className= "input-fields">
      <div className="input-fields-pic">
        <TextField
          disabled
          id="outlined-disabled"
          label="Product-name :Disabled"
          defaultValue="Kiddo"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <div className = "update-pic">
        <img src = {this.state.profile[0].logo} style={{width: '120px',height: '150px',borderRadius : '50%',border : '3px groove #e02a64'}} alt = "profile"/>
        </div>
        

        </div>
        <div>
        <TextField
          id="outlined-email-input"
          label="Username"
          className={classes.textField}
          type="text"
          name="name"
          autoComplete="name"
          margin="normal"
          variant="outlined"
          style = {{color: 'green' }}
        />
        <TextField
          id="outlined1-email-input"
          label="Email"
          className={classes.textField}
          type="text"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          style = {{color: 'green' }}
        />
        <TextField
          id="outlined2-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
        </div>
        <div>
        <TextField
          id="outlined3-email-input"
          label="Gender"
          className={classes.textField}
          type="text"
          name="gender"
          autoComplete="gender"
          margin="normal"
          variant="outlined"
          style = {{color: 'green' }}
        />
        </div>
        </div>
      </form>
      </section>
      <section className = "user-image">
      <div className="user-pic">
      <img alt = "profile" src = {this.state.profile[0].logo} style={{width: '148px',borderRadius : '50%',border : '3px groove #e02a64'}}/></div>
      <h4>{this.state.profile[0].firstName}</h4>
      <h4>Super Admin Panel</h4>
      <hr />
      <h1>KIDDO</h1>
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