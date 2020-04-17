import React from "react";

import NavBar from "./NavBar"
import Sidenav from "./Sidebar"
import Table from "./Table"
import Chart from "./Chart"

import api from "../api"

import noResult from "../image/noresults.svg"

class Dashboard extends React.Component{
    state={
        key:"",
        page:0,
        data:[],
        loading:false,
        startIndex:0,
        count:[0,0,0,0,0,0,0,0,0,0]
    }

    onSelectPage=(pageno)=>{
        this.setState({...this.state,page:pageno},()=>this.fetchNews(this.state.key,this.state.page))
    }

    getKey=(key)=>{
        this.setState({...this.state,key:key,page:0,loading:true},()=>this.fetchNews(this.state.key,this.state.page));
    }

    fetchNews=(key,page)=>{
        api.getnews(key,page).then(res=>this.setState({...this.state,data:res.data.response.docs,loading:false},()=>console.log(this.state.data)));    
        
        let count =this.state.count;
        for(let i=2011;i<=2020;i++){
            api.getcount(key,(i*10000+101),(i*10000+1231)).then(res=>{
                let index=i-2011;
                let val=res.data.response.meta.hits;
                console.log(val);
                count[index]=val;
                this.setState({...this.state,count:count},()=>{});
            })
        }

        //getCount(this);

        // async function getCount(){
        //     console.log("entered")
            
        //     console.log("count")
        //     console.log(count)
        //     this.setState({...this.state,count:count});
        // }
        
    }
    onPageJump=(val)=>{
        this.setState({...this.state,startIndex:this.state.startIndex+val})
    }


    render(){
        return(
            <>
            <NavBar getKey={this.getKey}/>
            <div className="wrapper">
                <Sidenav />
                <div className="main">
                {this.state.data.length!==0&&!this.state.loading?
                (    
                    <div className="results">
                        <p>Here are your results for "{this.state.key}"</p>
                        <div className="result-table">
                            <Table data={this.state.data}/>
                        </div>
                        <div className="page-no">
                        {this.state.startIndex!==0&&
                            <span onClick={()=>this.onPageJump(-10)} > &lt;&lt; </span>
                        }
                        {[...Array(10).keys()].map(i=>i+this.state.startIndex).map(i=>(
                            <span onClick={()=>{this.onSelectPage(i)}} className={i===this.state.page&&"selected"}>{i+1}</span>
                        ))}
                        {this.state.startIndex!==90&&
                            <span onClick={()=>this.onPageJump(10)} > >> </span>
                        }
                        </div>
                        <div className="chart">
                        <p>NUMBER OF ARTICLES PUBLISHED FOR " {this.state.key} "</p>
                            <Chart count={this.state.count} />
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