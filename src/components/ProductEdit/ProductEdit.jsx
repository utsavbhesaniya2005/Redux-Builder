import { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { findSingleProduct, getAsyncUpdate } from '../../services/actions/product.action';
import { useNavigate, useParams } from 'react-router';

const ProductEdit = () => {

    const product = useSelector(state => state.ProductReducers.product);

    const [formData, setFormData] = useState({
        id : '',
        pname: '',
        pcategory: '',
        price: '',
        stockQuan: '',
        desc: ''
    });
    
    const { id } = useParams();


    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getAsyncUpdate(formData))
        navigate('/');
    };

    useEffect(() => {
        dispatch(findSingleProduct(id))
    }, [])

    useEffect(() => {
        setFormData(product)
    }, [product])

    return(
        <>
            <Container>
                <h1 className="mt-3 my-5">Product Edit Form</h1>

                <Form onSubmit={handleSubmit}>

                    <Form.Group controlId="id">
                        <Form.Control className='fomr-control' type="text" name="id" value={id} onChange={handleChange} hidden/>
                    </Form.Group>

                    <Row className='mb-3'>
                        <Col md={8}>
                            <Form.Group controlId="pname">
                                <Form.Label>Product Name :</Form.Label>
                                <Form.Control className='fomr-control' type="text" placeholder="Enter Product Name" name="pname" value={formData.pname} onChange={handleChange} />
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group controlId="pcategory">
                                <Form.Label>Product Category :</Form.Label>
                                <Form.Control className='fomr-control' type="text" placeholder="Enter Product Category" name="pcategory" value={formData.pcategory} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className='mb-3'>
                        <Col md={4}>
                            <Form.Group controlId="price">
                                <Form.Label>Price :</Form.Label>
                                <Form.Control className='fomr-control' type="number" placeholder="Enter Product Price" name="price" value={formData.price} onChange={handleChange} />
                            </Form.Group>
                        </Col>

                        <Col md={8}>
                            <Form.Group controlId="stockQuan">
                                <Form.Label>Stock Quantity :</Form.Label>
                                <Form.Control className='fomr-control' type="text" placeholder="Enter Stock Quantity"
                                    name="stockQuan"
                                    value={formData.stockQuan}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className='mb-5'>
                        <Col md={12}>
                            <Form.Group controlId="desc">
                                <Form.Label>Description :</Form.Label>
                                <Form.Control className='fomr-control' as="textarea" rows={3} placeholder="Enter Product Description" name="desc" value={formData.desc} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}
export default ProductEdit;