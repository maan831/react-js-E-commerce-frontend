import React from 'react'
import './footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accesories</span>
          <span>New Arrivals</span>

        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>

        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dignissimos quo fuga voluptatibus, nisi qui eos a aperiam laborum voluptate deleniti rem unde animi optio eius doloremque. Alias reprehenderit odio repudiandae, consequatur, magni non, ut expedita sed molestias tempora voluptates.
          </span>
        </div>
        <div className="item">
          <h1>Contacts</h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequuntur, nesciunt consectetur aliquid illo excepturi adipisci voluptatibus cum, in error at similique ipsum animi obcaecati! Delectus perferendis laudantium molestiae necessitatibus, eaque asperiores cumque explicabo obcaecati quis est maxime sequi a!</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className='logo'>Lamastore</span>
          <span className="copyright">
            CopyRight All Rights Reserved
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" srcset="" />
        </div>
      </div>
    </div>
  )
}

export default Footer