import React, { useEffect, useState } from "react";
import classes from "./Filter.module.scss"

import Input from "../UI/Input/Input";
import { connect } from "react-redux";
import { 
    fetchAvia,
    fetchForDecrement,
    fetchForEncrement,
    fetchForTime,
    fetchMaxInput, 
    fetchMinInput, 
    fetchOneTransfer, 
    fetchZeroTransfer 
} from "../../store/actions/filters";


const Filter = props => {
    
    let renderCompanies = null

    const [avia, setAvia] = useState({company: "", value: false})

    useEffect(() => {
        props.fetchAvia(avia)
    }, [avia])
    

    if (props.companies !== []) {
        renderCompanies = () => {
            let companies = new Set()
            const filter = props.companies.forEach((item) => companies.add(item.caption))
            let result = []

            for (let company of companies) {
                result.push(company)
            }

            return result.map(company => {
                return (
                    <Input key={company} onChange={e => {
                        setAvia(
                            {company, value: e.target.checked}
                        )  
                    }} 
                    label={'- ' + company} type="checkbox"/>
                )
            })
        }      
    }

    return (
        <div className={classes.Filter}>
            <div style={{width: '100%', height: '5vh', background: '#DCDCDC'}}></div>
            <div className={classes.Sort}>
                <h3>Сортировать</h3>
                <Input onChange={e => props.fetchForEncrement(e.target.checked)} label="- по возрастанию цены" name="sorted" type="radio"/>
                <Input onChange={e => props.fetchForDecrement(e.target.checked)} label="- по убыванию цене" name="sorted" type="radio"/>
                <Input onChange={e => props.fetchForTime(e.target.checked)} label="- по времени в пути" name="sorted" type="radio"/>
            </div>
            <div className={classes.Sort}>
                <h3>Фильтровать</h3>
                <Input label="- 1 пересадка" onChange={e => props.fetchOneTransfer(e.target.checked)} type="checkbox"/>
                <Input label="- без пересадок" onChange={e => props.fetchZeroTransfer(e.target.checked)} type="checkbox"/>
            </div>
            <div className={classes.Sort}>
                <h3>Цена</h3>
                <label htmlFor="">
                    От
                    <input type="text" onChange={e => props.fetchMinInput(e.target.value)} style={{marginLeft: 5}} />
                </label>
                <label htmlFor="" style={{paddingTop: 15}}>
                    До
                    <input type="text" onChange={e => props.fetchMaxInput(e.target.value)} style={{marginLeft: 5}} />
                </label>
            </div>
            <div className={classes.Sort}>
                <h3>Авиакомпании</h3>
                {
                    renderCompanies !== null ? renderCompanies() : null
                }
            </div>
            <div style={{width: '100%', height: '20vh', background: '#DCDCDC', marginTop: 40}}></div>
        </div>
        
    )
}


function mapStateToProps(state) {
    return {
        companies: state.travel.companies
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchMinInput: min => dispatch(fetchMinInput(min)),
        fetchMaxInput: max => dispatch(fetchMaxInput(max)),
        fetchOneTransfer: val => dispatch(fetchOneTransfer(val)),
        fetchZeroTransfer: val => dispatch(fetchZeroTransfer(val)),
        fetchForEncrement: val => dispatch(fetchForEncrement(val)),
        fetchForDecrement: val => dispatch(fetchForDecrement(val)),
        fetchForTime: val => dispatch(fetchForTime(val)),
        fetchAvia: val => dispatch(fetchAvia(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)