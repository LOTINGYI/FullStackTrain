import StripeCheckout from 'react-stripe-checkout'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'
class Payment extends Component {
    render() {
        return (
            <StripeCheckout
                name="Tim"
                description="$5 for 5 email credit"
                locale="en"
                amount={500}    // Give me five dollars in US currency
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}>
                <button className="btn"> Add Credits</button>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payment)