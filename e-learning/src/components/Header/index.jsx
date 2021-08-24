import React, { Component, Fragment } from 'react';
// để chuyển trang cần import
import { NavLink } from 'react-router-dom'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    withStyles,
    Button,
} from "@material-ui/core"
import ImportContactsIcon from '@material-ui/icons/ImportContacts';
import styles from './style.js';
import { connect } from 'react-redux';
class Header extends Component {
    render() {

        //todo bỏ vào withStyles mới có
        const { title, navLink, active } = this.props.classes;
        return (
            <AppBar position="static">
                {/* TOOLBAR LÀ FLEX-BOX THÌ CSS FLEX-GROW SẼ ĐẨY MENU QUA PHẢI */}
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <ImportContactsIcon />
                    </IconButton>
                    <Typography className={title} variant="h6" >
                        E-learning
                    </Typography>
                    <NavLink className={navLink} exact activeClassName={active} to="/">
                        Home</NavLink>

                    {/* //! Check COMPONENTS */}
                    {/* //! Bổ sung mới*/}
                    {
                        this.props.me ? <Button
                            //! Kế thừa lại color
                            color="inherit">
                            Hello, {this.props.me.hoTen}
                            {/* //! Fragment là components có sẵn */}
                            {/* //! dùng để bọc như 1 div lớn, nhưng không xuất hiện trên giao diện */}
                        </Button> : <Fragment>
                            <NavLink className={navLink} activeClassName={active} to="/signin">
                                Sign In</NavLink>
                            <NavLink className={navLink} activeClassName={active} to="/signup">
                                Sign up</NavLink>
                        </Fragment>
                    }


                </Toolbar>
            </AppBar>
            //    khi nhấn vô sẽ active


        );
    }
}
//! bên jss truyền params "theme"
const mapStateToProps = (state) => {
    return {
        me: state.me,
    }
}
export default connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Header));