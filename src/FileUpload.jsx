import React, { useState, useEffect } from 'react';
import './FileUpload.scss'
import Upload from './Upload';

function FileUpload() {

    return (
        <div className=''>
            <h1>Current Attachments:</h1>
            <div className='currentAttachments'>
                <Upload title='Products'></Upload>
                <Upload title='Approvals'></Upload>
                <Upload title='Other'></Upload>
            </div>
        </div>
    );
}

export default FileUpload;