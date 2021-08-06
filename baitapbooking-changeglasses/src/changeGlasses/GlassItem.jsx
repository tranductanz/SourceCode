import React, { Component } from 'react';

class GlassItem extends Component {
    render() {
        return (
            <div>
                <div className="text-center">
                    <button className="btn btn-primary" onClick={() => this.props.setSelectedProduct(this.props.item)}>
                        <img className="w-100 px-1 py-1" src={this.props.item.url} alt="Mắt Kính" />
                    </button>
                </div>

            </div>
        );
    }
}

export default GlassItem;