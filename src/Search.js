import { useState } from "react";
import axios from "axios";
import Data from "./Data";
const Search = () => {

    const [searchInput, setSearchInput] = useState("");
    const [foods, setFoods] = useState([]);

    const search = () => {
        const options = {
            method: 'GET',
            url: `https://trackapi.nutritionix.com/v2/search/instant?query=${searchInput}&branded=true&common=true&detailed=true`,
            headers: {
                'content-type': 'application/json',
                'x-app-id': 'ee072628',
                'x-app-key': 'e04e60988d55ac6b35a6bf113c0cb0e8'
            }
        };

        axios.request(options).then((response) => {
            console.log(response.data.common)
            setFoods(response.data.branded)
            
        }).catch((error) => {
            console.error(error);
        })
    }

    const handleChange = (e) => {

        e.preventDefault();
        setSearchInput(e.target.value);
    };

    return (
        <div className="content">
            <h1 className="searchLabel">Search for any kind of food</h1>
            <div className="food-search">
                <input
                    className="text-input"
                    type="text"
                    placeholder="Type Your Food Here"
                    onChange={handleChange}
                    value={searchInput}
                />
                <button onClick={search} className="searchButton">Search Food</button>
            </div>
        <Data foods={foods} />
        </div>
    )
}

export default Search;