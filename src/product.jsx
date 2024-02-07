import './App.css';
import axios from "axios";
import { connect } from "react-redux";
import React, { useState } from "react";

function Products(props) {
    console.log(props);
   

    // let [products, setproducts] = React.useState([])
    // React.useEffect(() => {
    //     axios.get("https://fakestoreapi.com/products").then((res) => {
    //         setproducts(res.data)
    //     })
    // }, [])

    return (
        <div className="mt-93">
            <ul className="d-flex flex-wrap justify-content-around ">
                {
                    props.allproducts.map((product, ind) => {
                        return (
                            <li className="text-center shadow p-3 m-3 rounded border-3 border cls">
                                <img src={product.image} alt="" width="150px" height="150px" />
                                <h6>Title: {product.title}</h6>
                                <div>Catogery: {product.category}</div>
                                <b className="d-flex flex-wrap justify-content-between p-2">
                                    <div>Rating: {product.rating.rate}</div>
                                    <div>Price:<i class="bi bi-currency-rupee"></i> {product.price} INR...</div>
                                </b>
                                <button className="btn btn-warning" onClick={() => {props.additem(product,ind)}}>Add to Cart</button>
                            </li>

                        )
                    })
                }
            </ul>
        </div>
    )

}
function mapStateToProps(state) {
    return state
}
function mapDispatchToProps(dispatch) {
    return {
        additem:(product,ind)=>{dispatch({type:"ADDCART",payload:product,index:ind})}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products);