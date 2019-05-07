import React from 'react'


function Header() {
    return(
        <>
        <div className="top-header">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 nav-bar">
                        <ul>
                            <li><img src="images/comfort.PNG" alt="comfort" style={{width: '110px', height: '100px'}} /></li>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/products">Product</a></li>
                        </ul>
                    </div>
                    <div className="col-xs-4 col-sm-4">
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">(555)-444-2345</a></li>
                            <li><a href="#">Sign Up</a>/<a href="#">Login</a></li>
                        </ul>
                        <input type="text" placeholder="Search.." />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}  
export default Header  