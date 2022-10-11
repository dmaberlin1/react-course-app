import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";


//test

const App = () => {
    const costs = [
        {
            date: new Date(2022, 2, 12),
            description: 'Системный блок',
            amount: 1100.99
        },
        {
            date: new Date(2022, 11, 25),
            description: ' AMD Ryzen 5',
            amount: 120

        },
        {
            date: new Date(2022, 8, 15),
            description: 'Стул',
            amount: 100

        }


    ]

    return (
        <div>
            <NewCost></NewCost>
            <Costs costs={costs}></Costs>
        </div>
    );
}

export default App;
