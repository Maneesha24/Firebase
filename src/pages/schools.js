import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';
// import SearchInput, {createFilter} from 'react-search-input'

// const KEYS_TO_FILTERS = ['this.state.schools.name']

const cookies = new Cookies();
const cookie = cookies.get('Kiddo');

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
    if(!this.state.isLoading){
      return <div>Loading...</div>
  }

  // const filteredEmails = ['apple','banana','mango'].filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))


    return (
      <div className="schools">
      {/* <input onChange={this.searchUpdated}/> */}
      {/* {filteredEmails.map(school => {
          return (
            <div className="mail" key={school._id}>
              <div className="from">{school.name}</div>
              <div className="subject">{school.branches.length}</div>
            </div>
          )
        })} */}
        <main>
            <h2>Schools Info</h2>
            <h4>Show entries</h4>
            <hr/>
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
        </main>
      </div>
    );
  }
}

export default School;
