import s from './syle.module.css';
import cn from 'classnames';

const NavBar = () => {
    return(
        <nav id='navbar'>
        <div className={s.navWrapper}>
            <p className={s.brand}>
            LOGO
            </p>
            <a className={cn(s.menuButton, s.active)}>
            <span />
            </a>
        </div>
        </nav>
    )
};

export default NavBar;