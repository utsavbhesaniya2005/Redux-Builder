/* eslint-disable no-undef */
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { getAllData, getAsyncDelete } from '../../services/actions/product.action'
import React, { useEffect, useState } from 'react';

function MyVerticallyCenteredModal({ show, onHide, handleDelete, productId }) {
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton className='justify-content-center'>
                <Modal.Title id="contained-modal-title-vcenter" className='text-black'>
                    Delete Confirmation !!!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className='text-black text-center'>
                <img src='../src/assets/close-btn.png' className='close mx-auto mb-4 mt-3' alt='Close Button'></img>
                <p className='close-desc'>
                    Are you Sure You Want To Delete This Product? <br /> This Process Cannot Be Undone.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
                <Button onClick={() => handleDelete(productId)} variant='danger'>Delete</Button>
            </Modal.Footer>
        </Modal>
    );
}

const ProductDashboard = () => {

    const { allProducts, isLoading} = useSelector(state => state.ProductReducers);
    const [modalShow, setModalShow] = React.useState(false);
    const [productIdToDelete, setProductIdToDelete] = useState(null); 

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    const handleDelete = (id) => {
        dispatch(getAsyncDelete(id))
        setModalShow(false)
        dispatch(getAllData())
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
                    <div className="row">
                        {
                            allProducts.map((data, index) => (
                                <div className="col-4" key={index}>
                                    <div className="bg-black text-white rounded pb-3 card mt-5">
                                        <div className="grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-8 px-4 py-4 sm:px-6 lg:max-w-7xl lg:px-8">
                                            <div>
                                                <h2 className="text-3xl font-bold tracking-tight text-white-900 sm:text-4xl mt-3 border-b pb-4">Product Details</h2>

                                                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:gap-y-16 lg:gap-x-8 mb-3">
                                                    <div className="text-left border-white-200 pt-4 w-100">
                                                        <h6 className="text-white-900">
                                                            <span style={{fontSize : '20px'}}>Name :</span> {data.pname}</h6>
                                                        <h6  className="mt-2 text-white-500">
                                                            <span style={{fontSize : '20px'}}>Category : </span>
                                                            {data.pcategory}</h6>
                                                        <h6  className="mt-2 text-white-500">
                                                            <span style={{fontSize : '20px'}}>Price : </span>
                                                            {data.price}</h6>
                                                        <h6  className="mt-2 text-white-500">
                                                            <span style={{fontSize : '20px'}}>In Stock Available : </span>
                                                            {data.stockQuan}</h6>
                                                        <h6  className="mt-2 text-white-500">
                                                            <span style={{fontSize : '20px'}}>Description : </span>
                                                            {data.desc}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8 mt-3">
                                                <img
                                                    alt="Product-image"
                                                    src="../../src/assets/product-image.jpg"
                                                    className="rounded-lg bg-white-100 mt-3" height="200" width="100%"
                                                />
                                            </div>
                                            <div className="btns flex text-center mt-4">
                                                <Button variant='primary' className='me-5 ms-5' onClick={() => handleEdit(data.id)}>Edit</Button> ||  
                                                {/* || <Button variant='danger' className='ms-5' onClick={() => handleDelete(data.id)}>Delete</Button> */}
                                                <Button variant="danger" className='ms-5' onClick={() => { 
                                                setProductIdToDelete(data.id);
                                                setModalShow(true); }}>
                                                    Delete
                                                </Button>
                                                <MyVerticallyCenteredModal 
                                                    show={modalShow}
                                                    onHide={() => setModalShow(false)}
                                                    handleDelete={handleDelete}
                                                    productId={productIdToDelete}
                                                />
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