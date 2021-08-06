import React, { Component } from 'react'
import Product from './Product';
export default class ProductList extends Component {
    render() {
        return (
            <div>
                <h3 className="text-center">Best Smart Phone</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Product />
                        </div>
                        <div className="col-3">
                            <Product />
                        </div>
                        <div className="col-3">
                            <Product />
                        </div>
                        <div className="col-3">
                            <Product />
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}
