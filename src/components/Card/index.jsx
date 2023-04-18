
import style from './Card.module.scss'

export const Card = () => {
    return (
        <div className={style.card}>
            <div className={style.favorite}>
                <img width={32} height={32} src="/img/ui/button/unlikedButton.svg" alt="likeStatus"/>
            </div>
            <img width={133} height={112} src="/devStatic/img/sneakers/sneakersGreen.png" alt="sneakers"/>
            <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена: </span>
                    <b>12 999 руб.</b>
                </div>
                <button>
                    <img width={11} height={11} src="/img/ui/button/addFavoriteButton.svg" alt="plus"/>
                </button>
            </div>
        </div>
    )
}