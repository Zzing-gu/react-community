import React, { Component } from 'react'

class BoardCell extends Component {
    render() {
        return (
            <tr>
                <td className={"gall_num"}>1</td>
                <td className={"gall_tit"}> <a href={"/"}>테스트테스트</a> </td>
                <td className={"gall_writer"}>정호석</td>
                <td className={"gall_date"}>19.06.18</td>
                <td className={"gall_count"}>11</td>
                <td className={"gall_recommend"}>1</td>
            </tr>
        )
    }
}


export default BoardCell