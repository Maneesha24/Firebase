import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

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

  searchUpdated = event => {
    this.setState({searchTerm: event.target.value})
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
    if(data.success){
      this.setState({ schools: data.schools, isLoading: true })
    }
  }

  render() {

    let filteredSchools = this.state.schools.filter((school) =>{
      return school.name.toLowerCase().indexOf(this.state.searchTerm) !== -1
    });

    const { classes } = this.props;

    if(!this.state.isLoading){
      return <div>Loading...</div>
  }

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
          margin="normal" onChange = {this.searchUpdated}
        /> 
        
         </div>    
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
             {filteredSchools.map(school =>  (
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
