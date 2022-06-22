import {useSelector} from "react-redux";
import Bucket from "../../component/bucket/bucket";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router";

const Buckets = () => {
    const navigate=useNavigate()
    const bucket=useSelector(state => state.bucket.itemsList)
    let total = 0;
    bucket.forEach(item=>{
        total += item.totalPrice
    })
    const backToHomeHandler = () => {
      navigate('/')
    }

    return(
    <div >
        {bucket.map((item)=>
           <Bucket
               key={item.id}
               id={item.id}
               name={item.name}
               price={item.price}
               image={item.image}
               quantity={item.quantity}
           />
        )}
        <Button className='float-end back-btn' onClick={backToHomeHandler}>Back</Button>
        <p className='mx-5 total-price'>total price: {total}</p>
</div>
)
}
export default Buckets