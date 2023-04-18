
import {CartItem} from "./components";

import style from './Cart.module.scss'


export const Cart = () => {
    return (
        <div className={style.overlay}>
            <div className={style.drawer}>

                <div className={`${style.cartHeader} d-flex justify-between`}>
                    <h2 className="mb-30">Корзина</h2>
                    <img className="removeBtn" width={32} height={32} src="/img/ui/button/removeButton.svg"
                         alt="Remove"/>
                </div>

                <div className={style.cartItems}>

                    <CartItem/>


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
                                21 482 руб.
                            </b>
                        </li>
                        <li>
                            <span>
                                Налог 5%:
                            </span>
                            <div>

                            </div>
                            <b>
                                1 241 руб.
                            </b>
                        </li>
                    </ul>

                    <button className={`${style.cartOfferButton} justify-center align-center d-flex`}>
                        <p>
                            Оформить заказ
                            <img width={16} height={14} src="/img/ui/button/offerButton.svg" alt="Offer"/>
                        </p>
                    </button>
                </div>

            </div>
        </div>
    )
}