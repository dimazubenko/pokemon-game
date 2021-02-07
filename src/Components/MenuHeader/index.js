import { useState } from 'react';
import Menu from '../Menu';
import NavBar from '../NavBar';


const MenuHeader = ({ bgActive }) => {
    const [isActive, setActive] = useState(null);

    const handleChange = () => {
        setActive(prevState => !prevState)
    }
    
    return(
        <div>
            <NavBar 
                isBurActive={isActive}
                bgActive={bgActive}
                onClickBurger={handleChange}
            />
             <Menu
                openMenu={isActive}
                closeMenu={handleChange}
            />
            
            
           
            
            
        </div>

    )
};

export default MenuHeader;