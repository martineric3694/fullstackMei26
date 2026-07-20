import {useState,useEffect} from "react";
import Table from 'react-bootstrap/Table';

function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data.products));
    }, []);

    return (
        <div style={{  padding: "20px" }}>
            <h2>Ini Halaman Products</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>SKU</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.brand}</td>
                            <td>{product.sku}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>            
        </div>
    );
}

export default Products;