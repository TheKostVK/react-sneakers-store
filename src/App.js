
import {Header, Card, Cart} from "./components/index";
import {useEffect, useState} from "react";


function App() {

    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favoriteItems, setFavoriteItems] = useState([]);

    const [cartOpened, setCartOpened] = useState(false);


    useEffect(() => {
        fetch('https://643edc0c6c30feced8354b64.mockapi.io/items')
            .then(res => res.json()).then(json => setItems(json));
    }, []);

    const addToCart = (id) => {

        setCartItems([...cartItems, id]);

    };

    const delFromCart = (id) => {

        const updateCartItems = cartItems.filter(item => item !== id);

        setCartItems(updateCartItems);
    }

    const addToFavorite = (id) => {
        setFavoriteItems([...favoriteItems, id]);
    };

    const delFromFavorite = (id) => {

        const updatedFavoriteItems = favoriteItems.filter(item => item !== id);

        setFavoriteItems(updatedFavoriteItems);
    }

    return (
        <div className="wrapper clear">
            <Header setCartOpened={setCartOpened} />
            {
                cartOpened ? <Cart setCartOpened={setCartOpened} items={items} cartItems={cartItems} delFromCart={delFromCart}/> : null
            }
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="searchBlock">
                        <img width={14} height={14} src="/img/ui/search/search.svg" alt="Search"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {
                        items.map((obj) => (
                            <Card
                                key={obj.id}
                                id={obj.id}
                                title={obj.title}
                                imageUrl={obj.imageUrl}
                                price={(obj.price).toLocaleString('ru-RU', {minimumFractionDigits: 2})}
                                cartItems={cartItems}
                                favoriteItems={favoriteItems}
                                addToCart={addToCart}
                                delFromCart={delFromCart}
                                addToFavorite={addToFavorite}
                                delFromFavorite={delFromFavorite}
                            />
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default App;
