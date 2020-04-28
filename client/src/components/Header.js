import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    link: {
        color: 'white',
        textDecoration: 'none',
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Logo
                    </Typography>
                    <Button color="inherit">
                        <Link className={classes.link} to="/signUp">
                            Sign Up
                        </Link>
                    </Button>
                    <Button color="inherit">
                        <Link className={classes.link} to="/">
                            Sign Up
                        </Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}