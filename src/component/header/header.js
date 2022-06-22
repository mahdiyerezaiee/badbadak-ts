import {Container, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import './header.css'
const Header = () => {
    const bucketItem = useSelector(state => state.bucket.totalQuantity)
    return (

        <Navbar  bg="dark" variant="dark">
        <Container>
            <Link className="brand-link" to="/">
            <Navbar.Brand href="">Travel agency</Navbar.Brand>
            </Link>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Link  to='/bucket'><i className="fa fa-shopping-cart"><p className="bucket-item">{bucketItem}</p></i></Link>
                </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>)
}
export default Header