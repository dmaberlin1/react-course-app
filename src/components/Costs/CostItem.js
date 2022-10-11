import './CostItem.css'
import CostDate from "./CostDate";
import Card from "../UI/Card";
import React,{useState} from "react";

 const CostItem=(props)=> {

    const [description,setDescription] =useState(props.description);

 const changeDescriptionHandler=()=>{
 setDescription('New cost')
     //происходит присваивание дескрипшн нового значения И вызов фции компонента
 }

    return (
        <>

            <Card className='cost-item'>
                <CostDate date={props.date}></CostDate>

           <div className='cost-item__description'>
               <h2> {description}</h2>
               <div className='cost-item__price'>${props.amount}</div>
           </div>
                <button onClick={changeDescriptionHandler}>Изменить описание</button>
            </Card>
        </>
            )
}

export default CostItem