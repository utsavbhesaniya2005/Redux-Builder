/* eslint-disable no-undef */
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getAllData, getAsyncDelete } from '../../services/actions/product.action'
import { useEffect } from 'react';

const ProductDashboard = () => {

    const { allProducts, isLoading} = useSelector(state => state.ProductReducers);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    const handleDelete = (id) => {
        dispatch(getAsyncDelete(id))
    }    

    useEffect(() => {
        dispatch(getAllData())
    }, [])

    return(
        <>
            <h1 className='my-3'>Product Dashboard</h1>
            {
                isLoading 
                ?   
                <div className="loader">
                    <div className="loader-inner">
                        <div className="loader-line-wrap">
                        <div className="loader-line"></div>
                        </div>
                        <div className="loader-line-wrap">
                        <div className="loader-line"></div>
                        </div>
                        <div className="loader-line-wrap">
                        <div className="loader-line"></div>
                        </div>
                        <div className="loader-line-wrap">
                        <div className="loader-line"></div>
                        </div>
                        <div className="loader-line-wrap">
                        <div className="loader-line"></div>
                        </div>
                    </div>
                    </div>
                :
                <div className="container">
                    <div className="row ">
                        {
                            allProducts.map((data, index) => (
                                <div className="col-4" key={index}>
                                    <div className="bg-black text-white rounded pb-3 card mt-5">
                                        <div className="grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                                            <div>
                                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-3">Product Details</h2>

                                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8 mb-3">
                                                    <div className="border-t text-left border-gray-200 pt-4">
                                                        <h6 className="text-gray-900">
                                                            <span style={{fontSize : '20px'}}>Name :</span> {data.pname}</h6>
                                                        <h6  className="mt-2 text-gray-500">
                                                            <span style={{fontSize : '20px'}}>Category : </span>
                                                            {data.pcategory}</h6>
                                                        <h6  className="mt-2 text-gray-500">
                                                            <span style={{fontSize : '20px'}}>Price : </span>
                                                            {data.price}</h6>
                                                        <h6  className="mt-2 text-gray-500">
                                                            <span style={{fontSize : '20px'}}>In Stock Available : </span>
                                                            {data.stockQuan}</h6>
                                                        <h6  className="mt-2 text-gray-500">
                                                            <span style={{fontSize : '20px'}}>Description : </span>
                                                            {data.desc}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8 mt-3">
                                                <img
                                                    alt="Product-image"
                                                    src="../../src/assets/product-image.jpg"
                                                    className="rounded-lg bg-gray-100 mt-3" height="200" width="100%"
                                                />
                                            </div>
                                            <div className="btns mt-4">
                                                <Button variant='primary' className='me-4' onClick={() => handleEdit(data.id)}>Edit</Button>
                                                || <Button variant='danger' className='ms-4' onClick={() => handleDelete(data.id)}>Delete</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            }
            
        </>
    )
}
export default ProductDashboard;