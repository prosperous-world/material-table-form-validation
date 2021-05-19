import React, {useState} from 'react';
import {makeStyles,withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Grid,Checkbox,FormControlLabel,Button} from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import MyInput from "./MyInput";
import { green, purple } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    cardRoot: {
        borderRadius: 10,
    },
    cardHeader: {
        padding: "15px",
        fontWeight: 500
    },
    font15:{
        fontSize:14,
    },
    "@media (max-width: 596px)": {}

}));

const ColorButton = withStyles((theme) => ({
    root: {
        padding:"10px 20px",
        color: theme.palette.getContrastText(purple[500]),
        textTransform:"inherit",
        fontFamily:"sans-serif",
        backgroundColor: "#5f63f2",
        '&:hover': {
            backgroundColor:"#8c94ff",
        },
    },
}))(Button);

function MyForm() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [uname, setUname] = useState("");
    const [city, setCity] = useState("");
    const [ustate, setUstate] = useState("");
    const [uzip, setUzip] = useState("");


    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <Card className={classes.cardRoot}>
                <div className={classes.cardHeader}>
                    Form Validation
                </div>
                <Divider/>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <MyInput
                                required={true}
                                label={"First Name"}
                                errMsg={"First Name required."}
                                status={!isSubmitted && fname.length == 0 ? "init" : (isSubmitted && fname.length == 0 ? "error" : "success")}
                                value={fname}
                                updateText={(val) => {
                                    setFname(val)
                                }}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <MyInput
                                required={true}
                                label={"Last Name"}
                                errMsg={"Last Name required."}
                                status={!isSubmitted && lname.length == 0 ? "init" : (isSubmitted && lname.length == 0 ? "error" : "success")}
                                value={lname}
                                updateText={(val) => {
                                    setLname(val)
                                }}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <MyInput
                                required={true}
                                label={"Username"}
                                errMsg={"Username required."}
                                status={!isSubmitted && uname.length == 0 ? "init" : (isSubmitted && uname.length == 0 ? "error" : "success")}
                                value={uname}
                                updateText={(val) => {
                                    setUname(val)
                                }}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <MyInput
                                label={"City"}
                                errMsg={"Validation error on field 'City'"}
                                status={!isSubmitted && city.length == 0 ? "init" : (isSubmitted && city.length == 0 ? "error" : "success")}
                                value={city}
                                updateText={(val) => {
                                    setCity(val)
                                }}/>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <MyInput
                                label={"State"}
                                errMsg={"Validation error on field 'State'"}
                                status={!isSubmitted && ustate.length == 0 ? "init" : (isSubmitted && ustate.length == 0 ? "error" : "success")}
                                value={ustate}
                                updateText={(val) => {
                                    setUstate(val)
                                }}/>
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <MyInput
                                label={"Zip"}
                                errMsg={"Validation error on field 'zip-code'"}
                                status={!isSubmitted && uzip.length == 0 ? "init" : (isSubmitted && uzip.length == 0 ? "error" : "success")}
                                value={uzip}
                                updateText={(val) => {
                                    setUzip(val)
                                }}/>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <FormControlLabel
                            value="end"
                            control={<Checkbox color="primary"/>}
                            label="Agree to terms and conditions"
                            labelPlacement="end"
                            classes={classes.font15}
                        />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <ColorButton onClick={()=>setIsSubmitted(true)}>
                                Submit Form
                            </ColorButton>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>


        </>
    )
}

export default MyForm;
