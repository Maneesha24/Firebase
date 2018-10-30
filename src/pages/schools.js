import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

// import SearchInput, {createFilter} from 'react-search-input'

// const KEYS_TO_FILTERS = ['this.state.schools.name']

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
});
class School extends Component {

  state = {
    schools: [],
    isLoading: false,
    searchTerm: ''
  }

  searchUpdated = term => {
    this.setState({searchTerm: term})
  }


  componentDidMount = async () => {
    const res = await fetch('/api/super-admin/schools',{
      method: 'GET',
      credentials: 'include',
      withCredentials: true,
      headers: {
        'Authorization' : cookie,
        'Content-Type' : 'application/json',
      }
    });
    const data = await res.json();
    console.log(data);
    if(data.success){
      this.setState({ schools: data.schools, isLoading: true })
    }
  }

  render() {

    const { classes } = this.props;

    if(!this.state.isLoading){
      return <div>Loading...</div>
  }

  // const filteredEmails = ['apple','banana','mango'].filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))


    return (
      <div className="schools">
      <div>
            <h2>SCHOOLS</h2>
            <hr />
            </div>
        <main className = "schools-list">
            <div className = "schools-content">
            <div>
            <h4>Schools list</h4>
            <TextField
          id="standard-search"
          label="Search"
          type="search"
          className={classes.textField}
          margin="normal"
        />   </div>    
          <table>
             <thead>
             <tr>
                 <th>Logo</th>
                 <th>Name</th>
                 <th>Branches</th>
                 <th>Info</th>
             </tr>
             </thead>
             <tbody>
             {this.state.schools.map(school =>  (
              //  <Link to = {school._id}>
                    <tr key = {school._id}>
                    <td><div style ={{borderRadius: '10%',width:'fit-content'}}><img alt = "logo" src = {school.logo} style = {{width:'25px',height:'25px'}}/></div></td>
                    <td>{school.name}</td>
                    <td>{school.branches.length}</td>
                    <td><Link to ={`/landing/schools/${school._id}`}>Click here to see info</Link></td>
                 </tr>
                //  </Link>
             ))}

             </tbody>
         </table>
         </div>
        </main>
      </div>
    );
  }
}

School.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(School);
