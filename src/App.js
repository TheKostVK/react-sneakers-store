
import {Header, Cart, Card} from "./components/index";

function App() {
    return (
        <div className="wrapper clear">
            <Header/>
            <Cart/>

            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>Все кроссовки</h1>
                    <div className="searchBlock">
                        <img width={14} height={14} src="/img/ui/search/search.svg" alt="Search"/>
                        <input placeholder="Поиск..."/>
                    </div>
                </div>

                <div className="d-flex">

                    <Card title="Кроссовки" imageUrl="./devStatic/img/snekers/img.png" price="12 999" />

                </div>

            </div>
        </div>
    );
}

export default App;
