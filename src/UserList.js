import React, { useEffect, useState } from "react";
import axios from "axios";

import img1 from "./Img/img1.jpg";
import img2 from "./Img/img2.jpg";
import img3 from "./Img/img3.jpg";
import img4 from "./Img/img4.jpg";
import img5 from "./Img/img5.jpg";
import img6 from "./Img/img6.jpg";
import img7 from "./Img/img7.jpg";
import img8 from "./Img/img8.jpg";
import img9 from "./Img/img9.jpg";
import img10 from "./Img/img10.jpg";

import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserList() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [listOfUSer, setListOfUSer] = useState([]); // where to store the returned data
    const [errorData, setErrorData] = useState(null); // where to store the coming errors
    function fetchData() {
        // the function to  get data from the api
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then(function (response) {
                setListOfUSer(response.data);
            })
            .catch(function (error) {
                // handle error
                setErrorData(error);
                console.log(errorData);
            });
    }
    useEffect(() => {
        fetchData();
    });
    return (
        <div>
            <ul>
                {listOfUSer.map((user) => (
                    <li key={user.id}>
                        <div className="user">
                            <div className="img-container">
                                {user.id === 1 ? (
                                    <img src={img1} className="userimg" alt="" />
                                ) : null}
                                {user.id === 2 ? (
                                    <img src={img2} className="userimg" alt="" />
                                ) : null}
                                {user.id === 3 ? (
                                    <img src={img3} className="userimg" alt="" />
                                ) : null}
                                {user.id === 4 ? (
                                    <img src={img4} className="userimg" alt="" />
                                ) : null}
                                {user.id === 5 ? (
                                    <img src={img5} className="userimg" alt="" />
                                ) : null}
                                {user.id === 6 ? (
                                    <img src={img6} className="userimg" alt="" />
                                ) : null}
                                {user.id === 7 ? (
                                    <img src={img7} className="userimg" alt="" />
                                ) : null}
                                {user.id === 8 ? (
                                    <img src={img8} className="userimg" alt="" />
                                ) : null}
                                {user.id === 9 ? (
                                    <img src={img9} className="userimg" alt="" />
                                ) : null}
                                {user.id === 10 ? (
                                    <img src={img10} className="userimg" />
                                ) : null}
                                <div className="inner-img-container"></div>
                            </div>
                            <div className="sidebox">
                                <span className="spanstyle1">
                                    <b>{user.name}</b>
                                </span>
                                <br></br>
                                <span className="spanstyle2">Email:<br />{user.email}</span>
                                {user.id === 1 ? (
                                    <>
                                        <Button variant="primary" onClick={handleShow}>
                                            More details
                                        </Button>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{user.name} details:</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                            <h6>Adress:</h6>
                                            Street: {user.address.street}<br />
                                            Suite: {user.address.suite}<br />
                                            City: {user.address.city}<br />
                                            Zipcode: {user.address.zipcode} <br />
                                            <h6>Contact information:</h6> 
                                            Phone: {user.phone}<br />
                                            Website: {user.website}<br />
                                            <h6>Company:</h6>
                                            Company name: {user.company.name}<br />
                                            CatchPhrase: {user.company.catchPhrase}<br />
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                            </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </>
                                ) : null}
                                {user.id === 2 ? (
                                    <>
                                        <Button variant="primary" onClick={handleShow}>
                                            More details
                                        </Button>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{user.name} details:</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                            <h6>Adress:</h6>
                                            Street: {user.address.street}<br />
                                            Suite: {user.address.suite}<br />
                                            City: {user.address.city}<br />
                                            Zipcode: {user.address.zipcode} <br />
                                            <h6>Contact information:</h6> 
                                            Phone: {user.phone}<br />
                                            Website: {user.website}<br />
                                            <h6>Company:</h6>
                                            Company name: {user.company.name}<br />
                                            CatchPhrase: {user.company.catchPhrase}<br />
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                            </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </>
                                ) : null}
                                {user.id === 3 ? (
                                    <>
                                        <Button variant="primary" onClick={handleShow}>
                                            More details
                                        </Button>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{user.name} details:</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                            <h6>Adress:</h6>
                                            Street: {user.address.street}<br />
                                            Suite: {user.address.suite}<br />
                                            City: {user.address.city}<br />
                                            Zipcode: {user.address.zipcode} <br />
                                            <h6>Contact information:</h6> 
                                            Phone: {user.phone}<br />
                                            Website: {user.website}<br />
                                            <h6>Company:</h6>
                                            Company name: {user.company.name}<br />
                                            CatchPhrase: {user.company.catchPhrase}<br />
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                            </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </>
                                ) : null}
                                {user.id === 4 ? (
                                    <>
                                        <Button variant="primary" onClick={handleShow}>
                                            More details
                                        </Button>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{user.name} details:</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                            <h6>Adress:</h6>
                                            Street: {user.address.street}<br />
                                            Suite: {user.address.suite}<br />
                                            City: {user.address.city}<br />
                                            Zipcode: {user.address.zipcode} <br />
                                            <h6>Contact information:</h6> 
                                            Phone: {user.phone}<br />
                                            Website: {user.website}<br />
                                            <h6>Company:</h6>
                                            Company name: {user.company.name}<br />
                                            CatchPhrase: {user.company.catchPhrase}<br />
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                            </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </>
                                ) : null}
                                {user.id === 5 ? (
                                    <>
                                        <Button variant="primary" onClick={handleShow}>
                                            More details
                                        </Button>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{user.name} details:</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                            <h6>Adress:</h6>
                                            Street: {user.address.street}<br />
                                            Suite: {user.address.suite}<br />
                                            City: {user.address.city}<br />
                                            Zipcode: {user.address.zipcode} <br />
                                            <h6>Contact information:</h6> 
                                            Phone: {user.phone}<br />
                                            Website: {user.website}<br />
                                            <h6>Company:</h6>
                                            Company name: {user.company.name}<br />
                                            CatchPhrase: {user.company.catchPhrase}<br />
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                            </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </>
                                ) : null}
                                {user.id === 6 ? (
                                    <>
                                        <Button variant="primary" onClick={handleShow}>
                                            More details
                                        </Button>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{user.name} details:</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                            <h6>Adress:</h6>
                                            Street: {user.address.street}<br />
                                            Suite: {user.address.suite}<br />
                                            City: {user.address.city}<br />
                                            Zipcode: {user.address.zipcode} <br />
                                            <h6>Contact information:</h6> 
                                            Phone: {user.phone}<br />
                                            Website: {user.website}<br />
                                            <h6>Company:</h6>
                                            Company name: {user.company.name}<br />
                                            CatchPhrase: {user.company.catchPhrase}<br />
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                            </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </>
                                ) : null}
                                {user.id === 7 ? (
                                    <>
                                        <Button variant="primary" onClick={handleShow}>
                                            More details
                                        </Button>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{user.name} details:</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                            <h6>Adress:</h6>
                                            Street: {user.address.street}<br />
                                            Suite: {user.address.suite}<br />
                                            City: {user.address.city}<br />
                                            Zipcode: {user.address.zipcode} <br />
                                            <h6>Contact information:</h6> 
                                            Phone: {user.phone}<br />
                                            Website: {user.website}<br />
                                            <h6>Company:</h6>
                                            Company name: {user.company.name}<br />
                                            CatchPhrase: {user.company.catchPhrase}<br />
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                            </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </>
                                ) : null}
                                {user.id === 8 ? (
                                    <>
                                        <Button variant="primary" onClick={handleShow}>
                                            More details
                                        </Button>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{user.name} details:</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                            <h6>Adress:</h6>
                                            Street: {user.address.street}<br />
                                            Suite: {user.address.suite}<br />
                                            City: {user.address.city}<br />
                                            Zipcode: {user.address.zipcode} <br />
                                            <h6>Contact information:</h6> 
                                            Phone: {user.phone}<br />
                                            Website: {user.website}<br />
                                            <h6>Company:</h6>
                                            Company name: {user.company.name}<br />
                                            CatchPhrase: {user.company.catchPhrase}<br />
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                            </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </>
                                ) : null}
                                {user.id === 9 ? (
                                    <>
                                        <Button variant="primary" onClick={handleShow}>
                                            More details
                                        </Button>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{user.name} details:</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                            <h6>Adress:</h6>
                                            Street: {user.address.street}<br />
                                            Suite: {user.address.suite}<br />
                                            City: {user.address.city}<br />
                                            Zipcode: {user.address.zipcode} <br />
                                            <h6>Contact information:</h6> 
                                            Phone: {user.phone}<br />
                                            Website: {user.website}<br />
                                            <h6>Company:</h6>
                                            Company name: {user.company.name}<br />
                                            CatchPhrase: {user.company.catchPhrase}<br />
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                            </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </>
                                ) : null}
                                {user.id === 10 ? (
                                    <>
                                        <Button variant="primary" onClick={handleShow}>
                                            More details
                                        </Button>
                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>{user.name} details:</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                            <h6>Adress:</h6>
                                            Street: {user.address.street}<br />
                                            Suite: {user.address.suite}<br />
                                            City: {user.address.city}<br />
                                            Zipcode: {user.address.zipcode} <br />
                                            <h6>Contact information:</h6> 
                                            Phone: {user.phone}<br />
                                            Website: {user.website}<br />
                                            <h6>Company:</h6>
                                            Company name: {user.company.name}<br />
                                            CatchPhrase: {user.company.catchPhrase}<br />
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={handleClose}>
                                                    Close
                                            </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </>
                                ) : null}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default UserList;