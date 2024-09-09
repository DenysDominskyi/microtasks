import React, { ChangeEvent, useState } from 'react'

type PropsType = {
    addMessage: (newMessageText: string) => void
}

export const FullInput = (props: PropsType) => {
    const [inputValue, setInputValue] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }
    const onClickHandler = () => {
        props.addMessage(inputValue)
        setInputValue('')
    }

    return (
        <div>
            a
            <button onClick={onClickHandler}>+</button>
        </div>
    )
}
