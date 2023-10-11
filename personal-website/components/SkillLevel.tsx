import React from 'react'

function SkillLevel({level} : {level: 'Proficient' | 'Intermediate' | 'Beginner'}) {
  return (
    <div className='absolute top-1 left-1 2xl:top-2 2xl:left-2 flex gap-2 items-center justify-center'>
      <p className={`w-2 h-2 rounded-full ${level === 'Proficient' ? 'bg-emerald-500' : level === 'Intermediate' ? 'bg-yellow-500' : 'bg-gray-800' }`}></p>
      <p className=''>{level}</p>
    </div>
  )
}

export default SkillLevel