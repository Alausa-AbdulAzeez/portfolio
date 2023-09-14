import React from 'react'
// import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a
        // href='https://drive.google.com/file/d/18gps8HeprMCYfkiibee_CiOZXmjsPF14/view?usp=sharing'
        href='https://docs.google.com/document/d/18P4gwCgvFQolz4Sr-8xqOb2dp-AQnzELBc9U3f-keps/edit?usp=sharing'
        // href='https://drive.google.com/file/d/1g3mwP2yUMJMeziBjptSVrAeaEkm5EcRp/view?usp=sharing'
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
