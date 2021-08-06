import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <div className="text-center">
                    <div className="container p-4 pb-0">
                        {/* Section: Social media */}
                        <div className="copyright text-center p-3">
                            <p className="text-dark" href="#">
                                © All Rights Reserved | Design by
                                <span>Tân Tân</span>
                            </p>
                        </div>
                        <div className="mb-4">
                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="https://www.facebook.com/" role="button"><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee' }} href="https://twitter.com/?lang=vi" role="button"><i className="fab fa-twitter" /></a>
                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} href="https://www.google.com/" role="button"><i className="fab fa-google" /></a>
                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="https://www.instagram.com/" role="button"><i className="fab fa-instagram" /></a>
                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="https://www.linkedin.com/" role="button"><i className="fab fa-linkedin-in" /></a>
                            <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#333333' }} href="https://github.com/" role="button"><i className="fab fa-github" /></a>
                        </div>
                    </div>
                </div>



            </div>
        )
    }
}


