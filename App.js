import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css" ;
import axios from "axios";
class App extends Component{
    constructor(){
        super()
        this.state={
            fullname:"",
            username:"",
            email:"",
            password:""
        }
        this.changefullname=this.changefullname.bind(this)
        this.changeusername=this.changeusername.bind(this)
        this.changeemail=this.changeemail.bind(this)
        this.changepassword=this.changepassword.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }
    changefullname(event){
        this.setState({fullname:event.target.value})
    }
    changeusername(event){
        this.setState({username:event.target.value})
    }
    changeemail(event){
        this.setState({email:event.target.value})
    }
    changepassword(event){
        this.setState({password:event.target.value})
    }
    onSubmit(event){
        event.preventdefault()
        const register={
            fullname :this.state.fullname,
            username :this.state.username,
            email :this.state.email,
            password :this.state.password
        }
        axios.post("http://localhost:4000/app/signup",register).then(res=>console.log(res.data))
        this.setState({
            fullname:"",
            username:"",
            email:"",
            password:""
        })
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="formon">
                        <form onSubmit={this.onSubmit}>
                            <input type="text"
                            placeholder="full name"
                            onChange={this.changefullname}
                            value={this.state.fullname}
                            className="form-control form-grp"
                            />
                             <input type="text"
                              placeholder="user name"
                            onChange={this.changeusername}
                            value={this.state.username}
                            className="form-control form-grp"
                            />
                             <input type="text"
                              placeholder="email"
                            onChange={this.changeemail}
                            value={this.state.email}
                            className="form-control form-grp"
                            />
                             <input type="text"
                              placeholder="password"
                            onChange={this.changepassword}
                            value={this.state.password}
                            className="form-control form-grp"
                            />
                            <input type="submit"
                            className="btn btn-danger btn-block"
                            value="submit"
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default App