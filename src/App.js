import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ListIcon from '@material-ui/icons/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import './App.css'
import Home from './pages/Home'
// import CardList from './card-list/CardList';
import Products from './pages/Products/Products';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const AppRoute = () => {
  console.log("entre");
  return (
    <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/register" element={<Products/>} exact />
        {/* Optional index route if no nested routes match */}
    </Routes>
  );
};

function App() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Router>
        <div className="App">
          <List>
          <ListItem button component="a" href="/">
              <ListItemText primary="Inicio" />
            </ListItem>
            <ListItem button component="a" href="/register">
              <ListItemText primary="Registro de Equipos" />
            </ListItem>
          </List>

        </div>
      </Router>
      <Divider />
    </div>
  );

  return (
    <div className={classes.root}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(anchor, true)}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Alquiler de productos
              </Typography>
            </Toolbar>
          </AppBar>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
          
          <div className="container">
            <Router><AppRoute />
            </Router>
          </div>

        </React.Fragment>
      ))}
    </div>
  );
}
export default App;




