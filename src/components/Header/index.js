import React from 'react';
import {Link, Navigate} from 'react-router-dom';

import {useCart} from '../../hooks/useCart';
import {useSelector} from "react-redux";
import {selectIsAuth} from "../../redux/slice/auth";

function Header({onClickCart}) {
    const {totalPrice} = useCart();
    const isAuth = useSelector(selectIsAuth);
    const userData = useSelector(state => state.auth.data);

    return (
        <header className="d-flex justify-between align-center p-40">
            <Link to="/">
                <div className="d-flex align-center">
                    <img width={40} height={40} src="img/logo.png" alt="Logotype"/>
                    <div>
                        <h3 className="text-uppercase">React Sneakers</h3>
                        <p className="opacity-5">Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className="d-flex">
                <li onClick={onClickCart} className="mr-30 cu-p">
                    <img width={18} height={18} src="img/cart.svg" alt="Корзина"/>
                    <span>{(totalPrice).toLocaleString('ru-RU', {minimumFractionDigits: 2})} руб.</span>
                </li>
                <li className="mr-20 cu-p">
                    <Link to="/favorites">
                        <img width={18} height={18} src="img/heart.svg" alt="Закладки"/>
                    </Link>
                </li>
                <li className="mr-30 cu-p">
                    <Link to="/profile">
                        {isAuth ?
                            (
                                <>
                                    <img width={18} height={18} src={userData.avatarUrl} alt="Пользователь"/>
                                    <span>{userData.userName}</span>
                                </>
                            ) : (
                                <>
                                    <img width={18} height={18} src="img/user.svg" alt="Пользователь"/>
                                </>
                            )}
                    </Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
