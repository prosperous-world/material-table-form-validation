import './App.css';
import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import MyTable from "./components/table";
import MyForm from "./components/form/formValidate";
import { makeStyles } from '@material-ui/core/styles';

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
    }


    const classes = useStyles();

    return (
        <div className="App">
            <div className={classes.root}>
                <Button variant="contained" color="primary" onClick={() => toggleMode(1)}>
                    Form
                </Button>
                <Button variant="contained" color="primary" onClick={() => toggleMode(2)}>
                    Table
                </Button>
            </div>
            {curMode == 1 ?
                <MyForm/>
                :
                <MyTable/>
            }
        </div>
    );


}

export default App;
