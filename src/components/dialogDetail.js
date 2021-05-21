import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import Box from "@material-ui/core/Box";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {makeStyles} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import CloseIcon from "@material-ui/icons/Close";
import Tooltip from '@material-ui/core/Tooltip';
import {Grid, OutlinedInput} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

const useStyle = makeStyles({
    root: {
        "& .MuiDialog-paperScrollPaper": {
            maxWidth: "calc(100% - 14px)",
            maxHeight: "calc(100% - 14px)",
            width: "calc(100% - 14px)",
            height: "calc(100% - 25px)",
            margin: 14
        }
    },

    leftArrow: {
        position: "absolute",
        top: "50%",
        left: 0
    },
    rightArrow: {
        position: "absolute",
        top: "50%",
        right: 0
    },
    roundedImage: {
        borderRadius: "99999999999999999px",
        width: 300,
        height: 300,
    },

    profileCard: {
        padding: 20,
        borderRadius: 20
    },
    profileBodyCard: {
        borderRadius: 20
    },
    borderRadius_20: {
        borderRadius: 20,
        width: "100%"
    },
    "@media (max-width: 596px)": {
        root: {
            "& .MuiDialog-paperScrollPaper": {
                maxWidth: "calc(100% - 14px)",
                maxHeight: "calc(100% - 14px)",
                height: "calc(100% - 14px)",
                margin: 8
            }
        }
    }
});

export default function DialogDetail(props) {
    const [open, setOpen] = React.useState(true);
    const [curPosition, setCurPosition] = useState(props.selected);

    const classes = useStyle();


    const handleClose = () => {
        setOpen(false);
        props.closeDialog();
    };

    // const descriptionElementRef = React.useRef(null);
    // React.useEffect(() => {
    //   if (open) {
    //     const { current: descriptionElement } = descriptionElementRef;
    //     if (descriptionElement !== null) {
    //       descriptionElement.focus();
    //     }
    //   }
    // }, [open]);

    return (
        <div>
            <Dialog
                maxWidth={"false"}
                className={classes.root}
                open={open}
                onClose={handleClose}
                scroll={"paper"}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                {curPosition > 0 ?
                    <Tooltip title="Prev" arrow onClick={() => {
                        setCurPosition(curPosition - 1)
                    }}>
                        <IconButton className={classes.leftArrow} color="primary">
                            <ArrowBackIosIcon/>
                        </IconButton>
                    </Tooltip> : ""}
                {curPosition < props.rowData.length - 1 ?
                    <Tooltip title="Next" arrow onClick={() => {
                        setCurPosition(curPosition + 1)
                    }}>
                        <IconButton className={classes.rightArrow} color="primary">
                            <ArrowForwardIosIcon/>
                        </IconButton>
                    </Tooltip> : ""}
                <DialogTitle id="scroll-dialog-title">
                    <Box display="flex" justifyContent="space-between">
                        <span>User Request</span>
                        {/* <IconButton> */}
                        <CloseIcon onClick={handleClose} style={{cursor: "pointer"}}/>
                        {/* </IconButton> */}
                    </Box>
                </DialogTitle>
                <DialogContent dividers={true} style={{background: "#f2f2f2"}}>
                    <DialogContentText id="scroll-dialog-description" tabIndex={-1}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={5}>
                                <Box display={"flex"} justifyContent={"center"}>
                                    <Card className={classes.profileCard}>
                                        <img className={classes.roundedImage} src={props.rowData[curPosition].img}/>
                                        <Box display={"flex"} justifyContent={'center'} mt={2}>
                                            <Typography variant="subtitle1" gutterBottom>
                                                {props.rowData[curPosition].col1}
                                            </Typography>
                                        </Box>
                                    </Card>
                                </Box>

                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Card className={classes.profileBodyCard}>
                                    <Box p={2}>
                                        <Typography variant="subtitle1">
                                            Profile
                                        </Typography>
                                    </Box>
                                    <Divider/>
                                    <Box p={2}>
                                        <Box mb={4}>
                                            <Grid container spacing={4}>
                                                <Grid item xs={12} md={6}>
                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel
                                                            htmlFor="outlined-adornment-password">Name</InputLabel>
                                                        <OutlinedInput
                                                            readOnly
                                                            value={props.rowData[curPosition].col1}
                                                            id="outlined-adornment-password"
                                                            className={classes.borderRadius_20}
                                                            labelWidth={40}
                                                        />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel
                                                            htmlFor="outlined-adornment-password">Email</InputLabel>
                                                        <OutlinedInput
                                                            readOnly
                                                            value={props.rowData[curPosition].email}
                                                            id="outlined-adornment-password"
                                                            className={classes.borderRadius_20}
                                                            labelWidth={50}
                                                        />
                                                    </FormControl>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box mb={4}>
                                            <Grid container spacing={4}>
                                                <Grid item xs={12} md={6}>
                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel
                                                            htmlFor="outlined-adornment-password">Address1</InputLabel>
                                                        <OutlinedInput
                                                            readOnly
                                                            value={props.rowData[curPosition].col3}
                                                            id="outlined-adornment-password"
                                                            className={classes.borderRadius_20}
                                                            labelWidth={70}
                                                        />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel
                                                            htmlFor="outlined-adornment-password">Address2</InputLabel>
                                                        <OutlinedInput
                                                            readOnly
                                                            value={props.rowData[curPosition].col4}
                                                            id="outlined-adornment-password"
                                                            className={classes.borderRadius_20}
                                                            labelWidth={70}
                                                        />
                                                    </FormControl>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box mb={4}>
                                            <Grid container spacing={4}>
                                                <Grid item xs={12} md={6}>
                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel
                                                            htmlFor="outlined-adornment-password">City</InputLabel>
                                                        <OutlinedInput
                                                            readOnly
                                                            id="outlined-adornment-password"
                                                            className={classes.borderRadius_20}
                                                            labelWidth={40}
                                                        />
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} md={6}>
                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel
                                                            htmlFor="outlined-adornment-password">State</InputLabel>
                                                        <OutlinedInput
                                                            readOnly
                                                            id="outlined-adornment-password"
                                                            className={classes.borderRadius_20}
                                                            labelWidth={50}
                                                        />
                                                    </FormControl>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Card>
                            </Grid>
                        </Grid>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant={'contained'} onClick={() => {
                    }} color="primary">
                        Accept
                    </Button>
                    <Button variant={'contained'} onClick={() => {
                    }} style={{background: "#dbb932"}}>
                        Reject
                    </Button>
                    <Button variant={'contained'} onClick={() => {
                    }} color="secondary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
