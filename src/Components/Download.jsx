import React from 'react'


   

const Download = () => {
    
  return (
    <div>
        <div className='my-20'>
        <button onClick={() => {this.handleDownload('http://localhost:5173//', 'profile.jpg')
}}>Download Image</button>
        </div>
      
    </div>
  )
}

export default Download
