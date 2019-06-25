import React, { Component } from 'react'
import BoardCell from './boardCell'

class Board extends Component {
    render() {
        return (
            <table>
                    <thead>
                        <tr>
                            <th scope="col" >번호</th>
                            <th scope="col">제목</th>
                            <th scope="col">글쓴이</th>
                            <th scope="col">작성일</th>
                            <th scope="col">조회</th>
                            <th scope="col">추천</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={"gall_num"}>1</td>
                            <td className={"gall_tit"}> <a href={"/detail"}>테스트테스트</a> </td>
                            <td className={"gall_writer"}>정호석</td>
                            <td className={"gall_date"}>19.06.18</td>
                            <td className={"gall_count"}>11</td>
                            <td className={"gall_recommend"}>1</td>
                        </tr>
                        <tr>
                            <td className={"gall_num"}>1</td>
                            <td className={"gall_tit"}> <a href={"/detail"}>테스트테스트</a> </td>
                            <td className={"gall_writer"}>정호석</td>
                            <td className={"gall_date"}>19.06.18</td>
                            <td className={"gall_count"}>11</td>
                            <td className={"gall_recommend"}>1</td>
                        </tr>
                        <tr>
                            <td className={"gall_num"}>1</td>
                            <td className={"gall_tit"}> <a href={"/detail"}>테스트테스트</a> </td>
                            <td className={"gall_writer"}>정호석</td>
                            <td className={"gall_date"}>19.06.18</td>
                            <td className={"gall_count"}>11</td>
                            <td className={"gall_recommend"}>1</td>
                        </tr>
                        <BoardCell/>
                        <BoardCell/>
                        <BoardCell/>
                        <BoardCell/>
                        {[0,1,2,3,4].map((item, index)=> {
                            return (
                                <BoardCell key={index}/>
                            )
                        })}
                       
                    </tbody>
                </table>
        )
    }
}

export default Board