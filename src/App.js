import './App.css';
import React, {useState} from 'react';
import MyTable from "./components/table";
import MyForm from "./components/form/formValidate";
import MyTablePagination from './components/table_pagination';
import {makeStyles} from '@material-ui/core/styles';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function App() {
    const [curMode, setCurMode] = useState(1);

    const toggleMode = mode => {
        setCurMode(mode);
        console.log('ccc');
        console.log('eeee');
        console.log('dddd');

    }

    const classes = useStyles();


    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/form">
                        <MyForm/>
                    </Route>
                    <Route path="/table">
                        <MyTable/>
                    </Route>
                    <Route path="/table_pagination">
                        <MyTablePagination/>
                    </Route>
                    <Route path="/">
                        <MyTablePagination/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
