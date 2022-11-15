import React, { useState, useEffect } from 'react';
import './Upload.scss'

function Upload(props) {

    function handleDragEnter(e) {
    e.stopPropagation();
    e.preventDefault();
    }

    function handleDragOver(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    function handleDrop(e) {
        e.stopPropagation();
        e.preventDefault();
        const files = e.dataTransfer;
        console.log('files')
        console.log(files)
        //handleFiles(files);
    }

    const [file, setFile] = useState(null) 
    let handleUpload = (e) => {
        setFile(e.target.files[0])
    }
    return (
        <>
            <div onDrop={handleDrop} onDragEnter={handleDragEnter} onDragOver={handleDragOver} className='flex-item'>
                <h2>{props.title}</h2>
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