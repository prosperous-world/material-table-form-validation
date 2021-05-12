import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {fade, TextField} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    textRed: {
        color: "red",
    },
    textError:{
        fontFamily:'"Inter" sans-serif',
        color:"red",
        fontSize:14,
    },
    labelitem:{
        fontFamily:'"Inter" sans-serif',
        color:"#484747",
        fontSize:15,
        fontWeight:500
    },
    "@media (max-width: 596px)": {}

}));

const useStylesInit = makeStyles((theme) => ({
    root: {
        border: "1px solid grey",
        overflow: 'hidden',
        borderRadius: 4,
        padding: "7px 11px",
        backgroundColor: '#fff',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#fff',
        },
        '&$focused': {
            backgroundColor: '#fff',
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        },
    },
    focused: {},
}));
const useStylesSuccess = makeStyles((theme) => ({
    root: {
        border: "1px solid green",
        overflow: 'hidden',
        padding: "7px 11px",
        borderRadius: 4,
        backgroundColor: '#fff',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#fff',
        },
        '&$focused': {
            backgroundColor: '#fff',
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        },
    },
    focused: {},
}));
const useStylesError = makeStyles((theme) => ({
    root: {
        border: "1px solid red",
        padding: "7px 11px",
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: '#fff',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
            backgroundColor: '#fff',
        },
        '&$focused': {
            backgroundColor: '#fff',
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
            borderColor: theme.palette.primary.main,
        },
    },
    focused: {},
}));

function RedditTextField(props) {
    var classes = null;
    const classes_init = useStylesInit();
    const classes_success = useStylesSuccess();
    const classes_error = useStylesError();

    switch (props.status) {

        case "init":
            classes = classes_init;
            break;
        case "success":
            classes = classes_success;
            break;
        case "error":
            classes = classes_error;
            break;
        default:
            classes = classes_init;
            break;
    }

    return <TextField InputProps={{classes, disableUnderline: true}} {...props} />;
}


export default function MyInput(props) {
    //state....


    const globalClass = useStyles();
    const classes_init = useStylesInit();
    const classes_success = useStylesSuccess();
    const classes_error = useStylesError();


    return (
        <div>
            <div>{props.required ?
                <span className={globalClass.textRed}>
                *
                </span> : ""}
                &nbsp;
                <span className={globalClass.labelitem}>{props.label}</span>
            </div>
            <RedditTextField
                onChange={(e) => props.updateText(e.target.value)}
                value={props.value}
                status={props.status}
                style={{
                    width: "100%"
                }}
            />
            <div className={globalClass.textError}>{props.status=="error"?props.errMsg:""}</div>
        </div>
    )
}

