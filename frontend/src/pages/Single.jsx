import React from 'react'
import { Link } from 'react-router'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
        <img src='https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='img'></img>
        <div className="user">
            <img src='https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='img'></img>
            <div className="info">
                <span>Ram</span>
                <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
                <Link to={`write?edit=2`}>
                    <img src='https://google.com' alt='img'></img>
                </Link>
                <img src='' alt='img'></img>
            </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, nemo? Autem, quo voluptatibus. Quod, dicta! Cumque, perspiciatis. Officia, voluptatibus expedita? Ipsam, autem! Quisquam, atque debitis? Nemo, illum? Sint, vel. Quisquam, voluptatibus expedita? Ipsam, autem!</p>

      </div>
      <div className="menu">
        <Menu/>
      </div>
    </div>
  )
}

export default Single
