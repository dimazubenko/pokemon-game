import { useState } from 'react';
import s from './style.module.css';
import cardBackSide from '../../assets/card-back-side.jpg';

const PokemonCard = ({name, img, id, type, values}) => {
    const [isActive, setActive] = useState(false);
    const handleClick = () => {
        setActive(true);
    }
    return(
        <div className={s.root} onClick={handleClick}>
            <div className={[s.pokemonCard, isActive ? s.active : ''].join(' ')}>
                <div className={s.cardFront}>
                    <div className={[s.wrap, s.front].join(' ')}>
                        <div className={[s.pokemon, s[type]].join(' ')}>
                            <div className={s.values}>
                                <div className={[s.count, s.top].join(' ')}>{ values.top }</div>
                                <div className={[s.count, s.right].join(' ')}>{ values.right }</div>
                                <div className={[s.count, s.bottom].join(' ')}>{ values.bottom }</div>
                                <div className={[s.count, s.left].join(' ')}>{ values.bottom }</div>
                            </div>
                            <div className={s.imgContainer}>
                                <img src={ img } alt={ name } />
                            </div>
                            <div className={s.info}>
                                <span className={s.number}>#{ id }</span>
                                <h3 className={s.name}>
                                    { name }
                                </h3>
                                <small className={s.type}>Type: <span>{ type }</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.cardBack}>
                    <div className={[s.wrap, s.back].join(' ')}>
                        <img src={ cardBackSide } alt="Сard Backed" />
                    </div>
                </div>

            </div>
        </div>
    )
};

export default PokemonCard;