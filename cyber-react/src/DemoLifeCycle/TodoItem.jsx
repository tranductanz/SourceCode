import React, { Component, PureComponent } from 'react';

//! PureComponent sẽ viết sẵn shouldComponentUpdate
class TodoItem extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
        }
    }
    //! chỉ cần tất cả state thay đổi, thì sẽ render lại
    //todo PureComponent đã viết sẵn hàm dưới
    shouldComponentUpdate(nextProps, nextState) {
        // console.log(nextProps);
        //nếu counter 2 thay đổi, thì mới cần render lại
        // vì counter2 nằm ở trong TodoItem
        if (this.props.counter2 !== nextProps.counter2 ||
            this.state.isSelected !== nextState.isSelected
        ) {
            return true;
        }
        return false;
    }

    handleSelect = () => {
        this.setState({
            isSelected: !this.state.isSelected,
        })
    }


    render() {
        console.log("item render");
        return (
            <div
                className={this.state.isSelected ? "bg-success" : "bg-white"}
                onClick={this.handleSelect}>
                <h2>{this.props.item.name}</h2>
            </div>
        );
    }
}

export default TodoItem;