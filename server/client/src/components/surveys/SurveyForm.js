// SurveyForm shows a form for a user to add input

import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import { Link } from 'react-router-dom'
import validateEmails from '../../utils/validateEmails'

// please notice the name property because it is related to validate function
import FIELDS from './formFields'

class SurveyForm extends Component {
    renderFields() {
        return FIELDS.map(({ label, name }, index) => {
            return <Field
                key={index}
                component={SurveyField}
                type="text"
                label={label}
                name={name} />
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {}
    errors.email = validateEmails(values.email || '')
    FIELDS.forEach(({ name }) => {
        if (!values[name]) {
            errors[name] = `You must provide a ${name}`
        }
    })


    return errors
}


export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm)