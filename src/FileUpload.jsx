import React, { useState, useEffect } from 'react';
import './FileUpload.scss'

function FileUpload() {
    let deleteFile = (e) => {
        //setFileData()
        setFileData({})
        fileData = ""
        console.log('delete')
        //e.target.file
        //maybe this needs a ref to the corresponding input
    }
    const [fileData, setFileData] = useState({});
    let handleFileInput = (e) => {
        setFileData(e.target.files[0])
//console.log('onChange');
//console.log(`e.target.files[0]: ${e.target.files[0]}`);
//console.log(`e.target.files[0]: ${JSON.stringify(e.target.files[0])}`);
console.log(`e.target.files[0]: ${e.target.files[0].name}`);
    }

    return (
<div>
    <div className='uploaded'>
        { fileData ? 
            <>
            <span>{fileData.name}</span>
            <span><a className='delete' href='/delete'>Remove</a></span>
            </>
        : null
        }
    </div>

<input onClick={()=> console.log('Click!')} onChange={handleFileInput} type="file" name="file" id="file" className="inputfile" />

<label className='uploadFileBtn' htmlFor="file">Upload a file</label>

</div>
    );
}

export default FileUpload;

{/*
<div>
    <form action="">
    <input onChange={handleFileInput} type="file" id="myFile" name="filename" />
    <input type="submit" />
    </form>
    <div>
    <button className='delete' onClick={() => deleteFile(fileData)}></button>
</div>
</div>

*/}