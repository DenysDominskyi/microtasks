import React, { useState } from 'react'
import { Button } from './components/Button'
import { ObjType } from './App'

type FilterType = 'All' | 'Dollar' | 'Euro'

type ObjectType = {
    banknots: string
    value: number
    number: string
}

type SecondNewComponentPropsType = {
    filteredMoney: Array<ObjectType>
}

export const SecondNewComponent = (props: SecondNewComponentPropsType) => {

    const [filter, setFilter] = useState<FilterType>('All')

    const onClickHandler = (buttonName: FilterType) => {
        setFilter(buttonName)
    }

    let newMoney = props.filteredMoney

    if(filter === 'Euro') {
        newMoney = props.filteredMoney.filter((obj) => obj.banknots === 'Euro')
    }
    if(filter === 'Dollar') {
        newMoney = props.filteredMoney.filter(obj => obj.banknots === 'Dollar')
    }
    if(filter === 'All') {
        newMoney = props.filteredMoney
    }

    return (
        <div>
            <ul>
                {newMoney.map((obj: ObjType, index) => (
                    <li key={index}>
                        <span>{obj.banknots}</span>
                        <span>{obj.value}</span>
                        <span>{obj.number}</span>
                    </li>
                ))}
            </ul>
            
            <Button title={"All"} callBack={() => onClickHandler('All')}/>
            <Button title={"Euros"} callBack={() => onClickHandler('Euro')}/>
            <Button title={"Dollars"} callBack={() => onClickHandler('Dollar')}/>
        </div>
    )
}
