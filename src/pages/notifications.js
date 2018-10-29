import React from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookie = cookies.get('Kiddo');

class Notifications extends React.Component{
    state = {
        title: '',
        content: '',
        to: ''
    }

    onTitleChange = (event) => {
        this.setState({title: event.target.value})
    }

    onContentChange = (event) => {
        this.setState({content: event.target.value})
    }

    onToChange = (event) => {
        this.setState({to: event.target.value})
    }

    onSubmit = async() => {
        const res = await fetch('/api/super-admin/push', {
            method: 'POST',
            headers: {
                'Authorization': cookie,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                registration_token: this.state.to,
                title: this.state.title,
                content: this.state.content
            })
        });
        const data = await res.json();
        console.log(data);
    }


    
    render(){

        return(
            <div className="notifications">
            <h2>Notifications</h2>
            <div>

                <section>
                    <h2>Filter</h2>
<form>
    <div className="radio-btns">
  <input type="radio" name="role" value="admin" /> All admins<br />
  <input type="radio" name="role" value="teacher" /> All teachers<br />
  <input type="radio" name="role" value="parent" /> All parents<br />
  </div>
</form> 

</section>

                <section>
                    <h2>Add Details</h2>
<form encType = "multipart/form-data" action = "/api/super-admin/push" method =  "post">
    <div className = "notifications-firebase-input">
        <p>Choose file* : </p>
        <input type = "file" name="logo" />
    </div>
    <div className = "notifications-firebase-input">
        <p>Title* : </p>
<input type = "text" className= "notification-firebase" value = {this.state.title} onChange={this.onTitleChange} className = "input" placeholder = "Enter title"/>
    </div>
    <div className = "notifications-firebase-input">
        <p>Message* : </p>
<input type = "text" className= "notification-firebase" value = {this.state.content} onChange={this.onContentChange} className = "input"  placeholder = "Enter content"/>
    </div>
    <button type = "button" onClick = {this.onSubmit}>Submit</button>
</form> 
</section>

            </div>            
            
            </div>
        )
    }
}

export default Notifications;


