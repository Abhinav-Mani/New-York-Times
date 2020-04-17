import React from "react";

import NavBar from "./NavBar"
import Sidenav from "./Sidebar"
import Table from "./Table"
import api from "../api"

import noResult from "../image/noresults.svg"

class Dashboard extends React.Component{
    state={
        key:"",
        page:0,
        data:[],
        loading:false
    }

    getKey=(key)=>{
        this.setState({...this.state,key:key,page:0},()=>this.fetchNews(this.state.key,this.state.page));
    }

    fetchNews=(key,page)=>{
        this.setState({...this.state,loading:true})
        api.getnews(key,page).then(res=>this.setState({...this.state,data:res.data.response.docs,loading:false},()=>console.log(this.state.data)));
    }

    render(){
        return(
            <>
            <NavBar getKey={this.getKey}/>
            <div className="wrapper">
                <Sidenav />
                <div className="main">
                {this.state.data.length!==0?
                (    
                    <div className="results">
                        <p>Here are your results for "{this.state.key}"</p>
                        <div className="result-table">
                            <Table data={this.state.data}/>
                        </div>
                    </div>   
                ):(
                    
                    <div className="no-result">
                        {this.state.loading&&
                        (<div class="spinner-border" role="status">
                            <span class="sr-only">Loading...</span>
                        </div>)
                        }
                        <h1 id="no-result-heading">Search for breaking news from across the world, across the times.</h1>
                        <img src={noResult} alt={"No Results"}></img>
                    </div>
                )
                }
                </div>
            </div>
            </>
        )
    }
}

export default Dashboard;