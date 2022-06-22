import {useDispatch, useSelector} from "react-redux";
import {Col, Image, Row} from "react-bootstrap";
import {bucketActions} from "../../reducer/BucketReducer";
import './bucket.css'
const Bucket = ({image,name, id, price , quantity}) => {
    const dispatch=useDispatch()
const removeHandler = () => {
    dispatch(bucketActions.minusFromCart(id));

}
const deleteHandler = () => {
  dispatch(bucketActions.delete(id))
}
const addHandler = () => {
  dispatch(bucketActions.addToBucket({
      id,
      name,
      price,
      image,
  })
  )
}
  return(
      <div className="container">
            <Row>
            <div className='col-12 my-3 bucket-bg'  >
             <Row>
                 <div className='col-3'><Image  fluid width={150} height={150} src={image}/> </div>
                 <div className='col-1 m-auto'><p className="">{name}</p></div>
                 <div className='col-2 m-auto'><p>{price} $</p></div>
                 <div className='col-3 m-auto'>
                     <i  onClick={addHandler} className='fa fa-plus mx-3'></i>
                  {quantity}
                      <i onClick={removeHandler} className='fa fa-minus mx-3'></i>
                 </div>
                 <div onClick={deleteHandler}  className='col-3 m-auto'><i className='fa fa-trash'></i> </div>
             </Row>
            </div>
            </Row>
      </div>
  )
}
export default Bucket