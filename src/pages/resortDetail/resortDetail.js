import {Button, Col, Nav, Row, Tab, Sonnet, Tabs} from "react-bootstrap";
import {bucketActions} from "../../reducer/BucketReducer";
import {useDispatch} from "react-redux";
import './resortDetail.css'

const ResortDetail = ({id, name, price, image, description}) => {
    const dispatch = useDispatch()

    const addToCartHandler = () => {
        dispatch(bucketActions.addToBucket({
            id,
            name,
            price,
            image,
            })
        );

    }
  return(
              <Row className='my-3'>
                  <div className="col-5 mx-3">
                      <img className='img-fluid'  width={300} height={300} src={image}/>
                  </div>
                  <div className="col-6">
                      <p className='text-md-start'>{name}</p>
                      <p className='text-md-start'>{price}</p>
                      <Button className='float-start' onClick={addToCartHandler}>add to  cart</Button>
                  </div>
                  <div className=' col-12 mx-3 detail-resorts'>
                      <Tabs
                          defaultActiveKey="detail"
                          transition={false}
                          id="noanim-tab-example"
                          className="mb-3"
                      >
                          <Tab eventKey="detail" title="detail">
                              {description}

                          </Tab>

                      </Tabs>
                  </div>
              </Row>

  )
}
export default ResortDetail