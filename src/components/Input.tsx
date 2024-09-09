import React, { ChangeEvent, useState } from 'react'

type PropsType = {
    value: string
    setValue: (value: string) => void
}

export const Input = (props: PropsType) => {

    const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(e.currentTarget.value)
    }

    return (
        <input onChange={onInputChangeHandler} type="text" value={props.value} />
    )
}
