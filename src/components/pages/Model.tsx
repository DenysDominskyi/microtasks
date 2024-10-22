import React from 'react'
import { adidasArr, AdidasItem } from './Adidas'
import { pumaArr, PumaItem } from './Puma'
import { useParams } from 'react-router-dom'

type stateType = {
    [key: string]: AdidasItem[] | PumaItem[]
}

const state: stateType = {
    adidas: adidasArr,
    puma: pumaArr,
}

export const Model = () => {
    const {model, id} = useParams()
    // const params = useParams()
    // const currentModel = adidasArr.find(el => el.id === Number(id))

    const currentModel = model 
    ? state[model].find(el => el.id === Number(id))
    : null

    console.log(model)
    return (
        <>
            {currentModel ?
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <h2>{currentModel.model}</h2>
                    <h4>{currentModel.collection}</h4>
                    <h3>{currentModel.price}</h3>
                    <div style={{ flex: '1 1 0', padding: '10px' }}>
                        <img
                            style={{ width: '100%' }}
                            src={currentModel.picture}
                            alt={currentModel.picture}
                        />
                    </div>
                </div>
                : <h3 style={{textAlign: 'center'}}>Model not exist!</h3>
            }
        </>
    )
}



{/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
    <h2>{el.model}</h2>
    <h4>{el.collection}</h4>
    <h3>{el.price}</h3>
    <div style={{ flex: '1 1 0', padding: '10px' }}>
        <img
            style={{ width: '100%' }}
            src={el.picture}
            alt={el.picture}
        />
    </div>
</div> */}