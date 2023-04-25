import React, { useState } from 'react';
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';

const Product = () => {
  const images = [
    "https://images.pexels.com/photos/7620474/pexels-photo-7620474.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt='' onClick={() => setSelectedImg(0)} />
          <img src={images[1]} alt='' onClick={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, itaque. Alias nobis dolor repellendus hic quasi, nulla amet nostrum ducimus aliquam nam tenetur sapiente corrupti perferendis ipsam deserunt ratione blanditiis, quae nisi eaque labore? Culpa minima reiciendis nisi dicta possimus!</p>
      <div className="quantity">
        <button onClick={()=>setQuantity(prev=>prev===1?1:prev-1)}>-</button>
        {quantity}
        <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
       </div>
        <button className="add">
          <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon/>  ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor:Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <div className="info">
          <span>DESCRIPTION</span>
          <hr/>
          <span>ADDITIONAL INFORMATION</span>
          <hr/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
}

export default Product;
