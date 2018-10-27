import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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
        <div className = "update-pic">yyy</div>
        {/* <TextField
          id="outlined-email-input"
          label="Username"
          className={classes.textField}
          type="text"
          name="name"
          autoComplete="name"
          margin="normal"
          variant="outlined"
          style = {{color: 'green' }}
        /> */}
        {/* <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        /> */}
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
          id="outlined-email-input"
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
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
        {/* <TextField
          id="outlined-email-input"
          label="Gender"
          className={classes.textField}
          type="text"
          name="gender"
          autoComplete="gender"
          margin="normal"
          variant="outlined" /> */}
        </div>
        <div>
        <TextField
          id="outlined-email-input"
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
      <section class = "user-image">
      <div className="user-pic">image</div>
      <h4>Username</h4>
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