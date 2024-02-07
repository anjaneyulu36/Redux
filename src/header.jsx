import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import { connect } from "react-redux";


function Header(props) {
    return (
        <div className="fixed-top">
            <h1 className='bg-warning bg-gradient m-0'>Welcome to Edupoly Market</h1>

            <nav className="navbar navbar-expand-lg navbar-light bg-info ">

                <div className="collapse navbar-collapse d-flex flex-wrap justify-content-around" id="navbarSupportedContent ">

                    <div><Link className="td" to='/'>HOME</Link></div>
                    <div>CONTACT </div>
                    <div>ABOUT US</div>
                    <div>
                        <input className="rounded " placeholder="Search..." type="text" name="" id="" />
                    </div>
                    <div className="position-relative">
                        <Link to='/cart' className="text-black ">CART<i className="bi bi-cart4 fs-3"></i><span className="position-absolute top-0 right-0 bg-danger rounded-circle p-1 text-white">{props.cartitem.length}</span></Link>
                    </div>

                </div>
            </nav>
        </div>
    )
}
export default connect(store=>store)(Header)