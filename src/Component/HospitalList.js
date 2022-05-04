import React, { Component } from 'react'

export default class HospitalList extends Component {
    render() {
        let {HospitalName , BedsAvail , VentilatorsAvail ,IcuAvail} = this.props;
        return (
            <div className="card text-center" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{HospitalName}</h5>
                <div className="card-text">Beds Available = {BedsAvail}</div>
                <div className="card-text">Ventilators Available = {VentilatorsAvail}</div>
                <div className="card-text">ICU's Available = {IcuAvail}</div>
            </div>
                <a href="/" className="btn btn-primary">Book Now</a>
            </div>
    )
        }
}