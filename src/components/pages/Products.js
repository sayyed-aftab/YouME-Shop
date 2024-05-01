import React from 'react';
import Box2 from './Box2';
import Box3 from './Box3';
import './Products.css';


const Products = () => {
    return (
        <div>
             
            <div className='section-1'>
                <h1>Features of Products</h1>
                <h3>Men's Collection</h3>
                
            </div>
            <div className="horizontal-line"></div>
            <div className='container'>
                <div className='box2'>
                    <Box2 imgLink={"cl1.jpg"} title={"Tshirt"} subtitle={"This T-shirt is fully comfortable!"} price={"Price: 699"} />
                    <Box2 imgLink={"cl2.avif"} title={"Men's Shirt"} subtitle={"The Shirt made in Affu Brand"} price={"Price: 699"} />
                    <Box2 imgLink={"cl3.avif"} title={"Tshirt"} subtitle={"This Shirt can change your Personality"} price={"Price: 699"} />
                    <Box2 imgLink={"cl4.jpg"} title={"Men's Shirt"} subtitle={"This Shirt is fully comfortable!"} price={"Price: 699"} />
                </div>
                <div className='box2'>
                    <h2>Women's Collection</h2>
                </div>
                <div className='box2'>
                    <Box2 imgLink={"g1.jpeg"} title={"Women's Tshirt"} subtitle={"This T-shirt is fully comfortable!"} price={"Price: 699"} />
                    <Box2 imgLink={"g2.jpeg"} title={"Men's Shirt"} subtitle={"The Shirt made in Affu Brand"} price={"Price: 699"} />
                    <Box2 imgLink={"g3.jpeg"} title={"Women's Tshirt"} subtitle={"This Shirt can change your Personality"} price={"Price: 699"} />
                    <Box2 imgLink={"g4.jpeg"} title={"Women's Tshirt"} subtitle={"This Shirt is fully comfortable!"} price={"Price: 699"} />
                </div>
            </div>
            <div id='section-2'>
                <div className="ban">
                    <h3>Repair Services</h3>
                    <h2>Up to <span>60% Off</span> All Devices & Accessories</h2>
                    <button>Explore More</button>
                </div>
            </div>
            <div className='section-3'>
                <div className='box3'>
                    <Box3 imgLink={"m1.jpeg"} title={"Iphone 14 pro max"} subtitle={"Unlock unbeatable savings on the latest iPhone, grab yours now before the sale ends!"} price={"MRP: 1,20000"} />
                    <Box3 imgLink={"m2.jpeg"} title={"Iphone 14 pro max"} subtitle={"Experience the power of innovation at a fraction of the cost, don't miss out on our exclusive iPhone sale"} price={"MRP: 1,20000"} />
                    <Box3 imgLink={"m3.jpeg"} title={"Iphone 13 pro max"} subtitle={"Score big savings on iPhones, limited time offer, act fast"} price={"MRP: 1,00000"} />
                    <Box3 imgLink={"m4.jpeg"} title={"Iphone 12 pro"} subtitle={"Upgrade to an iPhone for less, shop our sale today!"} price={"MRP: 79,0000"} />
                </div>
                <div className='section-3'>
                    <h3>Laptops</h3>
                    <div className='box3'>
                        <Box3 imgLink={"l1.jpeg"} title={"Gaming Laptop"} subtitle={"Score big savings on iPhones, limited time offer, act fast!"} price={"MRP: 1,49999"} />
                        <Box3 imgLink={"l2.jpeg"} title={"HP Laptop"} subtitle={"Upgrade to an iPhone for less, shop our sale today!"} price={"MRP: 45,000"} />
                        <Box3 imgLink={"l3.jpeg"} title={"Child Laptop"} subtitle={"Introduce your child to the world of learning and creativity with our kid-friendly laptops"} price={"MRP: 20,000"} />
                        <Box3 imgLink={"l4.jpeg"} title={"Asus Laptop"} subtitle={"Take your gaming to the next level with unparalleled performance and immersive visuals from our cutting-edge gaming laptops!"} price={"MRP: 79,0000"} />
                    </div>
                </div>
                <div className='section-3'>
                    <h3>E Accessories</h3>
                    <div className='box3'>
                        <Box3 imgLink={"e1.jpg"} title={"E Accessories"} subtitle={"Score big savings on iPhones, limited time offer, act fast!"} price={"MRP:999"} />
                        <Box3 imgLink={"e2.jpg"} title={"Headphone"} subtitle={"Immerse yourself in crystal-clear sound with our premium headphones!"} price={"MRP:900"} />
                        <Box3 imgLink={"e3.jpg"} title={"Airpods"} subtitle={"Experience wireless freedom and sound quality with our AirPods"} price={"MRP: 2,999"} />
                        <Box3 imgLink={"e4.jpg"} title={"Smart Watch"} subtitle={"Stay connected and stylish with our innovative smartwatches!"} price={"MRP: 2,999"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;
