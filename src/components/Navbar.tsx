import {Container,Nav,Navbar as Navbarbs} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar () {

    const {openCart , cartQuantity} = useShoppingCart()
    return <Navbarbs sticky="top" className="bg-white shadow-sm mb-3">
        <Container> 

        <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink} >Home</Nav.Link>
            <Nav.Link to="/store" as={NavLink} >Store</Nav.Link>
            <Nav.Link to="/about" as={NavLink} >About</Nav.Link>
        </Nav>
        {cartQuantity>0 && (
        <button  onClick={openCart}>
            <img width="50" height="50" src="https://img.icons8.com/ios/50/shopping-cart--v1.png" alt="shopping-cart--v1"/>
            
            <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
                color:"white",
                width:"1.5rem",
                height:"1.5rem",
                position : "absolute",
                bottom : 0,
                right: 0,
            }}
            >
                {cartQuantity}
            </div>
            </button>
        )}
        </Container>
    </Navbarbs>
}