import React from "react";

class Table extends React.Component{
    
    state={

    }

    render(){
        return(
            <>
            <h4>Articles</h4>
            <div className="table-responsive">
                <table className="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Published Date</th>
                    <th scope="col">Headline</th>
                    <th scope="col">Summary</th>
                    <th scope="col" className="url">Url</th>
                    <th scope="col">Source</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map(news => (
                        <tr>
                            <td>{news.pub_date.split('T')[0]}</td>
                            <td>{news.headline.main.split(' ').slice(0,10).join(' ')}...</td>
                            <td>{news.abstract.split(' ').slice(0,10).join(' ')}...</td>
                            <td><a href={news.web_url}>{news.web_url}</a></td>
                            <td>{news.source}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
            </div>    
            </>
        )
    }
}

export default Table;