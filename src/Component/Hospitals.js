import React, { Component } from 'react'
import HospitalList from './HospitalList'
export default class Hospitals extends Component {
    render() {
        return (
            <>
            <div className="container my-3">
                <h2 className="center" style={{ color: "white" , textDecorationLine: 'underline'}}>Hospitals Available</h2>
                <br></br>
                    <div className="row">
                        <div className="col-md-4">
                            <HospitalList HospitalName="City Hospital" BedsAvail="18" VentilatorsAvail="06" IcuAvail="02" />
                        </div>
                        <div className="col-md-4">
                            <HospitalList HospitalName="City Hospital" BedsAvail="18" VentilatorsAvail="06" IcuAvail="02"/>
                        </div>
                        <div className="col-md-4">
                            <HospitalList HospitalName="City Hospital" BedsAvail="18" VentilatorsAvail="06" IcuAvail="02"/>
                        </div>
                    </div>
            </div>
            </>
        )
    }
}