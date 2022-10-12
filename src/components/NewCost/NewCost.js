import CostForm from "./CostForm";
import './NewCost.css'
import React, {useState} from "react";

const NewCost = (props) => {

    const [isFormVisible, setIsFormVisible] = useState(false);

    const saveCostDataHandler = (inputCostData) => {
        const costData = {
            ...inputCostData,
            id: (Math.random() * 10).toFixed(5).toString()
        }
        props.onAddCost(costData);
        setIsFormVisible(false);
    }

    const inputCostDataHandler = () => {
        setIsFormVisible(true)
    }

    const cancelCostHandler = () => {
        setIsFormVisible(false)
    }

    return (
        <div className='new-cost'>
            {!isFormVisible && <button onClick={inputCostDataHandler}>Добавить Новый Расход</button>}

            {isFormVisible && <CostForm onSaveCostData={saveCostDataHandler} onCancel={cancelCostHandler}></CostForm>}

        </div>
    )

}

export default NewCost