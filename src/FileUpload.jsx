import React, { useState, useEffect } from 'react';
import './FileUpload.scss'
import Upload from './Upload';

function FileUpload() {

    //TODO Implement Remove, by setting file to empty string
    const [products, setProducts] = useState({});
    const [approvals, setApprovals] = useState({});
    const [others, setOthers] = useState({});
    let handleProducts = (e) => {
        setProducts(e.target.files[0])
    }
    let handleApprovals = (e) => {
        setApprovals(e.target.files[0])
    }
    let handleOthers = (e) => {
        setOthers(e.target.files[0])
    }

    return (
        <>
        <div>Current Attachments:</div>
        <div className='currentAttachments'>
            <Upload title='Products'></Upload>
            <Upload title='Approvals'></Upload>
            <Upload title='Other'></Upload>
        </div>
        </>
    );
}

export default FileUpload;