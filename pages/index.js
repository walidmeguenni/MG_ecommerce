import React from "react";
import { Product, FooterBanner, HeroBanner } from "../components";
import { client } from "../lib/client";
const Home = ({ productsData, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Beset selling Products</h2>
        <p>Speakers of many variations</p>
      </div>
      <div className="products-container">
        {productsData?.map((product,index) => <Product key={index} product={product}/>)}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]}/>
    </>
  );
};
export default Home;

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const productsData = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { productsData, bannerData },
  };
};

