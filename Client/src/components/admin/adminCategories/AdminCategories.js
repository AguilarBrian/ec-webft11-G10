import React from 'react';
import AddCategory from './AddCategory'
import DeleteCategory from './DeleteCategory'
import EditCategory from './EditCategory'

function AdminCategories(props) {
    return (
        <div>
            <AddCategory/>
            <DeleteCategory/>
            <EditCategory/>
        </div>
    );
}

export default AdminCategories;