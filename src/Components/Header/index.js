import s from './style.module.css';
import { useHistory } from 'react-router-dom';

const Header = ({ title, descr, onClickButton }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/game');
    }
    return(
        <div className={s.root}>
            <div className={s.forest}></div>
            <div className={s.silhouette}></div>
            <div className={s.moon}></div>
            <div className={s.container}>
                    <h1>{ title }</h1>
                    <p>{ descr }</p>
                    <button className={s.button} onClick={handleClick}>
                        Start Game
                    </button>
            </div>
        </div>
    )
};

export default Header;