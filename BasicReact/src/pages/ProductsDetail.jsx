import {useParams} from "react-router-dom";

function ProductsDetail() {

    const { id } = useParams();

    return (
        <div style={{ backgroundColor: "lightsteelblue", padding: "20px" }}>
            <h2>Ini Halaman Products Detail dengan ID {id}</h2>
        </div>
    );
}

export default ProductsDetail;