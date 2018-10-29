import React from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const cookie = cookies.get('Kiddo');

class SchoolInfo extends React.Component{

    state = {
        school :[],
        isLoading: false
    }

    componentDidMount = async() => {
        const res = await fetch(`/api/super-admin/schools/${this.props.match.params.id}`,{
            method: 'GET',
            credentials: 'include',
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': cookie
            }
        })

        const data =await  res.json();
        if(data.success){
            this.setState({ school: data.school, isLoading: true })
          }
        console.log(this.state.school);
    }
    render(){
        if(!this.state.isLoading){
            return <div>Loading...</div>
        }

        console.log(this.state.school[0])

        return(
            <div className = "schoolInfo">
            <h2>{this.state.school[0].name}</h2>
            <div className = "school-branches">
            {this.state.school[0].branches.map(branch => {
               return <section key = {branch.name}>
                <div className = "dashboard-icons">
                <i className="fas fa-code-branch" style = {{color : '#f44271'}}></i>
                </div>
                <div className = "dashboard-content">
                <h2>{branch.name}</h2>
                <p>Branch Name</p>
                </div>
              </section>
            })}
             </div>

      </div>
        )
    }
}


export default SchoolInfo;