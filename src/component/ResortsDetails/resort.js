import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import ResortDetail from "../../pages/resortDetail/resortDetail";
const ResortDetails = () => {
    const params = useParams()
    const {id: resortId} = params
    const resortList = useSelector(state => state.resort.resorts.filter(resort => resort._id === resortId))
    return (
        <div className=" container">
            {resortList.map((resortList) =>
                <ResortDetail
                    key={resortList._id}
                    id={resortList._id}
                    name={resortList.name}
                    price={resortList.price}
                    description={resortList.description}
                    image={resortList.image}
                />
            )}

        </div>
    )

}
export default ResortDetails