// import thư viện sử dụng
import React from 'react';
import './header.css';

//mã ccs


class Header extends React.Component {
    render() {
        return (
            //thẻ return chỉ bọc trong 1 div duy nhất
            <div className="header">
                <h1>Logo</h1>
                <nav>
                    <a>Home</a>
                    <a>About</a>
                </nav>
            </div>
        )
    }
}

export default Header;
