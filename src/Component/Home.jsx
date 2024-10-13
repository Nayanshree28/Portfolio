import React from 'react';
import WordAnimation from './WordAnimation';

const Home = () => {
  return (
    <div style={{ backgroundColor: 'rgb(10, 0, 27)', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <span className="flex justify-end items-center py-4 absolute top-0 right-0">
         <a href="https://drive.google.com/file/d/1kKiRvuCrYNN-8yId4Vc7ngYTf0D-kGs9/view?usp=sharing" className="no-underline" style={{ textDecoration: 'none', border: 'none' }}>
            <button className="px-4 py-2 bg-white text-black rounded mx-3 hover:bg-gray-300 transition" aria-label="Download Resume">
            Resume
          </button>
        </a>
      </span>
      <div className='w-full flex justify-center items-center'>
        <div className='h-60 w-1/2 text-center'>
          <div className='text-white'>
            <WordAnimation />
          </div>
          <p className='text-white text-center text-lg mt-4'>
            A Computer Science graduate and skilled problem solver, passionate about MERN stack development, specializing
            in building scalable, user-friendly web applications using MongoDB, Express.js, React.js, and Node.js. I focus on creating
            seamless front-end interfaces and robust back-end architectures. Driven to tackle complex challenges and provide
            creative solutions while working on projects that advance the possibilities of web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
