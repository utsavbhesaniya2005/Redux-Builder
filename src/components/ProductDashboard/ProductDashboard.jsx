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
                                                <Button variant='primary' className='me-5 ms-5 p-2' onClick={() => handleEdit(data.id)}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" height="30" fill='#ffffff'><path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-96c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 96c0 17.7-14.3 32-32 32L96 448c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 64z"/></svg>    
                                                </Button> || 
                                                <Button variant="danger" className='ms-5 p-2' onClick={() => { 
                                                setProductIdToDelete(data.id);
                                                setModalShow(true); }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="30" fill='#ffffff'><path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0L284.2 0c12.1 0 23.2 6.8 28.6 17.7L320 32l96 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 96C14.3 96 0 81.7 0 64S14.3 32 32 32l96 0 7.2-14.3zM32 128l384 0 0 320c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64l0-320zm96 64c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16l0 224c0 8.8 7.2 16 16 16s16-7.2 16-16l0-224c0-8.8-7.2-16-16-16z" /></svg>
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