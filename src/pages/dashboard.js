import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import { askForPermissioToReceiveNotifications } from '../pushNotifications';

const cookies = new Cookies();
const cookie = cookies.get('Kiddo');

class Dashboard extends Component {

  state = {
    users: [],
    isLoading: true
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
      this.setState({ users: data, isLoading: false })
    }
  }


  render() {
    
    if(this.state.isLoading){
      return <div>Loading...</div>
  }

    return (
      <div className="dashboard">
        <section>
          <div className = "dashboard-icons">
          <i className="fas fa-school" style = {{color : '#f44271'}}></i>
          </div>
          <div className = "dashboard-content">
          <p className = "count">{this.state.users.schools.length}</p>
          <p>Schools</p>

          </div>
        </section>
        <section>
          <div className = "dashboard-icons">
          <i className="fas fa-code-branch" style = {{color : 'wheat'}}></i>
          </div>
          <div className = "dashboard-content">
          <p className = "count">{this.state.users.branches.length}</p>
          <p>Branches</p>

          </div>
        </section>
        <section>
          <div className = "dashboard-icons">
          <i className="fas fa-hourglass-half" style = {{color : 'yellowgreen'}}></i>
          </div>
          <div className = "dashboard-content">
          <p className = "count">{this.state.users.classRooms.length}</p>
          <p>classRooms</p>

          </div>
        </section>
        <section>
          <div className = "dashboard-icons">
          <i className="fas fa-user-graduate" style = {{color : 'orange'}}></i>
          </div>
          <div className = "dashboard-content">
          <p className = "count">{this.state.users.students.length}</p>
          <p>Students</p>

          </div>
        </section>
        <button onClick={askForPermissioToReceiveNotifications} >
      Click here to recieve notification
    </button>
      </div>
    );
  }
}

export default Dashboard;
