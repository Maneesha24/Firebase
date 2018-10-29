import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { Link } from 'react-router-dom';

const cookies = new Cookies();
const cookie = cookies.get('Kiddo');


class School extends Component {

  state = {
    schools: [],
    isLoading: false
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

    return (
      <div className="schools">
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
                    <tr key = {school._id}>
                    <td><div style ={{borderRadius: '10%',width:'fit-content'}}><img alt = "logo" src = {school.logo} style = {{width:'25px',height:'25px'}}/></div></td>
                    <td>{school.name}</td>
                    <td>{school.branches.length}</td>
                    <Link to = {school._id}><td>Click here to see info</td></Link>

                 </tr>
             ))}

             </tbody>
         </table>
        </main>
      </div>
    );
  }
}

export default School;
