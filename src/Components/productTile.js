import React from 'react'

function ProductTile(props) {
    return (
        <div className="col-sm-4 couch">                           
            <img src={`/images/${props.img}`} alt="" />
            <h2>{props.name}</h2>
            <ul>
                <li><p>{props.description}</p></li>
                <li>${props.price}</li>
                <li><a href={`/product/${props.id}`}>Add To Cart</a></li>
            </ul>
        </div>
    )
}

export default ProductTile