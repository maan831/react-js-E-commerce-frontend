import React from 'react'
import './card.scss'
import { Link } from 'react-router-dom'

const  card = ({item})=> {
  return (
    <Link className='link' to={`/product/${item.id}`}>
    <div className='card'>
        <div className="image">
            {item.isNew && <span>New Season</span>}
            <img src={item.img} alt="" className="mainimg" />
            <img src={item.img2} alt="" className="secondimg" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
            <h3>${item.oldprice}</h3>
            <h3>${item.price}</h3>
        </div>
    </div>
    </Link>
  )
}

export default card