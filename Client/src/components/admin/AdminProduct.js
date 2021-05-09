import  React,{useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import MaterialTable from 'material-table'
import { deleteProductById,getProducts } from '../../store/product/product.actions';
import { useHistory } from "react-router-dom"

export function AdminProduct() {
    const products = useSelector(state => state.productReducer.products)
    const dispatch = useDispatch()
    const history = useHistory ();
  
    useEffect(() => {
        dispatch(getProducts())        
    }, [])

    return (
        <div style={{ maxWidth: "100%" }}>
            <MaterialTable
                columns={[
                    { title: "ID", field: "id" },
                    { title: "Name", field: "name" },
                    //{ title: "Description", field: "description" },
                    { title: "Price", field: "price", type: "numeric" },
                    { title: "Stock", field: "stock", type: "numeric" },
                ]}
                data={products}
                title="Products"
                actions={[
                    {
                        icon: 'edit',
                        tooltip: 'edita',
                        onClick: (event, rowData) => history.push ('/editProduct/'+ rowData.id)

                    },
                    {
                        icon: 'delete',
                        tooltip: 'delete',
                        onClick: (event, rowData) => {dispatch(deleteProductById(rowData.id))                         
                        }

                    }
                ]}
            />
        </div>
    );
}

