import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home-container">
                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg"  alt ="" className="home-image" />

                <div className="home-row">
                    <Product 
                        id = {122322}
                        title="Bennett Mystic 15.6 inch Laptop Shoulder Messenger Sling office Bag,Water repeilent Fabric for Men and Women(Blue)"
                        price={11.98}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/51S-b58EREL._SL500_.jpg"
                        
                    />
                    <Product 
                        id = {122323}
                        title="IFB 30 L Convection Microwave Oven (30BRC2 Black With Starter Kit)"
                        price={239}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81D8pNFmWzL._SX679_.jpg"

                    />
                </div>

                <div className="home-row">
                <Product 
                        id = {122325}
                        title="All The Light We cannot See The Breathtaking World wide Bestseller Paperback"
                        price={199.99}
                        rating={3}
                        image="https://rukminim1.flixcart.com/image/416/416/l4zxn680/regionalbooks/8/t/w/all-the-light-we-cannot-see-english-paperback-anthony-doerr-original-imagfrzeu9uysv4w.jpeg?q=70"
                        
                        
                />
                <Product 
                        id = {122326}
                        title="Amazon Echo (3rd generation) Smart Speaker With Alexa Charcoal Fabric"
                        price={98.99}
                        rating={5}
                        image="https://cdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/assets/f/8/f/a/f8fa2e7011354b94d48ccf6ad73d24082928171e_1.jpg"
                        
                    />
                <Product 
                        id = {122321}
                        title="New Apple Ipad Pro (12.96-inch,Wi-Fi,128gb) - Silver (4th Generation)"
                        price={598.99}
                        rating={4}
                        image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-pro-12-wifi-silver-2020?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1626721066000"
                        
                    />
                </div>

                <div className="home-row">
                    <Product 
                        id = {122327}
                        title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual QHD 5120 x 1440"
                        price={1094.98}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/81rus0UFhsL._AC_SL400_.jpg"
                        
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;


