import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { FaRegStar, FaCartPlus } from "react-icons/fa";
import Link from "next/link";
import Layout from "../../Components/Layout";
import { PrismaClient } from "@prisma/client";

export async function getStaticProps() {


  const response = await fetch('https://cms.maitretech.com//zebacms/items/products?fields=*.*') 
  const data3 = await response.json()

  return {
    props: {
      data3,
    },
    revalidate: 10,
  };
}

const Products = ({ data3 }) => {

  const categoryData1 = [
    {
      name: "All",
      id: "0",
    },
    {
      name: "cream",
      id: "1",
    },
    {
      name: "lotion",
      id: "2",
    },
    {
      name: "powder",
      id: "3",
    },
    {
      name: "oil",
      id: "4",
    },
  ];


  const handleChange = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
  };

  const [prodData, setProdData] = useState(data3);
  const [categoryData, setCategoryData] = useState(false);

  const filteredData = data3?.data?.filter(
    (item) => item?.category.toLowerCase() === categoryData?.category
  );
  if (categoryData?.category == "All") {
    setCategoryData(false);
  }


  return (
    <>
      <Layout>
        <section className="products-main">
          <div className="dropdown">
            <label>Category</label>
            <select
              onChange={(e) => {
                handleChange(e);
              }}
              name="category"
            >
              {categoryData1.map((item) => {
                return (
                  <option value={item.name} key={item.id}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="products-main-1">
            {categoryData
              ? filteredData?.map((item) => {
                return (
                  <ul className="cards" key={item.id}>
                    {/* {console.log(item.prod_id)} */}
                    <Link className="cards_item" href={`Products/${item.id}`}>
                      <div className="card">
                        <div className="card_image">
                          <img src={item.product_image?.data?.full_url} />
                        </div>
                        <div className="card_content">
                          <h3>{item.brand}</h3>
                          <h2 className="card_title">{item.product_name}</h2>
                          <h5>Rs. {item.product_price}</h5>
                        </div>
                      </div>
                    </Link>
                  </ul>
                );
              })
              : prodData?.data?.map((item) => {
                return (
                  <ul className="cards" key={item?.id}>
                    <Link className="cards_item" href={`Products/${item.id}`}>
                      <div className="card">
                        <div className="card_image">
                          <img src={item.product_image?.data?.full_url} />
                        </div>
                        <div className="card_content">
                          <h3>{item.brand}</h3>
                          <h2 className="card_title">{item.product_name}</h2>
                          <h5>Rs. {item.product_price}</h5>
                        </div>
                      </div>
                    </Link>
                  </ul>
                );
              })}
               <img src="./images/Dhan.jpeg" alt="Dhan"style={{opacity : "0.002",width : "300px" , position : "absolute" }}/>

          </div>
        </section>
      </Layout>
    </>
  );
};

export default Products;
