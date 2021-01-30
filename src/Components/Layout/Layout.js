import s from './layout.module.css';



const Layout = ({ id, title, descr, urlBg, colorBg }) => {
    const bgStyle = {
        backgroundImage: `url(${urlBg})`,
        backgroundColor: colorBg,
        backgroundSize: 'cover'
    };
    return(
        <section 
            className={s.root} 
            id={id}
            style={bgStyle}>

            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        { title }
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        { descr }
                    </div>
                </article>
             </div>
        </section>
    )
};

export default Layout;