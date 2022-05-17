import React from 'react';
import '../../FileUpload.css';

function FileUpload() {
  return (
    <section>
      <form id='user-search'>
        <input className='results' placeholder='Enter custom file name...'></input>
        <hr></hr>
        <button className='submit'></button>
        <hr></hr>
        <button className='submit' placeholder=''></button>
      </form>
    </section>
  )
}

export default FileUpload;