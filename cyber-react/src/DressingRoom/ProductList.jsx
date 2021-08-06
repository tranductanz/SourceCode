import React, { Component } from 'react';
import ProductItem from './ProductItem';

import { connect } from 'react-redux';

class ProductList extends Component {

    renderProductList = () => {
        return this.props.productList
            .filter((item) => {
                return item.type === this.props.selectedCategory;
            })
            .map((item) => {
                return (
                    <div key={item.id} className="col-4">
                        <ProductItem item={item} />
                    </div>
                )
            })
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    {this.renderProductList()}
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        productList: state.productList.productList,
        selectedCategory: state.category.selectedCategory,
        selectedProducts: state.productList.selectedProducts,
    }
}

export default connect(mapStateToProps)(ProductList);