import React, { PropTypes, Component } from 'react';

export default class SubmitKey extends Component {
    render() {
        return (<button className='btn btn-info' disabled={ this.props.keyDisabled } type='submit'>View Your Profile Card</button>);
    }
}

SubmitKey.propTypes = {
    keyDisabled: PropTypes.bool.isRequired
}