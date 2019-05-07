import React from 'react'

function Dinning() {
    return(
        <>
        <div className="product">
        <div className="container">
            <div className="row">
                <div className="col-sm-12">
                    <div className="dinningRoom">
                        <h1 style={{textAlign:"left"}}>Dinning Room</h1>
                        <div className="row">
                            <div className="col-sm-4">
                                <img src="images/dinningChair.jpg" alt=""/>
                                <h2>Morgan Dining Chair</h2>
                                <ul>
                                    <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum laborum fuga et nostrum labore dolor.</p></li>
                                    <li>250.00</li>
                                    <li><a href="#">Add To Cart</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-4">
                                <img src="images/dinningTable.jpg" alt=""/>
                                <h2>Hesse Dining Table</h2>
                                <ul>
                                    <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum laborum fuga et nostrum labore dolor.</p></li>
                                    <li>150.00</li>
                                    <li><a href="#">Add To Cart</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-4">
                                <img src="images/dinningEmery.jpg" alt=""/>    
                                <h2>Emery Dinning Table</h2>
                                <ul>
                                    <li><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum laborum fuga et nostrum labore dolor.</p></li>
                                    <li>200.00</li>
                                    <li><a href="#">Add To Cart</a></li>
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

export default Dinning