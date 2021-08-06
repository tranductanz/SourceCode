import React, { Component } from 'react';
import GlassList from './GlassList';
import model from '../assets/img/model.jpg'
import './Home.css'
import Detail from './Detail';
class Home extends Component {

    arrProduct = [
        { id: 1, price: 30, name: 'GUCCI G8850U', url: './assets/img/v1.png', desc: 'Light pink square lenses define these sunglasses, amother of pearl effect tip.' },
        { id: 2, price: 50, name: 'GUCCI G8759H', url: './assets/img/v2.png', desc: 'Light pink square lenses define these sunglasses, amother of pearl effect tip.' },
        { id: 3, price: 30, name: 'DIOR D6700HQ', url: './assets/img/v3.png', desc: 'Light pink square lenses define these sunglasses, amother of pearl effect tip.' },
        { id: 4, price: 30, name: 'DIOR D6005U', url: './assets/img/v4.png', desc: 'Light pink square lenses define these sunglasses, amother of pearl effect tip.' },
        { id: 5, price: 30, name: 'PRADA P8750', url: './assets/img/v5.png', desc: 'Light pink square lenses define these sunglasses, amother of pearl effect tip.' },
        { id: 6, price: 30, name: 'PRADA P9700', url: './assets/img/v6.png', desc: 'Light pink square lenses define these sunglasses, amother of pearl effect tip.' },
        { id: 7, price: 30, name: 'FENDI F8750', url: './assets/img/v7.png', desc: 'Light pink square lenses define these sunglasses, amother of pearl effect tip.' },
        { id: 8, price: 30, name: 'FENDI F8500', url: './assets/img/v8.png', desc: 'Light pink square lenses define these sunglasses, amother of pearl effect tip.' },
        { id: 9, price: 30, name: 'FENDI F4300', url: './assets/img/v9.png', desc: 'Light pink square lenses define these sunglasses, amother of pearl effect tip.' }
    ];



    constructor(props) {
        super(props);
        this.state = {
            selectedProduct: null,
            glassList: [],
        }
    }

    // changeGlassModel = (value) => {
    //     const cloneGlass = [...this.state.glassList];

    //     const foundIndex = cloneGlass.findIndex((item) => {
    //         return item.selectedGlass.id === value.id;
    //     })
    //     console.log(foundIndex);
    //     const glassItem = {
    //         selectedGlass: value,
    //         isChoose: true,
    //     }
    //     cloneGlass.push(glassItem);
    //     this.setState({
    //         glassList: cloneGlass
    //     })
    // }

    setSelectedProduct = (val) => {
        this.setState({
            selectedProduct: val,
        });
    };


    selectedGlass = () => {
        const cloneGlass = [...this.state.glassList];
        const foundIndex = cloneGlass.findIndex((item) => {
            return item;
        })
        console.log(foundIndex);
        const selectedGlass = this.state.glassList.map((item) => {
            return item.selectedGlass
        })
        return selectedGlass;


    }

    render() {
        return (
            <div className="background">
                <div className="changeModel text-center lead position-relative" >
                    <h1 className="text-primary">TRY GLASSES APP ONLINE</h1>
                    <img className="" style={{ height: 250 }, { width: 350 }} src={model} alt="model" />
                    <div className="changePic mt-5">

                        <GlassList setSelectedProduct={this.setSelectedProduct} glassList={this.state.glassList} dataGlass={this.arrProduct} data={this.state.dataList} />
                        {this.state.selectedProduct && (
                            <Detail selectedProduct={this.state.selectedProduct} />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;