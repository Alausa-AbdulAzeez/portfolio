import React from 'react'
// import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a
        href='https://drive.google.com/file/d/18gps8HeprMCYfkiibee_CiOZXmjsPF14/view?usp=sharing'
        // download='cv'
        target='_blank'
        className='btn'
        rel='noreferrer'
      >
        View Resume
      </a>
      <a href='#contact' className='btn btn-primary'>
        Let's Talk
      </a>
    </div>
  )
}

export default CTA
