import React, { Component } from 'react'
import './style.css'
import Board from './board'
import Axios from 'axios';

class BoardTest extends Component {

    
    state = {
        listData : null
    }

    getAllDataList =  async () => {
        await Axios.get('http://127.0.0.1:8000/api/project/' ).then(
         (response) => {
           console.log(response)
           console.log(response.data)
           //this.listData = response.data
           console.log(Object.entries(response.data.project))
           //this.state.listData = Object.entries(response.data.project)
           this.setState({listData: Object.entries(response.data.project)})
         }
       ).catch((error) => {
         console.log(error)
       })
     }

    componentDidMount(){
        console.log("fetch action to server ...")
        this.getAllDataList()
    }

    render() {
        return (
            <div id={"container"}>
               {this.state.listData && <Board listData={this.state.listData}/>}
                
            </div>
        )
    }
}

export default BoardTest