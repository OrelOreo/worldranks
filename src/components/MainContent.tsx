import { useState, useEffect } from "react"
import TCountry from "../types/TCountry"
import Search from "./Search"
import Select from "./Select"
import RegionList from "./RegionList"
import CheckBoxStatus from "./CheckBoxStatus"
import CountryArray from "./CountryTable"
function MainContent() {

    const [countries, setCountries] = useState<TCountry[]>([])


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                // console.log("🚀 ~ useEffect ~ data:", data)

                setCountries(data)
                // console.log('🚀 ~ useEffect ~ countries', countries)
            })
            .catch(error => {
                console.log(error)
            })
    }, [])


    return (
        <div className="flex flex-col bg-[#1B1D1F] w-[90%] mx-auto">
            <div className="flex justify-between items-center my-4">
                <span className="text-[#6C727F] font-bold text-sm">Found 234 countries</span>
                <Search />
            </div>
            <Select />
            <RegionList />
            <CheckBoxStatus />
            <CountryArray countries={countries} />
        </div>
    )
}
export default MainContent