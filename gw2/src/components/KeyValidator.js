import React from 'react';

const KeyValidator = (props) => {
    return props.badKey === true 
    ? <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4 alert alert-danger text-justify' role='alert'>
            <span className={'glypicon glyphicon-exclamation-sign' + props.loadingAnimation } aria-hidden='true'></span>
            &nbsp; We can't go anywhere with a bad key! To get your API key, go to <a href='https://account.arena.net/applications' className='alert-link'>the application section of your account page</a>.
            Make sure you have the boxes checked for <em>account</em>, <em>progression</em>, <em>builds</em>, <em>unlocks</em>, and <em>characters</em> for your key or the we won't give it the thumbs up! Note: This application <strong>does not store any of your information</strong> and only returns data when explicitly provided a valid account key.
        </div>
        <div className='col-sm-4'></div>
    </div>
  : <div className='row'>
        <div className='col-sm-4'></div>
        <div className='col-sm-4 alert alert-success text-justify' role='alert'>
            <span className='glyphicon glyphicon-heart animated infinite pulse' aria-hidden='true'></span>
            &nbsp; This key works! ^^
        </div>
    <div className='col-sm-4'></div>
  </div>
}

export default KeyValidator;

