import React from 'react'
import './Cart.scss'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function Cart() {
    const data = [

        {
           id: 1,
           img:"https://images.pexels.com/photos/8075937/pexels-photo-8075937.jpeg?auto=compress&cs=tinysrgb&w=600",
           img2:"https://images.pexels.com/photos/8075940/pexels-photo-8075940.jpeg?auto=compress&cs=tinysrgb&w=600 ",
           title: "Long sleevs graphic t-shirt",
           desc: "Long sleevs graphic t-shirt",
           isNew: true,
           oldprice:19,
           price: 12,
        },
        {
           id: 2,
           img:"https://images.pexels.com/photos/13384900/pexels-photo-13384900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
           title: "Long sleevs graphic t-shirt",
           desc: "Long sleevs graphic t-shirt",
           isNew: true,
           oldprice:19,
           price: 12,
        },]
  return (
    <div className='cart'>
      <h1>Products in your Cart</h1>
      {data?.map(item=>(
        <div className="item" key={item.id}>
            <img src= {item.img} alt="" />
            <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0,100)}</p>
                <div className="price">1 * ${item.price}</div>
            </div>
            <DeleteOutlineIcon className='delete'/>
        </div>
      ))}
      <div className="total">
        <span>
            SUBTOTAL
        </span>
        <span>
            $123
        </span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset"> Reset Cart</span>
    </div>
  )
}

export default Cart