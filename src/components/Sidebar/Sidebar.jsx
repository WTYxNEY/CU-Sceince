import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Avatar from '@material-ui/core/Avatar';
import { manage, centralManage, minorManage } from './SidebarItems/SidebarItems'
import SettingsIcon from '@material-ui/icons/Settings';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import './Sidebar.css'
import ManagementSystem from '../ManagementSystem/ManagementSystem'
import Course from '../Course/Course'
import Department from '../Department/Department'
import Mission from '../Mission/Mission'
import Budget from '../Budget/Budget'
import Accordion from '../Accordion/Accordion'


const drawerWidth = 323;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
        minHeight: '70px',
        backgroundColor: '#ffffff',
        color: '#000000'
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },

    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: '#343A40',
        height: "100vh"
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export default function Sidebar() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(!open);
    };
    const openMenuHandler = (e) => {
        e.preventDefault()
        setOpenMenu(!openMenu);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar elevation={0} position="absolute"
             className={clsx(classes.appBar, open && classes.appBarShift)}
             style={{zIndex:1}}
             >
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color=""
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton)}
                    >
                        <MenuRoundedIcon style={{ fontSize: 40, color: 'black' }} />
                    </IconButton>
                    <Typography color="primary" noWrap className={classes.title}>
                        <div className='inline-title'>
                            <h1 className="title-1"> CU</h1><h1 className="title-2">Science</h1>
                        </div>
                    </Typography>
                    <Typography className={classes.userContent}>
                        <div className='user-profile'>

                            <Avatar className='user-profile-img' alt="Demo User" src="" />

                            <div className="user-profile-text">
                                <h5>Carter Calzoni</h5>
                                <h6>จัดการระบบ / ผู้ดูแลระบบ</h6>
                            </div>

                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>


            <Router>
                <Drawer
                    style={{ border: '1px solid red', zIndex: 0 }}
                    variant='persistent'
                    classes={{
                        paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                    }}
                    open={open}
                >

                    <ul className='sidebar-list'>

                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <div className='sidebar-item'
                                id={window.location.pathname == manage.link ? 'active' : ''}
                                onClick={() => window.location.pathname = manage.link}
                            >

                                <div className="sidebar-title-detail">
                                    <SettingsIcon />{" "}<p>{manage.title}</p>
                                </div>

                            </div>
                        </Link>

                        <div className='sidebar-title'>
                            <h6> {centralManage.title}</h6>
                        </div>

                        {centralManage.content.map((val, key) => {
                            return (
                                <>
                                    <Link to={val.link} style={{ textDecoration: 'none' }}>
                                        <li
                                            key={key}
                                            id={window.location.pathname == val.link ? 'active' : ''}
                                            className='sidebar-item'
                                            onClick={() => window.location.pathname = val.link}
                                        >

                                            <div className="sidebar-title-detail">
                                                <SettingsIcon />{' '}
                                                <p>
                                                    {val.contentTitle}
                                                </p>
                                            </div>

                                        </li>
                                    </Link>

                                </>
                            )
                        })}

                        <div className='sidebar-title'>
                            <h6> {minorManage.title}</h6>
                        </div>

                        {minorManage.content.map((val, key) => {
                            return (
                                <>
                                    <li
                                        key={key}
                                        // id={window.location.pathname == val.link ? 'active' : ''}
                                        className='sidebar-item'
                                    // onClick={() => window.location.pathname = val.link}
                                    >
                                        <div className="sidebar-title-detail">
                                            <SettingsIcon />{' '}
                                            <p>{val.contentTitle}</p>
                                        </div>
                                    </li>
                                </>
                            )
                        })}

                    </ul>
                </Drawer>


                <div className="content" style={{ backgroundColor: '#F5F5F5' }}>
                    <Switch>
                        <Route path="/" exact component={ManagementSystem} />
                        <Route path="/course" component={Course} />
                        <Route path="/department" component={Department} />
                        <Route path="/mission" component={Mission} />
                        <Route path="/budget" component={Budget} />
                    </Switch>
                </div>

            </Router>
        </div>
    );
}