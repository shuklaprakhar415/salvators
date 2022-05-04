import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        
        return (
            <nav className="navbar navbar-dark bg-dark" style={{ backgroundColor: "#e3f2fd" }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href='/'>The Slavators</a>
                    <form className="d-flex">
                        <button className="btn btn-light" data-bs-toggle="button">Admin Login</button>
                    </form>
                </div>
            </nav>
        )
    }
}