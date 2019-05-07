import React from 'react'

function Footer() {
    return(
        <>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className=" col-sm-5" >
                        <h2>Need Help?</h2>
                        <hr />
                        <div className="col-sm-6" id="help">
                            <div className="email">
                                <div className="row">
                                    <p><a href="#">Browse Our FAQ</a></p>
                                    <br/>
                                    <p>Send Us An Email!/</p>
                                    <a href="#">comfort@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" col-sm-7">
                        <div className="services">
                            <div className="row">
                                <div className="col-sm-4">
                                    <h3>COMFORT Services</h3>
                                    <ul>
                                        <li>Lorem, ipsum dolor.</li>
                                        <li>Lorem, ipsum dolor.</li>
                                        <li>Lorem, ipsum dolor.</li>
                                        <li>Lorem, ipsum dolor.</li>
                                        <li>Lorem, ipsum dolor.</li>
                                    </ul>
                                </div>
                                <div className="col-sm-4">
                                    <h3>About COMFORT</h3>
                                    <ul>
                                        <li>Lorem, ipsum dolor.</li>
                                        <li>Lorem, ipsum dolor.</li>
                                        <li>Lorem, ipsum dolor.</li>
                                        <li>Lorem, ipsum dolor.</li>
                                        <li>Lorem, ipsum dolor.</li>
                                    </ul>
                                </div>
                                <div className="col-sm-4">
                                    <h3>COMFORT sites</h3>
                                    <ul>
                                        <li>Lorem, ipsum dolor.</li>
                                        <li>Lorem, ipsum dolor.</li>
                                        <li>Lorem, ipsum dolor.</li>
                                        <li>Lorem, ipsum dolor.</li>
                                        <li>Lorem, ipsum dolor.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Footer