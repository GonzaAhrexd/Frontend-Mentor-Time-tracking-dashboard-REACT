import React from 'react'
import '../css/index.css'
function UserTable(props) {


  const change = (displayType) =>{
    // console.log(displayType)
    props.changeDisplay(displayType)
  }
 
  return (
 
    <div className='UserComplete'>

    <div className='username'>
      <div className='usernameContent'>
    <div className='imageContainer'>
    <img className='imagen' src={props.img} alt="" />
    </div>
    <div className='rep'>
      Report  for
    </div>
    <div className='name'>
      {props.name}
    </div>
    </div>
    </div>

    <div className='changeInfo'>

    <div className='separate'>
      <a onClick={change('daily')}>Daily</a>
    </div>
    <div className='separate'>
      <a onClick={change('weekly')}>Weekly</a>
    </div>
    <div className='separate'>
      <a onClick={change('monthly')}>Monthly</a>
    </div>
    
    </div>
    </div>
  )
}

export default UserTable