import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class BoardCell extends Component {
    render() {
        return (
            <tr>
                <td className={"gall_num"}>{this.props.id}</td>
                <td className={"gall_tit"}> <Link to={{pathname:"/detail", state:{id: this.props.id, name:this.props.name, content:this.props.content}}}>{this.props.name} </Link> </td>
                <td className={"gall_writer"}>정호석</td>
                <td className={"gall_date"}>19.06.18</td>
                <td className={"gall_count"}>11</td>
                <td className={"gall_recommend"}>1</td>
            </tr>
        )
    }
}


export default BoardCell