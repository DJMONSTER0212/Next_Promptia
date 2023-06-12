import React from 'react'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br />
      {/* <br className='max-md:hidden'/> */}
      <span className='orange_gradient text-center'>AI-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        Promptopia is an Open-Source AI prompting tool for modern world to dicover, create and share creative prompts. 
      </p>
      {/* Feed Component */}
    </section>
  )
}

export default Home
