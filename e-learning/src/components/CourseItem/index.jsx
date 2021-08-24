import React, { Component } from 'react';
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    withStyles,
} from '@material-ui/core'
import styles from './style';
import { NavLink } from 'react-router-dom';

class CourseItem extends Component {

    render() {
        const { hinhAnh, tenKhoaHoc, moTa, maKhoaHoc } = this.props.item;
        const { img, title, button } = this.props.classes;
        return (
            <Card >
                <CardActionArea>
                    <CardMedia
                        className={img}
                        image={hinhAnh}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography
                            //! chỉnh chiều cao title
                            className={title}
                            gutterBottom variant="h5" component="h2">
                            {tenKhoaHoc}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {moTa.substr(0, 100) + "..."}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <NavLink
                        className={button}
                        to={"/detail/" + maKhoaHoc}>
                        <Button size="small" color="primary">
                            Chi tiết
                        </Button>
                    </NavLink>

                </CardActions>
            </Card>
        );
    }
}

export default withStyles(styles, { withTheme: true })(CourseItem);