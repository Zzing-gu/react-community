import React, { Component } from 'react'
import './style.css'
import Board from './board'
import Axios from 'axios';

class BoardTest extends Component {

    getAllDataList =  async () => {
        await Axios.get('http://127.0.0.1:8000/api/project/' ).then(
         (response) => {
           console.log(response)
           console.log(response.data)
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
               
                <Board/>
            </div>
        )
    }
}

export default BoardTest