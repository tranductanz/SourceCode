import React, { Component } from 'react';
//import từ store
import { connect } from 'react-redux';

class Category extends Component {

    handleSelectCategory = (categoryType) => {
        //function đẩy action lên store
        //chỉ khi connect components lên store mới có
        //action là 1 ObJect
        this.props.dispatch({
            //mô tả hành động, có thể tự đặt tên
            type: "SET_SELECTED_CATEGORY",
            //action lên store có gửi kèm dữ liệu lên ko
            payload: categoryType,
        })
    }


    renderCategories = () => {
        return this.props.categories.map((item) => {
            return (
                <button
                    onClick={() => this.handleSelectCategory(item.type)}
                    key={item.type}
                    className={item.type === this.props.selectedCategory
                        ? "btn btn-success"
                        : "btn btn-secondary"}
                >
                    {item.showName}
                </button>
            );
        });
    };



    render() {
        return (
            <div className="btn-group container-fluid mb-4">
                {this.renderCategories()}
            </div>


        );
    }
}

//cái state là toàn bộ dữ liệu trên store đang có
const mapStateToProps = (state) => {
    //todo state.category.categoryList là trong F12 Redux
    //lấy dữ liệu từ store đó và chuyển thành "categories"
    return {
        categories: state.category.categoryList,
        selectedCategory: state.category.selectedCategory,
    }
}

//gọi hàm connect chạy, return về function, gọi tiếp hàm chạy
export default connect(mapStateToProps)(Category);