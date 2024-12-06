import { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { getAsyncAdd } from '../../services/actions/product.action';
import { useNavigate } from 'react-router';

const ProductAdd = () => {

    const [formData, setFormData] = useState({
        id : '',
        pname: '',
        pcategory: '',
        price: '',
        stockQuan: '',
        desc: ''
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getAsyncAdd(formData))
        navigate('/');
        
    };

    return(
        <>
            <Container>
                <h1 className="mt-3 my-5">Product Add Form</h1>

                <Form onSubmit={handleSubmit}>
                    <Row className='mb-3'>
                        <Col md={8}>
                            <Form.Group controlId="pname">
                                <Form.Label>Name :</Form.Label>
                                <Form.Control className="form-control" type="text" placeholder="Enter Product Name" name="pname" value={formData.pname} onChange={handleChange} />
                            </Form.Group>
                        </Col>

                        <Col md={4}>
                            <Form.Group controlId="pcategory">
                                <Form.Label>Category :</Form.Label>
                                <Form.Control className="form-control" type="text" placeholder="Enter Product Category" name="pcategory" value={formData.pcategory} onChange={handleChange} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className='mb-3'>
                        <Col md={4}>
                            <Form.Group controlId="price">
                                <Form.Label>Price :</Form.Label>
                                <Form.Control className="form-control" type="number" placeholder="Enter Product Price" name="price" value={formData.price} onChange={handleChange} />
                            </Form.Group>
                        </Col>

                        <Col md={8}>
                            <Form.Group controlId="stockQuan">
                                <Form.Label>Stock Quantity :</Form.Label>
                                <Form.Control className="form-control" type="number" placeholder="Enter Stock Quantity"
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
                                <Form.Control className="form-control" as="textarea" rows={3} placeholder="Enter Product Description" name="desc" value={formData.desc} onChange={handleChange} />
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
export default ProductAdd;