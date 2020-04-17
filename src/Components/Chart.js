import React from "react"
import {Line} from "react-chartjs-2"

class Chart extends React.Component{
    state={
        
    }


    constructor(props) {
        super(props);
        console.log(props.count);
        this.state = { 
            data:{
                labels:["2011","2012","2013","2014","2015","2016","2017","2018","2019","2020"],
                datasets:[{
                    label:"",
                    backgroundColor:"rgba(33,197,218,0.1)",
                    data:props.count,
                    borderColor:"#21C5DA"
                }]
            }
        };
    }

    

    render(){
    return (
        <>
            <div style={{position:"relative"}}>
                <Line
                    redraw={true}
                    options={{
                        responsive:"true",
                        elements: {
                            line: {
                                tension: 0
                            }
                        },                       
                        legend:{
                            display:false
                        }
                    }}
                    data={this.state.data }
                />
            </div>
        </>
    )}

}

export default Chart