import "./userlist.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";


export default function UserList() {
    const [data, setData] = useState(userRows)
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width:200, renderCell: (params) => {
            return (
                <div className="userListUser">
                    <img className="userListImage" src={params.row.avatar} alt="" />
                    {params.row.userName}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 200 },
        {field: 'status', headerName: 'Status', width: 120},
        {field: 'transaction', headerName: 'Transaction Volune', width: 160},
        {field: 'action', headerName: 'Actions', width: 150, renderCell: (params) => {
            return (
                <>
                    <Link to={`/users/${params.row.id}`}>
                        <button className="userListEdit">Edit</button>
                    </Link> 
                    <DeleteOutline className="userListDelete" onClick={() => handleDelete(params.row.id)} />
                </>
            )
        }},
        // {
        //   field: 'fullName',
        //   headerName: 'Full name',
        //   description: 'This column has a value getter and is not sortable.',
        //   sortable: false,
        //   width: 160,
        // },
      ];

      function handleDelete(id) {
          setData(data.filter(d => d.id != id));
      }

    return (
        <div className="userList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
