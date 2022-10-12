import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, {useState} from "react";


const INITIAL_COSTS = [
    {
        id: 'c1',
        date: new Date(2022, 2, 12),
        description: 'Video AMD 4GB',
        amount: 1100.99
    },
    {
        id: 'c2',
        date: new Date(2022, 11, 25),
        description: ' AMD Ryzen 5',
        amount: 120

    },
    {
        id: 'c3',
        date: new Date(2022, 8, 15),
        description: 'Monitor 30"',
        amount: 100

    }
];

const App = () => {


    const [costs, setCosts] = useState(INITIAL_COSTS)

    const addCostHandler = (cost) => {
        setCosts(prevCosts => {
            return [cost, ...prevCosts]
        })
    }

    return (
        <div>
            <NewCost onAddCost={addCostHandler}></NewCost>
            <Costs costs={costs}></Costs>
        </div>
    );
}

export default App;
