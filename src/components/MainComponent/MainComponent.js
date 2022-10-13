import React from 'react'
import Inputs from './Inputs'
import Results from './Results'

const MainComponent = () => {

  return (
    <main className='main__component bg-white mx-auto card'>
      <div className='row p-3'>
        {/* Data to convert */}
        <Inputs />

        {/* Convertions */}
        <Results />
      </div>
    </main>
  )
}

export default MainComponent