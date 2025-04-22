import React from 'react'

export default function Hero() {
  return (
    <div className='space-y-20 w-3/5 mx-auto text-center mt-20 mb-[133px] font-roboto'>
        <p className='text-secondary text-xl'>GenAI</p>
        <h1 className='text-[80px] font-extrabold'>Smart Math Tutoring for Every Student.</h1>
        <p className='text-accent'>Our GenAI-powered math tutoring solutions delivers personalized, evidence-based support to K-12 students, enhancing math learning through one-on-one or small group interventions. Build on specialized AI models, it adapts to each leaner's needs, driving engagement and achievement in core math skills.</p>
        <button className='px-[206px] py-4 rounded-lg bg-button font-medium text-xl'>Get Start</button>
    </div>
  )
}
