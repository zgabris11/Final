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
        fetch('http://localhost:8000/api/product/name/' + this.props.match.params.category)
        .then(response => response.json())
        .then(responseData => {
            this.setState({
                products: responseData
            })
        })
    }
    render() {
        let category = this.state.products.map(product => {
            return <ProductTile {...product} />
        })
        let categoryName = ''
        switch (this.props.match.params.category) {
            case 'living':
                categoryName = 'Living Room'
                break;
            case 'office':
                categoryName = 'Office'
                break;
            case 'dinning':
                categoryName = 'Dinning Room'
                break;
            default:
                break;
        }
        return(
            <>
            <div className="product">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="livingRoom">
                                        <h1 style={{textAlign: 'left'}}>{categoryName}</h1>
                                        <div className="row">
                                            {category}
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