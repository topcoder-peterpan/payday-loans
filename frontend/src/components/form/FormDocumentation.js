import React, { Component } from "react"
import RaisedButton from "material-ui/RaisedButton"
import Dialog from "material-ui/Dialog"
import PrevNextPageButton from "../PrevNextPageButton"
import { connect } from "react-redux"
import { browserHistory as history } from "react-router"

import { updateForm, fetchResponse, submitForm } from "../../action/FormAction"

class FormDocumentation extends Component {
    constructor() {
        super()
        this.state = {
            openDialog: false
        }
    }

    handleSubmit = () => {
        this.props.submitForm(this.props.formdata, history);
        // this.props.fetchResponse().then((res)=>{
        //     history.push("accepted")
        // })
    }

    render() {
        return (
            <div className="form-page">
                <div className="form-title">Submit</div>
                <div className="form-subtitle">Please submit when you are ready</div>
                <PrevNextPageButton prev={4} submit={()=>this.setState({openDialog: true})}/>
                <Dialog
                    open={this.state.openDialog}
                    onRequestClose={()=>this.setState({openDialog:false})}
                >
                    <div>
                        <div className="form-title">Choose Response</div>
                        <div className="dialog-action-container">
                            <RaisedButton secondary={true} label="Cancel" onClick={()=>history.push("rejected")} className="dialog-action"/>
                            <RaisedButton primary={true} label="OK" onClick={()=>this.handleSubmit()} className="dialog-action"/>
                        </div>
                    </div>
                </Dialog>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    formdata: {
        firstName: state.FormReducer.firstName,
        lastName: state.FormReducer.lastName,
        addressCity: state.FormReducer.addressCity,
        state: state.FormReducer.state,
        zipCode: state.FormReducer.zipCode,
        email: state.FormReducer.email,
        homePhone: state.FormReducer.homePhone,
        workPhone: state.FormReducer.workPhone,
        bestTimeToCall: state.FormReducer.bestTimeToCall,
        ssn: state.FormReducer.ssn,
        birthDate: state.FormReducer.birthDate,
        employerName: state.FormReducer.employerName,
        jobTitle: state.FormReducer.jobTitle,
        supervisorName: state.FormReducer.supervisorName,
        supervisorPhone: state.FormReducer.supervisorPhone,
        employerCity: state.FormReducer.employerCity,
        driversLicenseNumber: state.FormReducer.driversLicenseNumber,
        driversLicenseState: state.FormReducer.driversLicenseState,
        requestedAmount: state.FormReducer.requestedAmount,
        incomeType: state.FormReducer.incomeType,
        payFrequency: state.FormReducer.payFrequency,
        monthlyIncome: state.FormReducer.monthlyIncome,
        bankName: state.FormReducer.bankName,
        bankPhone: state.FormReducer.bankPhone,
        bankABA: state.FormReducer.bankABA,
        bankAccountNumber: state.FormReducer.bankAccountNumber,
        bankAccountType: state.FormReducer.bankAccountType,  
    }  
})

const mapDispatchToProps = (dispatch) => ({
    updateForm: (stateType, value) => dispatch(updateForm(stateType, value)),
    fetchResponse: () => dispatch(fetchResponse()),
    submitForm: (data, history) => dispatch(submitForm(data, history)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormDocumentation)