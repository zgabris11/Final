import React, {Component} from 'react'
import ProductTile from './productTile'

class Products extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        fetch('http://localhost:8000/api/product')
        .then(response => response.json())
        .then(responseData => {
            this.setState({
                products: responseData
            })
        })
    }
    render() {
        let livingRoom = []
        let dinningRoom = []
        let office = []
        this.state.products.map(product => {
            switch (product.category) {
                case 'living':
                    livingRoom.push(<ProductTile {...product} />)
                    break;                    
                case 'dinning':
                    dinningRoom.push(<ProductTile {...product} />)
                    break;
                case 'office':
                    office.push(<ProductTile {...product} />)
                    break;            
                default:
                    break;
            }
        })
        return(
            <>
            <div className="product">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="livingRoom">
                                        <h1 style={{textAlign: 'left'}}>Living Room</h1>
                                        <div className="row">
                                            {livingRoom}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="dinningRoom">
                                        <h1 style={{textAlign:"left"}}>Dinning Room</h1>
                                        <div className="row">
                                            {dinningRoom}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="office">
                                        <h1 style={{textAlign:"left"}}>Office</h1>
                                        <div className="row">
                                            {office}
                                        </div>
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
}

export default Products