import React from 'react'
import ICard from './ICard'
import mypic from './mypic.jpeg'

function ICardGallery() {

  const students = [
    {
      pic: mypic,
      roll: '119',
      name: 'Manasvi Chaudhary',
      branch: 'CSE-AIML'
    },
    {
      pic: mypic,
      roll: '118',
      name: 'Mallika Rathi',
      branch: 'CSE-AIML'
    },
    {
      pic: mypic,
      roll: '122',
      name: 'Naina sharma',
      branch: 'CSE-AIML'
    }
  ]

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'center'
      }}
    >
      {students.map((student) => (
        <ICard
          key={student.roll}
          pic={student.pic}
          rollNumber={student.roll}
          name={student.name}
          branch={student.branch}
        />
      ))}
    </div>
  )
}

export default ICardGallery