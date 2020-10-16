import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img
                    className="home_image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                    alt="" />

                <div className="home_row">

                    <Product
                        id="1"
                        title="burger"
                        price={500}
                        rating={5}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsHEsPDichAm2rBmEVO4UWwR3QYFUKyVTjOA&usqp=CAU"
                    />

                    <Product
                        id="11"
                        title="burger"
                        price={500}
                        rating={5}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsHEsPDichAm2rBmEVO4UWwR3QYFUKyVTjOA&usqp=CAU"
                    />
                </div>
                <div className="home_row">

                    <Product
                        id="10"
                        title="burger"
                        price={500}
                        rating={2}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsHEsPDichAm2rBmEVO4UWwR3QYFUKyVTjOA&usqp=CAU"
                    />

                    <Product
                        id="3"
                        title="burger"
                        price={500}
                        rating={3}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsHEsPDichAm2rBmEVO4UWwR3QYFUKyVTjOA&usqp=CAU"
                    />

                    <Product
                        id="4"
                        title="dragon"
                        price={500}
                        rating={1}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsHEsPDichAm2rBmEVO4UWwR3QYFUKyVTjOA&usqp=CAU"
                    />

                </div>

                <div className="home_row">

                    <Product
                        id="5"
                        title="chicken"
                        price={500}
                        rating={5}
                        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsHEsPDichAm2rBmEVO4UWwR3QYFUKyVTjOA&usqp=CAU"
                    />

                </div>


            </div>
        </div>
    )
}

export default Home
