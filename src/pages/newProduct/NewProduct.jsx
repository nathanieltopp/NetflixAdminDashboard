import "./newProduct.css";

export default function NewProduct() {
    return (
        <div className="newProduct">
            <h1 className="newProductHeading">New Product</h1>
            <form className="newProductForm">
                <label className="newProductFormLabel" htmlFor="file">Image</label>
                <input type="file" name="file" id="file" />
                <label className="newProductFormLabel" htmlFor="name">Name</label>
                <input className="newProductFormInput" type="text" id="name" placeholder="Apple Airpods"/>
                <label className="newProductFormLabel" htmlFor="stock">Stock</label>
                <input className="newProductFormInput" type="text" id="stock" placeholder="123"/>
                <label className="newProductFormLabel" htmlFor="stock">Active</label>
                <select className="newProductFormSelect">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <button className="newProductButton">Create</button>
            </form>
        </div>
    )
}
