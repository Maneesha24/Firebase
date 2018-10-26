import React, { Component } from 'react';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <section>
          <div className = "dashboard-icons">
          <i class="fas fa-school" style = {{color : '#f44271'}}></i>
          </div>
          <div className = "dashboard-content">
          <p className = "count">250</p>
          <p>Schools</p>

          </div>
        </section>
        <section>
          <div className = "dashboard-icons">
          <i class="fas fa-code-branch" style = {{color : 'wheat'}}></i>
          </div>
          <div className = "dashboard-content">
          <p className = "count">250</p>
          <p>Schools</p>

          </div>
        </section>
        <section>
          <div className = "dashboard-icons">
          <i class="fas fa-hourglass-half" style = {{color : 'yellowgreen'}}></i>
          </div>
          <div className = "dashboard-content">
          <p className = "count">250</p>
          <p>Schools</p>

          </div>
        </section>
        <section>
          <div className = "dashboard-icons">
          <i class="fas fa-user-graduate" style = {{color : 'orange'}}></i>
          </div>
          <div className = "dashboard-content">
          <p className = "count">250</p>
          <p>Schools</p>

          </div>
        </section>
      </div>
    );
  }
}

export default Dashboard;
