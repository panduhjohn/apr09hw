import React from 'react'
import Animal from './Animal'
import Favorites from './Favorites'

const App = () => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
            <Animal />
            <Favorites />
        </div>

    )
}

export default App