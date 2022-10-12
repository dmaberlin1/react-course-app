import CostItem from "./CostItem";
import './Costs.css';
import Card from "../UI/Card";
import CostsFilter from "../costFilter/CostsFilter";
import React, {useState} from "react";

const Costs = (props) => {

    const [selectedYear, setSelectedYear] = useState('2022');

    const yearChangeHandler = (year) => {
        setSelectedYear(year)
    }

    return (
        <>
            <div>

                <Card className='costs'>
                    <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler}></CostsFilter>

                    {props.costs.map((cost) => (
                        <CostItem
                            key={cost.id}
                            date={cost.date}
                            description={cost.description}
                            amount={cost.amount}
                        >
                        </CostItem>))}
                </Card>
            </div>

        </>)
}

export default Costs