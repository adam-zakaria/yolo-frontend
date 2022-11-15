import React, { useState, useEffect } from 'react';
import './Upload.scss'

function Upload(props) {
    [file, setFile] = useState({}) 
    let handleUpload = (e) => {
        setFile(e.target.files[0])
    }
    return (
        <>
            <div className='flex-item'>
                props.title
                <div className='filesUploaded'>
                    {file ?
                        <>
                            <span>{file.name}</span>
                            <span><a className='delete' href='/delete'>Remove</a></span>
                        </>
                        : null
                    }
                </div>

                <input onChange={handleUpload} type="file" name={`${props.title}`} id={`${props.title}`} className="inputfile" />

                <label className='uploadFileBtn' htmlFor={`${props.title}`}>Upload a file</label>

            </div>
        </>
    )
}
export default Upload;