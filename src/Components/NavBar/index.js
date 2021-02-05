import s from './syle.module.css';
import cn from 'classnames';
import { useHistory } from 'react-router-dom';

const NavBar = ({ isBurActive, onClickBurger, bgActive = false }) => {
    const history = useHistory();
    const handleOpenHome = () => {
        history.push('/');
    }
    
    return(
        <div>
            <nav id={s.navbar} className={cn({
                [s.bgActive]: bgActive
            })}>
            <div className={s.navWrapper}>
                <p className={s.brand} onClick={handleOpenHome}>
                LOGO
                </p>
                <div className={cn(s.menuButton, {
                        [s.active]: isBurActive
                    })} 
                    onClick={onClickBurger}
                >
                <span />
                </div>
            </div>   
            </nav>
        </div>
    )
};

export default NavBar;
