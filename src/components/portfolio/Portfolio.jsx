import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Data visualization',
    github: 'https://github.com',
    demo: 'http://reliable-hotteok-297159.netlify.app/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Data visualization',
    github: 'https://github.com',
    demo: 'http://reliable-hotteok-297159.netlify.app/',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Data visualization',
    github: 'https://github.com',
    demo: 'http://reliable-hotteok-297159.netlify.app/',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Data visualization',
    github: 'https://github.com',
    demo: 'http://reliable-hotteok-297159.netlify.app/',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Data visualization',
    github: 'https://github.com',
    demo: 'http://reliable-hotteok-297159.netlify.app/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Data visualization',
    github: 'https://github.com',
    demo: 'http://reliable-hotteok-297159.netlify.app/',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {data.map((singleItem) => {
          return (
            <article className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={singleItem.image} alt='' />
              </div>
              <h3>{singleItem.title}</h3>
              <div className='portfolio__item-cta'>
                <a
                  href={singleItem.github}
                  className='btn'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>
                <a
                  href={singleItem.demo}
                  className='btn btn-primary'
                  target='_blank'
                  rel='noreferrer'
                >
                  Github
                </a>
              </div>
            </article>
          )
        })}
        {/* <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com'
              className='btn'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              href='https://github.com'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com'
              className='btn'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              href='https://github.com'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com'
              className='btn'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              href='https://github.com'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com'
              className='btn'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              href='https://github.com'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com'
              className='btn'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              href='https://github.com'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt='' />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className='portfolio__item-cta'>
            <a
              href='https://github.com'
              className='btn'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
            <a
              href='https://github.com'
              className='btn btn-primary'
              target='_blank'
              rel='noreferrer'
            >
              Github
            </a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio
