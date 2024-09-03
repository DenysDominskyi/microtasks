import './App.css'

type CarsType = {
    manufacturer: string
    model: string
}

export const NewComponent = () => {

    const topCars = [
        { manufacturer: 'BMW', model: 'm5cs' },
        { manufacturer: 'Mercedes', model: 'e63s' },
        { manufacturer: 'Audi', model: 'rs6' }
    ]

    return (
        <table>
            {topCars.map((c: CarsType, index) => (
                <tr>
                    <th>{index + 1}</th>
                    <th>{c.manufacturer}</th>
                    <th>{c.model}</th>
                </tr>
            ))}
        </table>
    )
}