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
                        
                        {this.props.listData.map((item, index)=> {
                            return (
                                <BoardCell id={item[0]} name={item[1].name} content={item[1].content} key={index}/>
                            )
                        })}
                       
                    </tbody>
                </table>
        )
    }
}

export default Board