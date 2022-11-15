import React, { useState, useEffect } from 'react';
import './FileUpload.scss'

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
            <div className='flex-item'>
                Products
                <div className='filesUploaded'>
                    {products ?
                        <>
                            <span>{products.name}</span>
                            <span><a className='delete' href='/delete'>Remove</a></span>
                        </>
                        : null
                    }
                </div>

                <input onClick={() => console.log('Click!')} onChange={handleProducts} type="file" name="file0" id="file0" className="inputfile" />

                <label className='uploadFileBtn' htmlFor="file0">Upload a file</label>

            </div>
            <div className='flex-item'>
               Approvals 
                <div className='filesUploaded'>
                    {approvals ?
                        <>
                            <span>{approvals.name}</span>
                            <span><a className='delete' href='/delete'>Remove</a></span>
                        </>
                        : null
                    }
                </div>

                <input onChange={handleApprovals} type="file" name="file1" id="file1" className="inputfile" />

                <label className='uploadFileBtn' htmlFor="file1">Upload a file</label>

            </div>

            <div className='flex-item'>
                Others
                <div className='filesUploaded'>
                    {others ?
                        <>
                            <span>{others.name}</span>
                            <span><a className='delete' href='/delete'>Remove</a></span>
                        </>
                        : null
                    }
                </div>

                <input onClick={() => console.log('Click!')} onChange={handleOthers} type="file" name="file2" id="file2" className="inputfile" />

                <label className='uploadFileBtn' htmlFor="file2">Upload a file</label>

            </div>
        </div>
        </>
    );
}

export default FileUpload;