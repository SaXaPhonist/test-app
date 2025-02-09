import { useState } from 'react';

import FirstCardBg from './assets/card-bg-1.webp'
import SecondCardBg from './assets/card-bg-2.webp'
import ThirdCardBg from './assets/card-bg-3.webp'
import FourthCardBg from './assets/card-bg-4.webp'
import RocketIcon from './assets/rocket-sm.svg'

import './App.scss';

const cards = [
  { title: 'Move the borders of reality!', promoText: 'Go on a space adventure', backgroundImage: FirstCardBg },
  { title: 'Space is not just stars and planets', promoText: 'it is a majestic journey to', backgroundImage: SecondCardBg  },
  { title: 'For those who dream of stars', promoText: 'Our offer: make your dream come true', backgroundImage: ThirdCardBg  },
  { title: 'Fulfill your fantastic dreams', promoText: 'Space has never been so close', backgroundImage: FourthCardBg  }
]

const LONG_TEXT ='Traveling into space is one of the most exciting and unforgettable adventures that can change your life forever. And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe. We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. We offer various options for space excursions.'

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const toggleMenu = () => {
    setMenuIsOpen(prev => !prev)
  }

  return (
    <>
      <header className='header'>
        <div className='header__logo'>
          <img className='logo__img' src='logo.svg' alt='go logo'/>
          <img className='logo__text' src='logo-text.svg' alt='go' />
        </div>
        <nav className={`header__nav ${menuIsOpen && 'isExpanded'}`}>
          <a className='navItem' href='/'>
            <p className='textWithGradient'>Home</p>
          </a>
          <a className='navItem'  href='/'>
            <p className='textWithGradient'>Products</p>
          </a>
          <a className='navItem'  href='/'>
            <svg className='svgWithGradient' width="24" height="20" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="yellow"/>
                  <stop offset="50%" stopColor="orange"/>
                  <stop offset="100%" stopColor="pink"/>
                </linearGradient>
            </defs>
            <path fillRule="evenodd" clipRule="evenodd" d="M9.23358 18.1817C9.23358 17.173 8.41124 16.3633 7.38685 16.3633C6.36248 16.3633 5.54012 17.173 5.54012 18.1817C5.54012 19.1903 6.36248 20 7.38685 20C8.41124 20 9.23358 19.1903 9.23358 18.1817ZM22.1607 18.1817C22.1607 17.173 21.3383 16.3633 20.3139 16.3633C19.2895 16.3633 18.4672 17.173 18.4672 18.1817C18.4672 19.1903 19.2895 20 20.3139 20C21.3383 20 22.1607 19.1903 22.1607 18.1817ZM24.0074 2.72726C24.0074 2.22994 23.589 1.8182 23.084 1.8182H5.75655C5.61231 1.13632 5.59781 0 4.6168 0H0.923317C0.418371 0 0 0.411965 0 0.90892C0 1.40621 0.418371 1.8182 0.923317 1.8182H3.86656L6.42024 13.5085C6.21824 13.9201 5.54012 15.0141 5.54012 15.4544C5.54012 15.9517 5.95851 16.3633 6.46353 16.3633H21.2373C21.7423 16.3633 22.1607 15.9517 22.1607 15.4544C22.1607 14.9574 21.7423 14.5453 21.2373 14.5453H7.96399C8.10823 14.2612 8.31026 13.9628 8.31026 13.6364C8.31026 13.3095 8.18035 12.9547 8.12266 12.6418L23.185 10.9092C23.6611 10.8522 24.0074 10.4545 24.0074 9.99974V2.72726Z"/>
            </svg>
          </a>
        </nav>
        <button onClick={toggleMenu} className={`header__menu_toggle ${menuIsOpen ? 'open':'close'}`}>
          <span></span>
        </button>
      </header>
      <section className='promo'>
        <h2 className='promo__title'>Discover the vast 
        expanses of <span className='emphasize-text_main'>space</span></h2>
        <p className='promo__text'>
        Where the possibilities are <span className='emphasize-text_second'>endless!</span>
        </p>
        <button className='general-button filled'>
          Learn more
        </button>
      </section>
      <main className='main-section'>
        <section className='offers'>
            <h2 className='offers__title'>Offers</h2>
            <div className='offers__container'>
               {cards.map(({title, promoText, backgroundImage}, index) => (
                 <div key={title} className={`card card-${++index}`} style={{ backgroundImage: `url(${backgroundImage})`}}>
                    <h3 className='card__title'>{title}</h3>
                    <p className='card__text'>{promoText}</p>
                    <button className='general-button outline'>
                      Learm more
                    </button>
                 </div>
               ))}
            </div>
        </section>
        <article className='article'>
           <h2 className='article__title'>Embark on a space journey</h2>
           <input type="checkbox" id="read-more_toggle"></input>
           <p className='article__text'>{LONG_TEXT}</p>
           <label for='read-more_toggle' className='article__button'>Read more</label>
        </article>
      </main>
      <footer className='footer'>
        <img alt='rocket' src={RocketIcon} />
        <p className='footer__text'>Exciting space adventure!</p>
      </footer>
    </>
  );
}

export default App;
