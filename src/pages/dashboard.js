import React, { Component } from 'react';
import Cookies from 'universal-cookie';

// import { askForPermissioToReceiveNotifications } from '../pushNotifications';

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
      <div className= "">
      <h2>DASHBOARD</h2>
      <hr />
      </div>
      <div className = "dashboard-content-info">
        <section>
          <div className = "dashboard-icons">
          <i className="fas fa-school" style = {{color : '#f44271'}}></i>
          </div>
          <div className = "dashboard-content">
          <h2 className = "count">{this.state.users.schools.length}</h2>
          <p>Schools</p>

          </div>
        </section>
        <section>
          <div className = "dashboard-icons">
          <i className="fas fa-code-branch" style = {{color : 'wheat'}}></i>
          </div>
          <div className = "dashboard-content">
          <h2 className = "count">{this.state.users.branches.length}</h2>
          <p>Branches</p>

          </div>
        </section>
        <section>
          <div className = "dashboard-icons">
          <i className="fas fa-hourglass-half" style = {{color : 'yellowgreen'}}></i>
          </div>
          <div className = "dashboard-content">
          <h2 className = "count">{this.state.users.classRooms.length}</h2>
          <p>classRooms</p>

          </div>
        </section>
        <section>
          <div className = "dashboard-icons">
          <i className="fas fa-user-graduate" style = {{color : 'orange'}}></i>
          </div>
          <div className = "dashboard-content">
          <h2 className = "count">{this.state.users.students.length}</h2>
          <p>Students</p>

          </div>
        </section>
        {/* <button onClick={askForPermissioToReceiveNotifications} >
      Click here to recieve notification
    </button> */}
      </div>
      </div>
    );
  }
}

export default Dashboard;
