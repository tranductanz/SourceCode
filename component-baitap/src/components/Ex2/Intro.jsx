import React, { Component } from 'react';

class Intro extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                            <h1>What We Do</h1>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum laborum consequuntur iste odit
                                doloribus fugiat,
                                qui repellendus tenetur unde ex ad laudantium quibusdam. Atque, voluptatem doloribus eaque
                                consequatur
                                praesentium blanditiis?</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum laborum consequuntur iste odit
                                doloribus fugiat,
                                qui repellendus tenetur unde ex ad laudantium quibusdam. Atque, voluptatem doloribus eaque
                                consequatur
                                praesentium blanditiis?</p>
                        </div>
                        <div className="col-sm-4">
                            <h1>Contact US</h1>
                            <p>CyberSoft</p>
                            <p>Su Van Hanh, quận 10, Tp.HCM</p>
                            <p>website: cybersoft.edu.vn</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            {/* item */}
                            <div className="card" style={{ width: '18rem' }}>
                                <img className="card-img-top" src="https://picsum.photos/200/300" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            {/* item */}
                            <div className="card" style={{ width: '18rem' }}>
                                <img className="card-img-top" src="https://picsum.photos/200/300" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            {/* item */}
                            <div className="card" style={{ width: '18rem' }}>
                                <img className="card-img-top" src="https://picsum.photos/200/300" alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of
                                        the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default Intro;