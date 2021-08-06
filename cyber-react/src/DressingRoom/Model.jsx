import React, { Component } from 'react';
import './Model.css';
import { connect } from 'react-redux';
class Model extends Component {
    render() {
        return (
            <div
                style={{
                    background: `url(${this.props.selectedProducts.background})`
                        || "./assets/img/background/background_998.jpg"
                }}
                className="contain">
                <div style={{
                    background: "url(./assets/img/allbody/bodynew.png)"
                }}
                    className="body" />
                <div style={{
                    background: "url(./assets/img/model/1000new.png)"
                }} className="model" />
                <div style={{
                    background: "url(./assets/img/allbody/bikini_branew.png)"
                }} className="bikinitop" />
                <div style={{
                    background: "url(./assets/img/allbody/bikini_pantsnew.png)"
                }}
                    className="bikinibottom" />
                <div style={{
                    background: "url(./assets/img/allbody/feet_high_leftnew.png)"
                }}
                    className="feetleft" />
                <div style={{
                    background: "url(./assets/img/allbody/feet_high_rightnew.png)"
                }} className="feetright" />
                {/* div hiện áo ngoài */}
                <div style={{
                    backgroundImage: `url(${this.props.selectedProducts.topclothes})`,
                    backgroundSize: "cover",
                }} className="bikinitop" />
                {/* div hiện quần ngoài */}
                <div style={{
                    backgroundImage: `url(${this.props.selectedProducts.botclothes})`,
                    backgroundSize: "cover",
                }} className="bikinibottom" />
                {/* div hiện giày */}
                <div style={{
                    backgroundImage: `url(${this.props.selectedProducts.shoes})`,
                    backgroundSize: "cover",
                }} className="bikinibottom" />
                {/* div hiện túi xách */}
                <div style={{
                    backgroundImage: `url(${this.props.selectedProducts.handbags})`,
                    backgroundSize: "cover",
                }} className="bikinibottom" />
                {/* div hiện dây chuyền */}
                <div style={{
                    backgroundImage: `url(${this.props.selectedProducts.necklaces})`,
                    backgroundSize: "cover",
                }} className="bikinibottom" />
                {/* div hiện background*/}


            </div>



        );
    }
}


const mapStateToProps = (state) => {
    return {
        selectedProducts: state.productList.selectedProducts,

    };
}
export default connect(mapStateToProps)(Model);