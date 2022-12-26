import React from 'react'
import '../css/index.css'
function UserTable(props) {


 
  return (
 
    <div className='UserComplete'>
    <div className='username'>
      <div className='usernameContent'>
    <div className='imageContainer'>
    <img className='imagen' src={props.img} alt="" />
    </div>
    <div> 
    <div className='rep'>
      Report  for
    </div>
    <div className='name'>
      {props.name}
      </div>
    </div>
    </div>
    </div>

    <div className='changeInfo'>

    <div className='separate'>
      <a id="daily" onClick={() => props.changeDisplay('daily')}>Daily</a>
    </div>
    <div className='separate'>
      <a id="weekly" onClick={() => props.changeDisplay('weekly')}>Weekly</a>
    </div>
    <div className='separate'>
      <a id="monthly" onClick={() => props.changeDisplay('monthly')}>Monthly</a>
    </div>
    
    </div>
    </div>
  )
}

export default UserTable