import s from './style.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';

const MENU = [
    {
        title: 'HOME',
        to: ''
    },
    {
        title: 'GAME',
        to: 'game' 
    },
    {
        title: 'ABOUT',
        to: 'about'
    },
    {
        title: 'CONTACT',
        to: 'contact'
    }]

const Menu = ({ openMenu, closeMenu }) => {

    return (
        <div className={cn(s.menuContainer, {
                [s.active]: openMenu === true,
                [s.deactive]: openMenu === true
            })}>
            <div className={s.overlay} />
            <div className="menuItems">
                <ul>
                    {
                        MENU.map(({title, to}, index) => (
                            <li key={index}>
                                <Link to={to} onClick={closeMenu}>
                                    {title}
                                </Link>
                            </li>
                        ))
                    }
                
                </ul>
            </div>
        </div>
    )

};

export default Menu;