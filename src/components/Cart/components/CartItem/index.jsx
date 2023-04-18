import './CartItem.scss'

export const CartItem = () => {
    return (
        <div className={`cartItem d-flex align-center mb-20`}>

            <div style={{backgroundImage: "url(/devStatic/img/sneakers/img.png)"}}
                 className={`cartItemImg`}>
            </div>

            <div className="mr-20 flex">
                <p className="mb-5">
                    Мужские Кроссовки Nike Air Max 270
                </p>
                <b>
                    12 999 руб.
                </b>
            </div>
            <img className="removeBtn" width={32} height={32} src="/img/ui/button/removeButton.svg"
                 alt="Remove"/>
        </div>
    )
}