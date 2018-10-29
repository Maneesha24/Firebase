import React from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookie = cookies.get('Kiddo');

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

  // onPasswordChange = (event) => {
  //   this.setState({password: event.target.value})
  // }

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

    if(!this.state.isLoading){
      return <div>Loading...</div>
  }

    return (
        <div className="profile">
         <h2>Edit Profile</h2>
         <article>
         <section className = "user-image">
      <div className="user-pic">
      <img alt = "profile" src = {this.state.profile[0].logo} style={{width: '148px',borderRadius : '50%',border : '3px groove #e02a64'}}/>
      </div>
      <h4>{this.state.profile[0].name}</h4>
      <h4>{this.state.profile[0].phone}</h4>
      <h4>Super Admin Panel</h4>
      <hr />
      <h1>KIDDO</h1>
      </section>
        <section>
          <h2>Details</h2>
          <div className = "user-details">
          <div>
          <div className = "user-details-indv">
            <label>Name</label>
            <input type = "text" className = "input" placeholder= "Enter your name" value = {this.state.name} onChange={this.onNameChange}/>
          </div>
          <div className = "user-details-indv">
            <label>Email</label>
            <input type = "text" className = "input" placeholder = "Enter your email" value = {this.state.email} onChange={this.onEmailChange}/>
          </div>
          <div className = "user-details-indv">
            <label>Gender</label>
            <input type = "text" className = "input" placeholder = "Enter your gender" value = {this.state.gender} onChange={this.onGenderChange}/>
          </div>
          {/* <div className = "user-details-indv">
            <label>Password</label>
            <input type = "text" className = "input" placeholder = "Enter your password" value = {this.state.password} onChange={this.onPasswordChange}/>
          </div> */}
          <div>
            <button type = "button" onClick={this.onProfileUpdate}>Submit</button>
            </div>
            </div>
            <div>
          <img src = {this.state.profile[0].logo} style={{width: '120px',height: '150px',borderRadius : '50%',border : '3px groove #e02a64'}} alt = "profile"/>
          {/* <button>Choose file: </button> */}
          {/* <input type = "button" value = "choose" /> */}
          </div>
          </div>
      
      </section>
      
      </article>
      </div>
    );
  }
}

export default Profile;