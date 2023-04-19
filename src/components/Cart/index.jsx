import {CartItem} from "./components";

import style from './Cart.module.scss'
import {useEffect, useState} from "react";


export const Cart = ({items, cartItems, setCartOpened, delFromCart}) => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalTaxPrice, setTotalTaxPrice] = useState(0);

    useEffect(() => {
        const total = (items
            .filter((item) => cartItems.includes(item.id))
            .map((obj) => obj.price)
            .reduce((acc, price) => acc + price, 0)).toFixed(2);
        const totalTax = (total / 100 * 5).toFixed(2)
        setTotalPrice(total); // общая сумма цен
        setTotalTaxPrice(totalTax);

    }, [cartItems]);

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
                                                    id={obj.id}
                                                    title={obj.title}
                                                    price={(obj.price).toFixed(2)}
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