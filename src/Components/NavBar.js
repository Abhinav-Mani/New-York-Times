import React from "react"
import Logo from "../image/logo.png";
import button from "../image/button.svg"

class NavBar extends React.Component{
    state={
        key:""
    }

    SubmitHandler=e=>{
        e.preventDefault();
        this.props.getKey(this.state.key)
    }

    EventStringChange = e =>{
         this.setState({[e.target.name] : e.target.value});
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light dashboard-nav sticky-top">
            <div className="navbar-brand dashboard-brand">
                <img src={Logo} alt="New York Times" />
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <form className="form-inline my-2 my-lg-0 nav-form row" onSubmit={this.SubmitHandler}>
                        <span className="form-with-icon">
                            <i className="fa fa-search form-icon" aria-hidden="true"></i>
                            <input className="form-control mr-sm-2 from-icon-input" id="searchBox" value={this.state.key} onChange={this.EventStringChange} type="search" placeholder="Search" aria-label="Search" name="key"/>
                        </span>
                        <img  className="my-2 my-sm-0 form-icon-button" src={button} alt="Search" onClick={()=>{this.props.getKey(this.state.key)}}/>
                        {/* <button className="my-2 my-sm-0 form-icon-button" type="submit">Search</button> */}
                    </form>
                </ul>
            </div>
            </nav>
        )
    }
}

export default NavBar;