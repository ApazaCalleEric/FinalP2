
import { useState } from 'react'
import './Eric.css';
import {AiOutlineSketch,AiFillStar} from "react-icons/ai";
function EricContainer() {
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <>
        <div className='Ericcontainer'>
            <div className='ericmini1'>
                <img src='https://blog.virtualianet.com/wp-content/uploads/2015/10/Encuentra-im%C3%A1genes-libres-en.png' className='img'></img>
                <div className='heart'>
                    
                    <AiOutlineSketch color='#ff0080' size={40} enableBackground={15}/>
                    <div className='option'></div>
                </div>
            </div>
            <div className='ericmini2'>
                <div className='cat1'>
                    <div className='h3'>
                        <h3>Standarr Cactus</h3>
                        <h3>Succulent</h3>
                    </div>
                    <h3 >$20.0</h3>
                </div>
                <div className='cat2'>
                
                <div>
                <AiFillStar color='#fdfd96' size={30}/>
                <AiFillStar color='#fdfd96' size={30}/>
                    <AiFillStar color='#fdfd96' size={30}/>
                    <AiFillStar color='#fdfd96' size={30}/>
                </div>
                    
                    <h4 className='texto'>2 reviews</h4>
                </div>
                    
                <div className='cat3'>
                    <button onClick={incrementCount}>+</button>
                    <h2>{count}</h2>
                    <button onClick={decrementCount}>-</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default EricContainer