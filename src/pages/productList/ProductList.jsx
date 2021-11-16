import "./productList.css";
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ProductList() {
    const [data, setData] = useState(productRows);

    function handleDelete(id) {
        setData(data.filter(d => d.id !== id));
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Product', width:200, renderCell: (params) => {
            return (
                <div className="productListItem">
                    <img className="productListImage" src={params.row.img} alt="" />
                    {params.row.name}
                </div>
            )
        } },
        { field: 'stock', headerName: 'Stock', width: 200 },
        {field: 'status', headerName: 'Status', width: 120},
        {field: 'price', headerName: 'Price Volune', width: 160},
        {field: 'action', headerName: 'Actions', width: 150, renderCell: (params) => {
            return (
                <>
                    <Link to={`/products/${params.row.id}`}>
                        <button className="productListEdit">Edit</button>
                    </Link> 
                    <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)} />
                </>
            )
        }}
      ];

    return (
        <div className="productList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[8]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
