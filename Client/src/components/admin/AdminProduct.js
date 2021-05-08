import  React,{useEffect} from 'react';
import { useSelector,useDispatch } from "react-redux";
import MaterialTable from 'material-table'
import { deleteProductById,getProducts } from '../../store/product/product.actions';
export function AdminProduct() {
    const products = useSelector(state => state.productReducer.products)
    const dispatch = useDispatch()
  
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
                        onClick: (event, rowData) => alert('has presionado para editar' + rowData.name)

                    },
                    {
                        icon: 'delete',
                        tooltip: 'delete',
                        onClick: (event, rowData) => {
                    
                            dispatch(deleteProductById(rowData.id))
                         
                        }

                    }
                ]}
            />
        </div>
    );
}

