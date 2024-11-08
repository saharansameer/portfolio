import { useState } from 'react'
import { TextGenerateEffect } from "../@/components/ui/text-generate-effect";

function App() {
  const text = `Under Progress...`;
  return (
    <>
      <div className='min-h-full flex items-center justify-center'>
        <TextGenerateEffect words={text} className='text-6xl font-bold' />
      </div>
      
    </>
  )
}

export default App