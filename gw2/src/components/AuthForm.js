import React, { PropTypes, Component } from 'react';

export default class AuthForm extends Component {
    render () {
        return (
            <div className='container'>
                <h1 className='text-center'> GW2 Account Profile Card </h1>
                <form className='form-horizontal' onSubmit={ this.props.onSubmitKey }>
                    { this.props.children }
                </form>
            </div>
        )
    }
}

AuthForm.propTypes = {
    onSubmitKey: PropTypes.func,
    children: PropTypes.arrayOf(PropTypes.element)
}