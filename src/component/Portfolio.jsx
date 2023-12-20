import React, { useState } from 'react'
import Recipes from "../assets/food-recipe.png"
import Hangman from "../assets/hangman-game.png"
import Todo from "../assets/to-do-list.png"
import Port from "../assets/portfolio.png"
import Port1 from "../assets/portfolio2.png"
import react from "../assets/react.png"

const Portfolio = () => {
    const [darkModeState, setDarkModeState] = useState({});
    const [hoveredText, setHoveredText] = useState('');
  
    const portfolios = [
        {
            id: 1,
            src: Recipes, 
            txt: "Recipes",
            chref: "https://github.com/Topilogy/recipe-app",
            dhref: "https://recipe-app-one-ashen.vercel.app/",
        },
        {
            id: 2,
            src: Hangman,
            txt: "Hangman Game",
            chref: "https://github.com/Topilogy/hangman",
            dhref: "https://hangman-teal-eight.vercel.app/",
        },
        {
            id: 3,
            src: Todo,
            txt: "To-do-List",
            chref: "https://github.com/Topilogy/To-do-list",
            dhref: "https://to-do-list-ochre-three-74.vercel.app/",
        },
        {
            id:4,
            src: Port,
            txt: "1st Portfolio",
            chref: "https://github.com/Topilogy/topilogy-portfolio",
            dhref: "https://topilogy-portfolio-beta-two.vercel.app/",
        },
        {
            id:5,
            src: Port1,
            txt: "2nd Portfolio",
            chref: "https://github.com/Topilogy/portfolio",
            dhref: "https://topilogy-portfolio.netlify.app/",
        },
        {
            id:6,
            src: react,
            txt: "1st Project",
            chref: "https://github.com/Topilogy/01-starting-project-using-react",
            dhref: "https://01-starting-project.netlify.app/",
        },
    ];

    const handleMouseEnter = (id, txt) => {
        setDarkModeState(prevState => ({ ...prevState, [id]: true }));
        setHoveredText(txt);
      };
    
      const handleMouseLeave = (id) => {
        setDarkModeState(prevState => ({ ...prevState, [id]: false }));
        setHoveredText('');
      };
    
  
    return (
      <div
        name="portfolio"
        className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
              Portfolio
            </p>
            <p className='py-6'>Check out some of my work right here</p>
          </div>
  
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {portfolios.map(({ id, src, txt, dhref, chref }) => (
              <div key={id} className='shadow-md shadow-gray-600 rounded-lg relative'>
                <img
                  src={src}
                  alt=''
                  className={`rounded-md ${darkModeState[id] ? 'filter brightness-50' : ''}`}
                  onMouseEnter={() => handleMouseEnter(id, txt)}
                  onMouseLeave={() => handleMouseLeave(id)}
                />
                {hoveredText === txt && (
                  <div className='absolute top-16 pr-2 text-2xl text-white group-hover:text-black'>
                    {txt}
                  </div>
                )}
                <div className='flex items-center justify-center'>
                  <div>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer'>
                      <a
                        href={dhref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </a>
                    </button>
                  </div>
                  <div>
                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer'>
                      <a
                        href={chref}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Code
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;
  