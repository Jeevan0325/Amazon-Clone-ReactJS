// import { CenterFocusStrongOutlined } from "@material-ui/icons";s
import React from "react";
import "./Product.css";
//import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../StateProvider";

function Product({id, title, image, price, rating }) {

  const [{basket}, dispatch] = useStateValue();

  console.log("this is the basket >>> ", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product-info">
        <p className="product-title">{title}</p>
        <div className="product-business">
            <p className="product_price">
              <h2>
                <small>$</small> <strong>{price}</strong>
                </h2>
            </p>
          <div className="product-rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                  <p>⭐️</p>
              ))}
          </div>

          
        </div>
      </div>

      <img src={image}alt=""></img>

      <button onClick = {addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
