import {CartItem} from "./components";

import style from './Cart.module.scss'
import {useEffect, useState} from "react";


export const Cart = ({items, cartItems, setCartOpened, delFromCart}) => {

    const [totalPrice, setTotalPrice] = useState('');
    const [totalTaxPrice, setTotalTaxPrice] = useState('');

    useEffect(() => {
        const total = +(items
            .filter((item) => cartItems.includes(item.id))
            .map((obj) => obj.price)
            .reduce((acc, price) => acc + price, 0));
        const totalTaxAmount = +(total / 100 * 5).toFixed(2);
        const formattedTotal = total.toLocaleString('ru-RU', {minimumFractionDigits: 2});
        const formattedTotalTax = totalTaxAmount.toLocaleString('ru-RU', { minimumFractionDigits: 2 });

        setTotalPrice(formattedTotal); // общая сумма цен
        setTotalTaxPrice(formattedTotalTax);

    }, [items, cartItems]);

    return (
        <>
            <div className={style.overlay}>
                <div className={style.drawer}>

                    <div className={`${style.cartHeader} d-flex justify-between`}>
                        <h2 className="mb-30">Корзина</h2>
                        <img className="removeBtn" width={32} height={32} src="/img/ui/button/removeButton.svg"
                             alt="Remove" onClick={() => setCartOpened(false)}/>
                    </div>

                    {
                        cartItems.length > 0 ? (
                            <>
                                <div className={style.cartItems}>
                                    {
                                        items.filter((item) => cartItems.includes(item.id)).map((obj) => (
                                            <>
                                                <CartItem
                                                    key={obj.id}
                                                    id={obj.id}
                                                    title={obj.title}
                                                    price={(obj.price).toLocaleString('ru-RU', {minimumFractionDigits: 2})}
                                                    imageUrl={obj.imageUrl}
                                                    delFromCart={delFromCart}
                                                />
                                            </>
                                        ))
                                    }

                                </div>

                                <div className={style.cartTotalBlock}>
                                    <ul>
                                        <li>
                                        <span>
                                            Итого:
                                        </span>
                                            <div>

                                            </div>
                                            <b>
                                                {totalPrice} руб.
                                            </b>
                                        </li>
                                        <li>
                                        <span>
                                            Налог 5%:
                                        </span>
                                            <div>

                                            </div>
                                            <b>
                                                {totalTaxPrice} руб.
                                            </b>
                                        </li>
                                    </ul>

                                    <button className={`${style.cartOfferButton} justify-center align-center d-flex`}>
                                        <p>
                                            Оформить заказ
                                            <img width={16} height={14} src="/img/ui/button/offerButton.svg"
                                                 alt="Offer"/>
                                        </p>
                                    </button>
                                </div>
                            </>
                        ) : (
                            'Пусто'
                        )
                    }


                </div>
            </div>
        </>
    )
}