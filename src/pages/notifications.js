import React from 'react';

class Notifications extends React.Component{
    
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
<form>
    <div className = "notifications-firebase-input">
        <p>Choose file* : </p>
        <input type = "button" value = "Browse" />
    </div>
    <div className = "notifications-firebase-input">
        <p>Message* : </p>
<input type = "text" className= "notification-firebase" />
    </div>
</form> 

</section>

            </div>            
            
            </div>
        )
    }
}

export default Notifications;


