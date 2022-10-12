import './Costs.css';
import Card from "../UI/Card";
import CostsFilter from "../costFilter/CostsFilter";
import React, {useState} from "react";
import CostList from "./CostList";

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2022');

    const yearChangeHandler = (year) => {
        setSelectedYear(year)
    }

    const filteredCosts = props.costs.filter((cost) => {
        return cost.date.getFullYear().toString() === selectedYear;
    })


    return (
        <>
            <div>
                <Card className='costs'>
                    <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}></CostsFilter>

                    <CostList costs={filteredCosts}></CostList>
                </Card>
            </div>
        </>
    )
}

export default Costs