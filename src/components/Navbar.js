import React,{useState} from 'react';
import './Navbar.css';
import { NavLink,Link } from 'react-router-dom';


  const Navbar = () => {
    const[menuopen,setmenuopent]=useState(false);
    return (
        <nav>
            <li><Link  to='/' className='logo'>You&Me Shop</Link></li>
            <div className='menu' onClick={()=>{
            setmenuopent(!menuopen);
            }} >
                
                <span></span>
                <span></span>
                <span></span>

            </div>
            <ul className={menuopen ? "open": ""}>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/Products'>Products</NavLink></li>
                <li><NavLink to='/Services'>Services</NavLink></li>
                <li><NavLink to='/About'>About</NavLink></li>
            </ul>
        </nav>
    );
};
export default  Navbar;