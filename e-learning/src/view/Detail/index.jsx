import React, { Component } from 'react';
import Header from '../../components/Header';
import { fetchCourse } from '../../store/actions/course';
import { connect } from 'react-redux'
import { Box, Container, Typography } from '@material-ui/core';
import Layout from '../../HOCs/Layout';
class Detail extends Component {

    render() {
        // console.log(this.props.courseDetail);
        return (
            <div>
                <Layout>
                    <Typography
                        style={{ fontWeight: 700 }}
                        variant="h2"
                        align="center">Detail</Typography>

                    {this.props.courseDetail.map((item, index) => {
                        return (
                            <Container key={index}>
                                <img
                                    style={{ display: "block" }}
                                    src={item.hinhAnh} alt="Hình ảnh"
                                />
                                <Typography
                                    style={{ display: "inline", marginRight: 30 }}
                                    color="error"
                                    variant="h4">Môn học</Typography>
                                <Typography
                                    style={{ display: "inline" }}
                                    variant="h3">

                                    {item.tenKhoaHoc}
                                </Typography>
                                <Typography variant="h5">
                                    {item.moTa}
                                </Typography>
                                <Typography
                                    style={{ display: "inline", marginRight: 30 }}
                                    color="error"
                                    variant="h4">Người tạo</Typography>
                                <Typography
                                    style={{ display: "inline" }}
                                    variant="h3">
                                    {item.nguoiTao.hoTen}
                                </Typography>

                            </Container>
                        )
                    })
                    }
                </Layout>


            </div>
        );
    }

    componentDidMount() {
        // 1. lấy params ID từ trên đường dẫn xuống
        // 2. call api lấy chi tiết khoá học
        //! cách lấy mã từ URL xuống
        //todo chỉ có Component được set "ROUTE" mới có match
        const courseId = this.props.match.params.id;
        // console.log(this.props.match);

        // 2. dispatch async action fetchCourse lên middleware
        this.props.dispatch(fetchCourse(courseId));
    }
}

const mapStateToProps = (state) => {
    return {
        courseDetail: state.courseDetail.courseDetail,
    }
}
export default connect(mapStateToProps)(Detail);