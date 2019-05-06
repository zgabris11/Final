import React from 'react'

function Home() {
    return(
        <>
        <img class="bedimg" src="images/bed.jpg" alt="bed" />
        <div class="info">
            <div class="container">
                <div class="row">
                    <div class="col-sm-4 info-box">
                        <h1>Living Room</h1>
                        <img src="images/livingroom.jpg" alt=""/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fuga temporibus, amet ea harum veniam aspernatur ex consequatur aliquam accusantium tenetur inventore error nulla? Ratione necessitatibus autem pariatur omnis culpa.</p>
                        <a href="#">More..</a>
                    </div>
                    <div class="col-sm-4 info-box">
                        <h1>Office</h1>
                        <img src="images/office.jpg" alt=""/>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis tempore vero quaerat aperiam non aspernatur ab recusandae deleniti enim quas excepturi quibusdam, hic laborum totam ipsam velit soluta alias ducimus.</p>
                        <a href="#">More..</a>
                    </div>
                    <div class="col-sm-4 info-box">
                        <h1>Dinning Room</h1>
                        <img src="images/dinningRoom.jpg" alt=""/>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad labore quaerat nostrum assumenda unde nobis accusamus repudiandae sapiente, culpa fugit quia, asperiores quo voluptate, numquam ullam itaque tempora perspiciatis facere.</p>
                        <a href="#">More..</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="livingroom">
                <div class="row">

                </div>
            </div>
        </div>      
        </>
    )
}

export default Home