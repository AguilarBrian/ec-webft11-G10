import React from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import List from '@material-ui/core/List';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStyles } from './styles'
import { Link } from 'react-router-dom';
import { SearchBar } from './searchBar/SearchBar';
import { useSelector } from "react-redux";
import  Cart  from '../Product/cart/Cart';

export default function PersistentDrawerLeft() {
  
    const cart = useSelector(state => state.userReducer.cart)

    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Button variant="h6" color='inherit' to="/Home" component={Link}>
                        FastFoodBest! or whatever
                    </Button>
                    <Cart  />
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <SearchBar />
                    </div>
                    <div className={classes.grow} />
                    <div  className={classes.sectionDesktop}>
                        <IconButton to="/cart" component={Link}
                            aria-label="" color="inherit">

                            <Badge badgeContent={cart.length} color="secondary">
                                <ShoppingCartIcon fontSize="large" />
                            </Badge>

                        </IconButton>
                    </div>
                    <div className={classes.sectionDesktop}>
                        <IconButton color="inherit">
                            <Badge color="secondary">
                                <AccountCircleIcon fontSize="large" />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="left"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List >
                    <ListItem button to="/adminProduct" component={Link}>
                        <ListItemText className={classes.barOptions} primary="Admin Productos" />
                    </ListItem>
                    <ListItem button to="/CreateProduct" component={Link}>
                        <ListItemText className={classes.barOptions} primary="Crear Productos" />
                    </ListItem>
                    <ListItem button to="/adminCategories" component={Link}>
                        <ListItemText className={classes.barOptions} primary="Administrar Categorias" />
                    </ListItem>
                    <ListItem button to="/PageCheckoutOrders" component={Link}>
                        <ListItemText className={classes.barOptions} primary="Ver Ordenes" />
                    </ListItem>
                </List>
                <Divider />

            </Drawer>
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader} />

            </main>
        </div>
    );
}