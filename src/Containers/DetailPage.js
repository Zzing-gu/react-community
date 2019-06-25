import React, { Component } from 'react'
import { Divider } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


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






const DetailPage = () => {

    const classes = useStyles();

    return (
        <React.Fragment>

            <Button variant="contained" color="secondary" className={classes.button}>
                삭제
            </Button>
            <Button variant="contained" color="primary" className={classes.button}>
                수정
            </Button>
            <Paper className={classes.root}>
                <h1>제목</h1>
                <Divider />
                <div>내용</div>
            </Paper>
        </React.Fragment>
    )
}
export default DetailPage;