import React, {Component} from 'react'

class Single extends Component {
    constructor() {
        super()
        this.state = {
            product: {
                id:'',
                name:'',
                description:'',
                price:'',
                img:'',
                category:''
            }
        }
    }
    componentDidMount() {
        fetch('http://localhost:8000/api/product/' + this.props.match.params.id)
        .then(response => response.json())
        .then(responseData => {
            this.setState({
                product: responseData[0]
            })
        })
    }
    render() {
        let product = this.state.product;
        return(
            <div className="product">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="livingRoom">
                                <div className="row">
                                    <div className="col-sm-6 couch">
                                        <h1>{product.name}</h1>
                                        <img src={`/images/${product.img}`} alt="" />
                                        <ul>
                                            <li><p>{product.description}</p></li>
                                            <li>${product.price}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Single