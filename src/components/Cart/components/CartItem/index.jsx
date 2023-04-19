import './CartItem.scss'

export const CartItem = ({id, title, price, imageUrl, delFromCart}) => {

    const onClickRemove = () => {
        delFromCart(id);
    }

    return (
        <div key={id} className={`cartItem d-flex align-center mb-20`}>

            <div style={{backgroundImage: `url(${imageUrl})`}}
                 className={`cartItemImg`}>
            </div>

            <div className="mr-20 flex">
                <p className="mb-5">
                    {title}
                </p>
                <b>
                    {price} руб.
                </b>
            </div>
            <img onClick={onClickRemove} className="removeBtn" width={32} height={32} src="/img/ui/button/removeButton.svg"
                 alt="Remove"/>
        </div>
    )
}