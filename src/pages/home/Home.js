import ResortsList from "../../component/Resorts list/resortsList";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";

import './home.css'
import {Row , Form} from "react-bootstrap";
const Home = () => {
    const usersPerPage = 6;
    const [pageNumber, setPageNumber] = useState(0);
    const resortList = useSelector(state => state.resort.resorts)
    const [selectedPrice, setSelectedPrice] = useState("");
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('');
    const [resorts, setResorts] = useState(resortList.slice(0, 20));
    const pagesVisited = pageNumber * usersPerPage;
    const pageCount = Math.ceil(resorts.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };
    const filterByBrand = (filteredData) => {
        // Avoid filter for empty string
        if (!selectedPrice) {
            return filteredData;
        }
        const filteredCars = filteredData.filter(
            (resort) => resort.name.split(" ").indexOf(selectedPrice) !== -1
        );
        return filteredCars;
    };
    const handleBrandChange = (event) => {
        setSelectedPrice(event.target.value);
    };
    useEffect(() => {
        const sortArray = type => {
            const types = {
                name: 'name',
                price: 'price',
            };
            const sortProperty = types[type];
            const sorted = [...resortList].sort((a, b) => a[sortProperty] > b[sortProperty]? 1:-1);
            setResorts(sorted);
        };
        sortArray(sortType);
    }, [sortType]);
    useEffect(() => {
            var filteredData = filterByBrand(resortList);
            setResorts(filteredData);
        },
        [selectedPrice])

    return (
        <div className="container">
            <Row>
                <label className=' col-1 label-item'>filterByname: </label>
                <Form.Select
                    className='select-item'
                    id="brand-input"
                    value={selectedPrice}
                    onChange={handleBrandChange}
                >
                    <option value="">All</option>
                    <option value="Phu">Phu Quoc</option>
                    <option value="Hurghada">Hurghada</option>
                    <option value="Orlando">Orlando</option>
                    <option value="Sharm">Sharm El Sheikh</option>
                </Form.Select>
            <label className='col-1 label-item'>sortBy: </label>
           <Form.Select  className=' select-item' onChange={(e) => setSortType(e.target.value)}>
                <option value="price">price</option>
                <option value="name">name</option>
            </Form.Select>
            </Row>
            <Row>
                {resorts.slice(pagesVisited, pagesVisited + usersPerPage).map((item) =>
                    <div key={item._id} className="col-4">
                        <ResortsList
                            id={item._id}
                            description={item.description}
                            image={item.image}
                            price={item.price}
                            name={item.name}
                        />
                    </div>
                )}
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                />
            </Row>
        </div>
    )

}
export default Home