import React, { useState, useEffect } from "react";
import Styles from "./SearchLocation.module.scss";
import Location from "./Location/Location"
import DropDown from "./DropDown/DropDown";

const SearchLocation = (props) => {

    const [possibleLocations, setPossibleLocations] = useState([]);
    const [searchField, changeSearchField] = useState("");
    const [dropDown, dropDownStatus] = useState(false)

    useEffect(() => {
        (async () => {
            if (searchField.length === 3) {
                await populatePossibleLocations(searchField);
                dropDownStatus(true);
            }
            if (searchField.length < 3) {
                dropDownStatus(false)
            }
            if (searchField.length > 3){
                setPossibleLocations(possibleLocations
                    .filter(location => location.title.toLowerCase().includes(searchField.toLowerCase())))
            }
        })();

    }, [searchField])

    const onChangeSearchField = (e) => {
        if (e.target.value.match(/^[a-zA-Z\s]*$/)){
            changeSearchField(e.target.value);
        }
    }

    function clearSearch() {
        changeSearchField("");
        dropDownStatus(false);
    }

    const locations = possibleLocations.map(location => <Location key={location.woeid}
        location={location}
        clearSearch={clearSearch} />)

    async function populatePossibleLocations(keyword) {
        const response = await fetch(`weatherforecast/${keyword}`);
        const data = await response.json();
        // let temp = [{"title":"Salvador","location_type":"City","woeid":455826,"latt_long":"-12.97002,-38.504559"},{"title":"Salt Lake City","location_type":"City","woeid":2487610,"latt_long":"40.759499,-111.888229"},{"title":"Salford","location_type":"City","woeid":33887,"latt_long":"53.489731,-2.2843"}]
        setPossibleLocations(data);
        // setPossibleLocations(temp);
    }

    return (
        <div className={Styles.wrapper}>
            <input onChange={onChangeSearchField}
                type="text"
                value={searchField}
                placeholder="Search Location..." />
            {dropDown && <DropDown locations={locations} />}
        </div>
    );
}

export default SearchLocation;