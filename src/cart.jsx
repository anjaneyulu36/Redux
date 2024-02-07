import React from "react";
import { connect } from "react-redux";
import './App.css';

function Cart(props) {
    console.log('cartprop', props)

    var total = props.cartitem.reduce((a, b) => {
        return (
            a + (b.price * b.count)
        )
    }, 0)

    return (
        <div className="mt-93    d-flex flex-wrap container">
            <div className="w-50">
                {
                    props.cartitem.map((p, i) => {
                        return (
                            <div className="d-flex flex-wrap rounded  shadow m-3 p-2">
                                <div>
                                    <img src={p.image} alt="" width="150px" height="150px" />
                                </div>
                                <div>
                                    <h6>Title: {p.title}</h6>
                                    <h6>Price: {p.price}</h6>
                                    <button onClick={() => { props.dec(i) }} className="rounded bg-danger">-</button>
                                    <span className="p-2">{p.count}</span>
                                    <button onClick={() => { props.inc(i) }} className="rounded bg-success">+</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <button onClick={() => { props.remove(i) }} className="bg-warning rounded">Remove</button>
                                </div>
                            </div>

                        )
                    })
                }
            </div>
            <div className="m-auto" >
                <div className=" shadow p-3 border border-3 rounded bgm">
                    <h1>Billing Section</h1>
                    <div className="d-flex flex-wrap justify-content-between">
                        <b>Total Items:</b>
                        <b>{props.cartitem.length}</b>
                    </div>
                    <div className="d-flex flex-wrap justify-content-between">
                        <b>Total Price:</b>
                        <b><i class="bi bi-currency-rupee"></i>{total}</b>
                    </div>
                    
                    <button className="form-control rounded bg-warning">Proceed to Buy</button>
                </div>
                <div className="rounded shadow p-3 m-2 border bg-light text-center border-3" >
                    <h3>scan the QR to pay</h3>
                    <img src="QR.jpg" alt="" id="her" />
                </div>
            </div>
        </div>

    )
}
function mapStateToProps(state) {
    return state
}
function mapDispatchToProps(dispatch) {
    return {
        inc: (i) => { dispatch({ type: "INC", index: i }) },

        dec: (i) => { dispatch({ type: "DEC", index: i }) },

        remove: (i) => { dispatch({ type: "REMOVE", index: i }) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)