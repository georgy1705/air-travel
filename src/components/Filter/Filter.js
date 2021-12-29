import React, { useState } from "react";
import classes from "./Filter.module.scss"

import Input from "../UI/Input/Input";
import { connect } from "react-redux";


const Filter = props => {

    const [min, setMin] = useState(0)
    const [max, setMax] = useState(0)

    return (
        <div className={classes.Filter}>
            <div style={{width: '100%', height: '5vh', background: '#DCDCDC'}}></div>
            <div className={classes.Sort}>
                <h3>Сортировать</h3>
                <Input label="- по возрастанию цены" name="sorted" type="radio"/>
                <Input label="- по убыванию цене" name="sorted" type="radio"/>
                <Input label="- по времени в пути" name="sorted" type="radio"/>
            </div>
            <div className={classes.Sort}>
                <h3>Фильтровать</h3>
                <Input label="- 1 пересадка" type="checkbox"/>
                <Input label="- без пересадок" type="checkbox"/>
            </div>
            <div className={classes.Sort}>
                <h3>Цена</h3>
                <label htmlFor="">
                    От
                    <input type="text" onChange={e => setMin(e.target.value)} style={{marginLeft: 5}} />
                </label>
                <label htmlFor="" style={{paddingTop: 15}}>
                    До
                    <input type="text" onChange={e => setMax(e.target.value)} style={{marginLeft: 5}} />
                </label>
            </div>
            <div className={classes.Sort}>
                <h3>Авиакомпании</h3>
                <Input label="- Lot" type="checkbox"/>
                <Input label="- Аэрофлот" type="checkbox"/>
            </div>
            <div style={{width: '100%', height: '20vh', background: '#DCDCDC', marginTop: 40}}></div>
            
        </div>
        
    )
}


export default Filter