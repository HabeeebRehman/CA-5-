import React from'react';
import { Route ,Routes } from 'react-router-dom';
import Form from '../components/pages/form';
import Books from '../components/pages/Books';

const AllRoutes = () => {
    return (
        <div>
            <Routes>
            <Route path="/" element={<Books/>} />
            <Route path="/form" element={<Form/>} />
            <Route path="/Books" element={<Books/>} />
            </Routes>
        </div>
    );
};
export default AllRoutes;