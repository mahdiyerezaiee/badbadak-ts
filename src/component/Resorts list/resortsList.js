import {Button, Card, CardImg, PageItem, Pagination} from "react-bootstrap";
import {Link} from "react-router-dom";
const ResortsList = ({id, name, image, description, price}) => {
    return (
        <Card key={id} className="my-3 p-3 card">
            <Link to={`/resorts/${id}`}>

                <CardImg src={image} variant="top" className='img-fluid shadow-4 rounded'/>

            </Link>
            <Card.Body className="text-center px-4 position-relative z-index-2 mt-n3n  ">
                <Card.Title as="div">{name}</Card.Title>
            </Card.Body>
            <Card.Body className="text-center px-4 position-relative z-index-2 mt-n3n  ">
                {description.substring(0, 50)}
            </Card.Body>

            <Card.Text as="h4" className="text-center  ">{price} </Card.Text>
            <Card.Body className="text-center px-4 position-relative z-index-2 mt-n3n btn_info ">

                <Link to={`/resorts/${id}`}><Card.Title
                    className="  text-center " as="div">Detail  </Card.Title></Link>
            </Card.Body>
        </Card>

    )
}
export default ResortsList