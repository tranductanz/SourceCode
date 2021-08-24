//! HIGH ORDER COMPONENT

import { Box, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import Header from '../../components/Header';

class Layout extends Component {
    render() {
        return (
            // {/* //todo giới thiệu BOX component */ }
            // {/* //! có rất nhiều props để chỉnh CSS */ }
            <Box bgcolor="#cece">
                <Header />

                {/* //? KẾ THỪA */}
                {/* NỘI DUNG ở giữa component Layout bên HOME */}
                {this.props.children}

                {/* //! FOOTER */}
                <Box
                    marginTop="30px"
                    paddingY="20px"
                    bgcolor="#000000"
                    color="#ffffff"
                    textAlign="center">
                    <Typography variant="h5" align="center">
                        Footer
                    </Typography>
                </Box>
            </Box>
        );
    }
}

export default Layout;