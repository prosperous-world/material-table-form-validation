import React, {useEffect, useState} from 'react';
import {Grid} from "@material-ui/core";
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';

import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import IconButton from "@material-ui/core/IconButton";
import TableHead from '@material-ui/core/TableHead';
import InputBase from "@material-ui/core/InputBase";
import Pagination from "@material-ui/lab/Pagination";
import Box from "@material-ui/core/Box";
import CreateIcon from '@material-ui/icons/Create';
import {MoreVert} from "@material-ui/icons";
import DialogDetail from "./dialogDetail";

//styles...
const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontFamily: "sans-serif !important",
        fontSize: 14,
        color: "#838696!important;",

    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd):hover': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
    zIndexTop: {
        zIndex: 9999999,
    },
    table: {
        minWidth: 700,
        borderTop: "1px solid #e0e0e0",
    },
    tableHeader: {
        fontFamily: "sans-serif",
        color: "rgb(100,100,100)",
        fontWeight: 600
    },
    toolbar: {
        background: "white",
        borderRadius: "8px 8px 0px 0px",
        justifyContent: "space-between"
    },
    navbar: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        '& a': {
            fontSize: "13px !important",
            color: "#868eae",
            textDecoration: "none !important",
        }
    },
    navbarSelected: {
        color: "#5f63f2 !important",
        paddingBottom: 22,
        borderBottom: "1px solid #5f63f2",
    },
    tablecaption: {
        // flex: "1 1",
        fontSize: 16,
        fontWeight: 500
    },
    toolbarWrapper: {
        display: "flex",
        alignItems: "baseline",
    },
    roundedImage: {
        borderRadius: "99999999999999999px",
        width: "2.5rem",
        height: "2.5rem",
    },
    "@media (max-width: 596px)": {
        navbarSelected: {
            paddingBottom: 0,
            borderBottom: "0px",
        },
        toolbar: {
            flexFlow: "column"
        },
        tablecaption: {
            paddingTop: 20,
            paddingBottom: 4
        },
        menuIconButtion: {
            paddingTop: 5
        },
        toolbarWrapper: {
            flexFlow: "column",
            alignItems: "center",
        }
    }

}));

