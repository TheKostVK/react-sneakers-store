import React, {useEffect, useState} from "react";

import style from './Card.module.scss'

export const Card = ({
        id,
        title,
        price,
        imageUrl,
        cartItems,
        favoriteItems,
        addToCart,
        delFromCart,
        addToFavorite,
        delFromFavorite
    }) => {

    const [inCart, setInCart] = useState(false);
    const [inFavorite, setInFavorite] = useState(false);

    useEffect(() => {
        if (cartItems.some(item => item === id)) {
            setInCart(true);
        } else {
            setInCart(false);
        }
        if (favoriteItems.some(item => item === id)) {
            setInFavorite(true);
        } else {
            setInFavorite(false);
        }
    }, [id, cartItems, favoriteItems]);

    const onClickButtonPlus = () => {
        if (inCart) {
            setInCart(false);
            delFromCart(id);
        } else {
            setInCart(true);
            addToCart(id);
        }
    };

    const onClickButtonFavorite = () => {
        if (inFavorite) {
            setInFavorite(false);
            delFromFavorite(id);
        } else {
            setInFavorite(true);
            addToFavorite(id);
        }
    };


    return (
        <div className={style.card}>
            <div onClick={() => onClickButtonFavorite()} className={style.favorite}>
                <img width={32} height={32}
                     src={`/img/ui/button/${
                         inFavorite ? (
                             'likedButton.svg'
                         ) : (
                             'unlikedButton.svg'
                         )
                     }`} alt="likeStatus"/>
            </div>
            <img width={133} height={112} src={imageUrl} alt={title}/>
            <h5>{title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена: </span>
                    <b>{price} руб.</b>
                </div>
                <div onClick={onClickButtonPlus} className={style.buttonPlus}>
                    <img src={`/img/ui/button/${inCart ? 'inCartButton.svg' : 'addCartButton.svg'}`} alt="plus"
                         width={32} height={32}/>
                </div>
            </div>
        </div>
    )
}