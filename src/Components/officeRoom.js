import React from 'react'

function Office() {
    return(
        <>
        <div className="product">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="office">
                            <h1 style={{textAlign:"left"}}>Office</h1>
                            <div className="row">
                                <div className="col-sm-4">
                                    <img src="images/officeChair.jpg" alt=""/>
                                    <h2>Swivel Chair</h2>
                                    <ul>
                                        <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum laborum fuga et nostrum labore dolor.</p></li>
                                        <li>250.00</li>
                                        <li><a href="#">Add To Cart</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-4">
                                    <img src="images/table.jpg" alt=""/>
                                    <h2>Holland Desk</h2>
                                    <ul>
                                        <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum laborum fuga et nostrum labore dolor.</p></li>
                                        <li>150.00</li>
                                        <li><a href="#">Add To Cart</a></li>
                                    </ul>
                                </div>
                                <div className="col-sm-4">
                                    <img src="images/officeDesk.jpg" alt=""/>
                                    <h2>Xavier Desk</h2>
                                    <ul>
                                        <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum laborum fuga et nostrum labore dolor.</p></li>
                                        <li>200.00</li>
                                        <li><a href="#">Add To Carts</a></li>
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

export default Office