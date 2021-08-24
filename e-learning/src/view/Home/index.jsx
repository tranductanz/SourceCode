import React, { Component } from 'react';
import Header from '../../components/Header';
import { Box, Container, Grid, Typography } from "@material-ui/core";
import CourseItem from '../../components/CourseItem';
import { connect } from 'react-redux';
import { fetchCourses } from '../../store/actions/course';
import Layout from '../../HOCs/Layout';
class Home extends Component {
    render() {
        return (
            <Layout>
                {/* khi render, component là gì thì nó render ra thẻ HTML đó */}
                <Typography align="center" variant="h6" >Danh sách khoá học</Typography>
                <Container maxWidth="lg">
                    {/* cho ra 1 cái div, có chiều rộng 1280 */}
                    {/* mặc định là 8 pixel 8x2 = 16px spacing */}
                    <Grid container spacing={3}>
                        {this.props.courses.map((item) => {
                            return (
                                <Grid key={item.maKhoaHoc} item xs={12} sm={6} md={3}>
                                    <CourseItem item={item} />
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Layout>



        );
    }
    //! NƠI TỐT NHẤT ĐỂ CALL API, NÓ SẼ CHẠY SAU RENDER
    //todo async await : biến asynchronous thành synchornus
    async componentDidMount() {
        //! KHÔNG CALL API Ở ĐÂY NỮA
        //! MÀ CALL Ở MIDDLEWARE
        //! import "fetchCourse" bên actions courses.js
        this.props.dispatch(fetchCourses)
        // .then(res => {
        //     this.props.dispatch({
        //         type: "SET_COURSES",
        //         payload: res.data,
        //     })
        // })
        // .catch(err => {
        //     console.log(err);
        // })

    }

}

const mapStateToProps = (state) => {
    return {
        courses: state.course.courses,
    }
}
export default connect(mapStateToProps)(Home);