import React from 'react'

const StepName = ({onNext}) => {
  return (
    <>
      <div>This is the Name  step</div>
      <button onClick={onNext}>Next</button>
    </> 
  )
}

export default StepName