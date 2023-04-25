import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/card'
const FeaturedProducts = ({type}) =>{
   const data = [

         {
            id: 1,
            img:"https://images.pexels.com/photos/8075937/pexels-photo-8075937.jpeg?auto=compress&cs=tinysrgb&w=600",
            img2:"https://images.pexels.com/photos/8075940/pexels-photo-8075940.jpeg?auto=compress&cs=tinysrgb&w=600 ",
            title: "Long sleevs graphic t-shirt",
            isNew: true,
            oldprice:19,
            price: 12,
         },
         {
            id: 2,
            img:"https://images.pexels.com/photos/13384900/pexels-photo-13384900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long sleevs graphic t-shirt",
            isNew: true,
            oldprice:19,
            price: 12,
         },
         {
            id: 3,
            img:"https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long sleevs graphic t-shirt",
            isNew: true,
            oldprice:19,
            price: 12,
         },  {
            id: 4,
            img:"https://images.pexels.com/photos/9870336/pexels-photo-9870336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "Long sleevs graphic t-shirt",
            isNew: true,
            oldprice:19,
            price: 12,
         }
   ]

  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} Products</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ducimus nisi tempora ex vel aspernatur quod impedit, nesciunt amet expedita atque? Numquam iste minima repellendus! Pariatur molestiae nihil distinctio natus mollitia itaque quam quasi cum aliquam voluptates, nulla, a sit unde temporibus saepe impedit aliquid ullam laborum deserunt autem vero!
            </p>
        </div>
        <div className="bottom">
         {data.map(item=>(
            <Card item={item} key={item.id}/>
         ))}
        </div>
    </div>
  )
}

export default FeaturedProducts