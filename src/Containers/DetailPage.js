import React, { Component } from 'react'
import { Divider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import './detail.css'

import {deleteRequest} from '../Modules/Auth'

const useStyles = makeStyles(theme => ({
    root: {
        //padding: theme.spacing(3, 2),
        width: "50vw",
        height: "70vh"
    },
    button: {
        float: "right !important",
        margin: "0 0 0 40"
        //padding: "40px"
    }
}));






const DetailPage = (props) => {

    const classes = useStyles();

    const deleteAction = () => {
        var id = props.location.state.id
        console.log(`delete ${id}`)
        deleteRequest(id)
    }

    return (
        <React.Fragment>

            <Button onClick={deleteAction} variant="contained" color="secondary" className={classes.button}>
                삭제
            </Button>
            <Button  variant="contained" color="primary" className={classes.button}>
                <Link style={{ color: "white" }}  to={{pathname:"/edit", state:{id: props.location.state.id, name:props.location.state.name, content:props.location.state.content}}}>

                    수정
                </Link>
            </Button>  
            <Paper className={classes.root}>
                <h3>{props.location.state.id}</h3>
                <h1>{props.location.state.name}</h1>
                <Divider />
                <div>{props.location.state.content}</div>
            </Paper>
        </React.Fragment>
    )
}
export default DetailPage;