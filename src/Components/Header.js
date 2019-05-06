import React from 'react'


function Header() {
    return(
        <>
        <div class="top-header">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 nav-bar">
                        <ul>
                            <li><img src="images/comfort.PNG" alt="comfort" style="width: 110px; height: 100px"/></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="products.html">Product</a></li>
                        </ul>
                    </div>
                    <div class="col-xs-4 col-sm-4">
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