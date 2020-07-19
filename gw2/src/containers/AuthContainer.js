import React, { Component } from 'react';
import AuthForm from '../components/AuthForm';
import KeyEntry from '../components/KeyEntry';
import KeyValidator from '../components/KeyValidator';
import SubmitKey from '../components/SubmitKey';
import { getPermissions } from '../utils/api';

export default class AuthContainer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            accountKey: '',
            badKey: true,
            loadingAnimation: '',
        };
        this.setAccountKey = this.setAccountKey.bind(this);
        this.setKeyValidity = this.setKeyValidity.bind(this);
        this.keyLengthValid = this.keyLengthValid.bind(this);
        this.handleSubmitKey = this.handleSubmitKey.bind(this);
        this.hasRightScopes = this.hasRightScopes.bind(this);
    }
    
    setAccountKey(event) {
        this.setState({ accountKey: event.target.value }, function() {
            this.setKeyValidity();
        });
    }

    setKeyValidity() {
        const key = this.state.accountKey;
        if (this.keyLengthValid()) {
            this.setState({ loadingAnimation: ' animated infinite pulse' });
            getPermissions(key)
                .then(res => {
                    const scopes = res.data.permissions;
                    this.hasRightScopes(scopes);
                })
                .catch(err => {
                    console.log('Error:', err);
                });
        } else {
            this.setState({ badKey: true, loadingAnimation: '' });
        }
    }

    hasRightScopes(scopes) {
        if (scopes.includes('account', 'characters', 'progression', 'builds', 'unlocks')) {
            this.setState({ loadingAnimation: '', badKey: false });
        } else {
            this.setState({ loadingAnimation: '', badKey: true });
        }
    }

    keyLengthValid() {
        return this.state.accountKey.length === 72;
    }

    handleSubmitKey() {
        this.context.router.push(`/${this.state.accountKey}`);
    }

    render() {
        return (
            <AuthForm onSubmitKey={ this.handleSubmitKey }>
                <KeyValidator badKey={ this.state.badKey } loadingAnimation={ this.state.loadingAnimation } />
                <KeyEntry setAccountKey={ this.state.setAccountKey }>
                    <SubmitKey keyDisabled={ this.state.badKey } />
                </KeyEntry>
            </AuthForm>
        );
    }
}
