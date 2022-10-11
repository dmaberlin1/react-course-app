import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";


const App = () => {
    const costs = [
        {
            id: 'c1',
            date: new Date(2022, 2, 12),
            description: 'Системный блок',
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
            description: 'Стул',
            amount: 100

        }
    ];

    const addCostHandler = (cost) => {
        console.log(cost);
        console.log('App Component')
    }

    return (
        <div>
            <NewCost onAddCost={addCostHandler}></NewCost>
            <Costs costs={costs}></Costs>
        </div>
    );
}

export default App;
