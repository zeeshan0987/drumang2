import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";
// import { productData } from "../Products/index";
import Header from "../../Components/Admin/Header";
import Footer from "../../Components/Footer";
import Link from "next/link";
import Pagination from "../../Components/Pagination";
import { paginate } from "../../utils/paginate";
import Spinner from "react-bootstrap/Spinner";

const Products = () => {
  const [prodData, setProdData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  
  const pageSize = 10;

  const fetchProducts = async () => {
    const response = await fetch("/api/products");
    const data1 = await response.json();
    setProdData(data1);
    setLoading(false)
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    try {
      fetch(`/api/products/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      method: "DELETE",
      }).then(() => {
        fetchProducts();
      });
    } catch (error) {
      console.log(error); 
    }
  };

  const editProduct = async () => {
    // try {
    //   fetch(`/api/products/${143}`, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     method: "PUT",
    //     body : JSON.stringify(updatedData)
    //   }).then(() => {
    //     fetchProducts();
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginateProduct = paginate(prodData, currentPage, pageSize);

  // console.log(paginateProduct, "pagination");

  return (
    <>
      <Header />
      <section className="Users-main">
        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "2rem",
            width: "100%"
          }}
        >
          <h2>Products({prodData?.length})</h2>
          <Link
            className="login-btn"
            href="/Admin/Addproduct"
          >
            Add Product
          </Link>
        </div>
        {!loading ? (
        <table className="table"  >
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>CATEGORY</th>
              <th>BRAND</th>
              <th>ACTION</th>
            </tr>
          </thead>
          {Array.isArray(paginateProduct)
            ? paginateProduct?.map((item, index) => {
                return (
                  <>
                    <tbody style={{ textAlign: "center" }} key={item.id}>
                      <tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.category}</td>
                        <td>{item.brand}</td>
                        <td>
                          {/* <button
                            href={`/Addproduct/${item.prod_id}`}
                            className="cart-btn"
                            onClick={() => editProduct(item.prod_id)}
                          >
                            <FaEdit />
                          </button> */}
                          <button
                            className="cart-btn"
                            onClick={() => deleteProduct(item.prod_id)}
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </>
                );
              })
            : ""}
           
         
        </table>)  : (
          <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        )}
        <Pagination
            items={prodData?.length}
            currentPage={currentPage}
            pageSize={pageSize}
            onPageChange={handlePageChange}
          />
      </section>
      <Footer />
    </>
  );
};

export default Products;
