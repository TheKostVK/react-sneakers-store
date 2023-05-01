import React from 'react';
import {Card} from '../../components/Card';
import AppContext from '../../context';
import {useSelector} from "react-redux";
import {selectIsAuth} from "../../redux/slice/auth";
import {Navigate} from "react-router-dom";

export const Favorites = () => {
  const { favorites, onAddToFavorite } = React.useContext(AppContext);
    const isAuth = useSelector(selectIsAuth);

    if (!isAuth) {
        return <Navigate to={"/login"} />;
    }

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favorites.map((item, index) => (
          <Card key={index} favorited={true} onFavorite={onAddToFavorite} {...item} />
        ))}
      </div>
    </div>
  );
}
