import React from 'react'

function Living() {
    return(
        <>
        <div className="product">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="livingRoom">
                            <h1 style={{textAlign: 'left'}}>Living Room</h1>
                            <div className="row">
                                <div className="col-sm-4 couch">
                                    
                                    <img src="images/couch.jpg" alt="" />
                                    <h2>Grey Couch</h2>
                                    <ul>
                                        <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum laborum fuga et nostrum labore dolor.</p></li>
                                        <li>250.00</li>
                                        <li><a href="#">View</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-4">
                                    <img src="images/chair.jpg" alt=""/>
                                    <h2>Grey Chair</h2>
                                    <ul>
                                        <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum laborum fuga et nostrum labore dolor.</p></li>
                                        <li>150.00</li>
                                        <li><a href="#">View</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-4">
                                    <img src="images/table.jpg" alt=""/>
                                    <h2>Coffee Table</h2>
                                    <ul>
                                        <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum laborum fuga et nostrum labore dolor.</p></li>
                                        <li>200.00</li>
                                        <li><a href="#">View</a></li>
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

export default Living