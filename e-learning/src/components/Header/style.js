//!
import { Theme } from "@material-ui/core";

const styles = (theme) => {
    return {
        '@global': {
            body: {
                backgroundColor: "#ffffff"
            },
        },
        /* TOOLBAR LÀ FLEX-BOX THÌ CSS FLEX-GROW SẼ ĐẨY MENU QUA PHẢI */
        title: {
            flexGrow: 1,
            animation: "$Fade 0.5s infinite"
        },
        navLink: {
            color: "white",
            marginLeft: 20,
            opacity: 0.75,
            textDecoration: "none",
            //todo rê chuột phát sáng
            "&:hover": {
                opacity: 1,
            },
            //! RESPONSIVE
            //max-with: 1280px
            [theme.breakpoints.down('md')]: {
                fontSize: 70,
            },
            //max-width: 960px
            [theme.breakpoints.down('sm')]: {
                fontSize: 50
            },
            //max-width: 600px
            [theme.breakpoints.down('xs')]: {
                fontSize: 20,
            },



        },
        active: {
            opacity: 1
        },
        //todo ANIMATION
        '@keyframes Fade': {
            from: {
                opacity: 0,
            },
            to: {
                opacity: 1,
            }
        },
    }
}
export default styles;



/* TOOLBAR LÀ FLEX-BOX THÌ CSS FLEX-GROW SẼ ĐẨY MENU QUA PHẢI */
// .title{
//     flex-grow: 1;
// }

// .nav-link {
//     color: white;
//     margin-left: 20px;
//     opacity: 0.75;
//     text-decoration: none;
// }
// .active{
//     opacity: 1;
// }