import { memo } from 'react'

const Card = memo(({ name, position, biography, image }) => {
    console.log(`Card`)

    return (
        <div>
            <img src={image} alt="" width={'300px'}/>
            <h3>{name}</h3>
            <h4>{position}</h4>
            <p>{biography}</p>
        </div>
    )

})

export default Card