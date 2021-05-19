import React from 'react';
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
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import IconButton from "@material-ui/core/IconButton";
import TableHead from '@material-ui/core/TableHead';

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

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const useStyles = makeStyles((theme) => ({
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
        borderRadius: "8px 8px 0px 0px"
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
        flex: "1 1",
        fontSize: 16,
        fontWeight: 500
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
        }
    }

}));

function MyTable() {
    const classes = useStyles();
    const [alignment, setAlignment] = React.useState('left');
    const [selectedMenu, setSelectedMenu] = React.useState("week");
    const [menuOpen, setMenuOpen] = React.useState(false);
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

    return (
        <Grid container>
            <Grid item xs={12}>
                <Toolbar className={classes.toolbar}>
                    <div className={classes.tablecaption}>Caption</div>
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
                        <Popper open={menuOpen} anchorEl={anchorRef.current} role={undefined} transition
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
                </Toolbar>
                <TableContainer component={Paper}>
                    <Table search={true} className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell className={classes.tableHeader}>Column-1</TableCell>
                                <TableCell className={classes.tableHeader} align="right">Column-2</TableCell>
                                <TableCell className={classes.tableHeader} align="right">Column-3</TableCell>
                                <TableCell className={classes.tableHeader} align="right">Column-4</TableCell>
                                <TableCell className={classes.tableHeader} align="right">Column-5</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name + ` (${selectedMenu})`}
                                    </StyledTableCell>
                                    <StyledTableCell
                                        align="right">{row.calories + ` (${selectedMenu})`}</StyledTableCell>
                                    <StyledTableCell
                                        align="right">{row.fat + ` (${selectedMenu})`}</StyledTableCell>
                                    <StyledTableCell
                                        align="right">{row.carbs + ` (${selectedMenu})`}</StyledTableCell>
                                    <StyledTableCell
                                        align="right">{row.protein + ` (${selectedMenu})`}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    );
}

export default MyTable;
