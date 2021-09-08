import React from 'react'

interface Props { history: any }

function AboutSon(props: Props) {
  return (
    <>
      <h2>AboutSon</h2>
      <button onClick={(e) => {
        props.history.push('/test');
      }}> btn </button>
    </>
  )
}

export default AboutSon


