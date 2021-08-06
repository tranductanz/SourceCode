import React, { Component } from 'react';
import GlassItem from './GlassItem';

class GlassList extends Component {



    renderGlasses = () => {
        const glassHTML = this.props.dataGlass.map((item) => {
            return (
                <div key={item.id} className="col-1 ml-4 px-1 py-1">
                    <GlassItem setSelectedProduct={this.props.setSelectedProduct} glassList={this.props.glassList} changeGlass={this.props.changeGlass} item={item} />
                </div>
            )
        })
        return glassHTML;
    }


    render() {
        // console.log(this.props.glassList);
        return (
            <div className="container">
                <div className="row">
                    {this.renderGlasses()}
                </div>
            </div>
        );
    }
}

export default GlassList;