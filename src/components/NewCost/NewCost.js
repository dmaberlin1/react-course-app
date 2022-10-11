import CostForm from "./CostForm";
import './NewCost.css'

const NewCost = () => {

    const saveCostDataHandler=(inputCostData)=>
    {
        const costData={
            ...inputCostData,
            id:(Math.random()*10).toFixed(5).toString()
        }


        console.log(costData)
    }

    return (
        <div className='new-cost'>
            <CostForm onSaveCostData={saveCostDataHandler} ></CostForm>
        </div>
    )

}

export default NewCost