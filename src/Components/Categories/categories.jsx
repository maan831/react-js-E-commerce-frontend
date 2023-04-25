import React from 'react'
import './categories.scss'
import{Link} from 'react-router-dom'

function categories() {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src="https://images.pexels.com/photos/7256350/pexels-photo-7256350.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                <button>
                    <Link to={"/products/1"} className='link'>Sale</Link>
                </button>
            </div>
            <div className="row">
                <img src='https://images.pexels.com/photos/11491085/pexels-photo-11491085.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                <button>
                    <Link to={"/products/1"}  className='link'>Women</Link>
                </button>
                
            </div>
        </div>
        <div className="col">
            <div className="row">
                <img src='https://images.pexels.com/photos/11491085/pexels-photo-11491085.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                <button>
                    <Link to={"/products/1"}  className='link'>Women</Link>
                </button>
            </div>
        </div>
        <div className="col col-l">
            <div className="row">
             <div className="col">
                <div className="row">
                <img src='https://images.pexels.com/photos/2723623/pexels-photo-2723623.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                <button>
                    <Link to={"/products/1"}  className='link'>Women</Link>
                </button>
                </div>
             </div>
             <div className="col">
                <div className="row">
                <img src='https://images.pexels.com/photos/3385234/pexels-photo-3385234.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                <button>
                    <Link to={"/products/1"}  className='link'>men</Link>
                </button>

                </div>
             </div>
            </div>
            <div className="row">
            <img src='https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                <button>
                    <Link to={"/products/1"}  className='link'>Women</Link>
                </button>
            </div>
        </div>
    </div>
  )
}

export default categories