const useStylesSearchBox = makeStyles((theme) => ({
    root: {
        // padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 7,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

const useStylesMultiRow = makeStyles((theme) => ({
    first: {
        fontWeight: 600,
        fontFamily: 'Inter var, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        color: "black",
        fontSize: 14,
    },
    second: {
        color: "#787f8c",
        fontSize: ".875rem",
        lineHeight: "1.25rem"
    }
}));


//end styles...

const rows = [
    {
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        col1: 'Frozen yoghurt',
        col2: 159,
        col3: 6.0,
        col4: 24,
        col5: 4.0
    },
    {
        img: "https://homepages.cae.wisc.edu/~ece533/images/airplane.png",
        col1: 'Ice cream sandwich',
        col2: 237,
        col3: 9.0,
        col4: 37,
        col5: 4.3
    },
    {
        img: "https://homepages.cae.wisc.edu/~ece533/images/baboon.png",
        col1: 'Eclair',
        col2: 262,
        col3: 16.0,
        col4: 24,
        col5: 6.0
    },
    {
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
        col1: 'Cupcake',
        col2: 305,
        col3: 3.7,
        col4: 67,
        col5: 4.3
    },
    {
        img: "https://homepages.cae.wisc.edu/~ece533/images/peppers.png",
        col1: 'Gingerbread',
        col2: 356,
        col3: 16.0,
        col4: 49,
        col5: 3.9
    },
];


function MultiRowTD(props) {
    const classes = useStylesMultiRow();
    return (
        <Box ml={props.marginLeft} style={{display: "inline-block"}}>
            <div className={classes.first}>
                {props.first}
            </div>
            <div className={classes.second}>
                {props.second}
            </div>
        </Box>
    )
}

function RowMoreIcon(props) {
    const classes = useStyles();

    const [menuOpen, setMenuOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleMenuToggle = () => {
        setMenuOpen((prevOpen) => !prevOpen);
    };
    const handleMenuClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setMenuOpen(false);
    };

    return (
        <span>
            <IconButton
                ref={anchorRef}
                aria-controls={menuOpen ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleMenuToggle}
                style={{}}
                className={classes.menuIconButtion}
            >
               <MoreVert color={"primary"}/>
            </IconButton>
            <Popper open={menuOpen} anchorEl={anchorRef.current} role={undefined} className={classes.zIndexTop}
                    transition
                    disablePortal>
                {({TransitionProps, placement}) => (
                    <Grow
                        {...TransitionProps}
                        style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                    >
                        <Paper>
                            <ClickAwayListener onClickAway={handleMenuClose}>
                                <MenuList autoFocusItem={menuOpen} id="menu-list-grow">
                                    <MenuItem
                                        onClick={handleMenuClose}>Send email</MenuItem>
                                    <MenuItem onClick={handleMenuClose}>Delete
                                    </MenuItem>
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </span>

    )
}

function MyTable() {
    const classes = useStyles();
    const classes_search = useStylesSearchBox();

    const [alignment, setAlignment] = React.useState('left');
    const [selectedMenu, setSelectedMenu] = React.useState("week");
    const [menuOpen, setMenuOpen] = React.useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [curSelectedUser, setCurSelectedUser] = useState(-1);

    const [rowData, setRowData] = useState(rows);

    useEffect(() => {
        setRowData(searchTerm.length == 0 ? rows :
            rows.filter(item => item.col1.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    }, [searchTerm]);

    const anchorRef = React.useRef(null);

    const handleMenuToggle = () => {
        setMenuOpen((prevOpen) => !prevOpen);
    };
    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const handleMenuClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setMenuOpen(false);
    };
    const toggelData = (event, flag) => {
        event.preventDefault();
        setSelectedMenu(flag);
    }

    const closeDialog = () => {
        setCurSelectedUser(-1);
    }

    return (
        <Grid container>
            <Grid item xs={12}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.tablecaption}>Caption</div>
                    <Paper component="form" className={classes_search.root}>

                        <InputBase
                            className={classes_search.input}
                            placeholder="Search "
                            // value={searchTerm}
                            inputProps={{'aria-label': 'search '}}
                            onKeyDown={(e) => {
                                setTimeout(function () {
                                    setSearchTerm(e.target.value);
                                }, 200);
                            }}
                        />
                        <IconButton className={classes_search.iconButton} aria-label="search">
                            <SearchIcon/>
                        </IconButton>

                    </Paper>
                    <div className={classes.toolbarWrapper}>
                        <Typography className={classes.navbar}>
                            <Link href="#" className={selectedMenu == "week" ? classes.navbarSelected : ""}
                                  onClick={(event) => {
                                      toggelData(event, "week")
                                  }}>
                                Week
                            </Link>
                            <Link href="#" className={selectedMenu == "month" ? classes.navbarSelected : ""}
                                  onClick={(event) => {
                                      toggelData(event, "month")
                                  }}>
                                Month
                            </Link>
                            <Link href="#" className={selectedMenu == "year" ? classes.navbarSelected : ""}
                                  onClick={(event) => {
                                      toggelData(event, "year")
                                  }}>
                                Year
                            </Link>
                        </Typography>
                        <div>
                            <IconButton
                                ref={anchorRef}
                                aria-controls={menuOpen ? 'menu-list-grow' : undefined}
                                aria-haspopup="true"
                                onClick={handleMenuToggle}
                                style={{
                                    marginLeft: 5
                                }}
                                className={classes.menuIconButtion}
                            >
                                <MoreHorizIcon/>
                            </IconButton>
                            <Popper open={menuOpen} anchorEl={anchorRef.current} role={undefined} transition className={classes.zIndexTop}
                                    disablePortal>
                                {({TransitionProps, placement}) => (
                                    <Grow
                                        {...TransitionProps}
                                        style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                                    >
                                        <Paper>
                                            <ClickAwayListener onClickAway={handleMenuClose}>
                                                <MenuList autoFocusItem={menuOpen} id="menu-list-grow">
                                                    <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                                                    <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                                                    <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
                                                </MenuList>
                                            </ClickAwayListener>
                                        </Paper>
                                    </Grow>
                                )}
                            </Popper>
                        </div>
                    </div>
                </Toolbar>
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableHeader}>Name</TableCell>
                                <TableCell className={classes.tableHeader}>Column-2</TableCell>
                                <TableCell className={classes.tableHeader} align="right">Column-3</TableCell>
                                <TableCell className={classes.tableHeader} align="right">Column-4</TableCell>
                                <TableCell className={classes.tableHeader} align="right">Column-5</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rowData.map((row, index) => (
                                <StyledTableRow key={index}>
                                    <StyledTableCell component="th" scope="row">
                                        <Box display={"flex"}>
                                            <img className={classes.roundedImage} src={row.img}/>
                                            <MultiRowTD first={row.col1} second={"jane.cooper@example.com"}
                                                        marginLeft={2}/>
                                        </Box>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <MultiRowTD first={"Regional Paradigm Technician"} second={"Optimization"}
                                                    marginLeft={0}/>
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="right">{row.col2}</StyledTableCell>
                                    <StyledTableCell
                                        align="right">{row.col3}</StyledTableCell>
                                    <StyledTableCell
                                        align="right">
                                        <IconButton onClick={()=>setCurSelectedUser(index)}>
                                            <CreateIcon color={"primary"}/>
                                        </IconButton>
                                        <RowMoreIcon/>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>

                    </Table>
                    <div style={{textAlign: "right", padding: 10}}>
                        <Pagination count={10} color="primary" style={{display: "inline-block"}}/>
                    </div>
                </TableContainer>
                {curSelectedUser != -1 ?
                    <DialogDetail
                        closeDialog={closeDialog}
                        rowData={rows}
                        selected={curSelectedUser}
                    />
                    : ""}
            </Grid>
        </Grid>
    );
}

export default MyTable;
