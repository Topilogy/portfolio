import React from 'react'

const About = () => {
  return (
    <div name="about" 
         className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col  justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>

                <p className='text-1xl mt-20'>
                    I pursued my career in computer science from 2018 to 2022, developing a strong foundation for logical thinking. My passion for 
                    coding  led me to venture into web development in 2021. My journey began with a fascination for HTML, CSS and Javascript and its. 
                    The joy of working with function-based components in Reactjs, followed by the satisfying "npm start" command in the terminal, 
                    quickly became a favorite ritual. However, my heart lies in web development. I've actively maintained and updated my Git repositories, 
                    ensuring they reflect my growth and commitment to the field.
                </p> 

                <br /> 
                <p className='text-xl'>
                    I am actively seeking an entry-level position as a Frontend Developer, leveraging my expertise in ReactJs. With over a year of valuable insights 
                    gained during my internship training in zuri as a Frontend developer, I bring a deep understanding of workspace culture. My commitment to excellence 
                    is reflected in the 5+ projects I've undertaken, ranging from small to large scale. These projects, showcased on my GitHub repositories, demonstrate 
                    my proficiency in pure JavaScript and ReactJS. I've employed various technologies such as JSON server, Render.com, React Routers, React-Tables, 
                    Tailwind css and Chrome extensions. This diverse skill set allows me to adapt and contribute effectively to different project requirements. 
                    I am always ready to go the extra mile, both in code and communication, to simplify processes. Currently, I am expanding my knowledge base by delving 
                    into Nodejs, TypeScript and NextJs through practical projects. Feel free to explore my portfolio for a detailed overview of my work.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About