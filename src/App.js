import './App.css';
import Header from "./component/header/header";
import ResortsList from "./component/Resorts list/resortsList";
import Home from "./pages/home/Home";
import {Route , Routes} from "react-router";
import ResortDetail from "./component/ResortsDetails/resort";
import Buckets from "./pages/bucket/buckets";
function App() {

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/resorts/:id" element={<ResortDetail/>}/>
                <Route path="/bucket" element={<Buckets/>}/>

            </Routes>
        </div>
    );
}

export default App;
