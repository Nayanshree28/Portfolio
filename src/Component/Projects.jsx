import React from 'react';
import githubLogo from '/githublogo.png'; 
import '../Component/projects.css'

const Projects = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-start text-center gap-5'>
      <h1 className='text-4xl font-bold mt-10'>MY PROJECTS</h1>
      <div className='grid grid-cols-3 gap-10 mt-10'>
        {/* Project 1 */}
        <div className='bg-white shadow-lg rounded-lg p-5 w-80'>
          <img
            src=''
            className='w-full h-40 object-cover rounded-t-lg'
          />
          <h2 className='text-xl font-bold mt-5'>ChatHub - A Video Chat Application</h2>
          <p className='text-gray-600 mt-2'>
          Video calling web application built using modern technologies like React.js (with Vite), Node.js, and the WebRTC library. This project enables server connections to facilitate real-time communication between users within a shared lobby environment.
          </p>
          <div className='logo-div'>
            <a
              href='https://github.com/Nayanshree28/Video-chat-application'
              className='link-tag'
            >
              <img src={githubLogo} alt='GitHub' className='img-div' />
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className='bg-white shadow-lg rounded-lg p-5 w-80'>
          <img
            src='https://via.placeholder.com/150'
            alt='Project 2'
            className='w-full h-40 object-cover rounded-t-lg'
          />
          <h2 className='text-xl font-bold mt-5'>Project 2</h2>
          <p className='text-gray-600 mt-2'>
            A blogging platform built using Next.js and MongoDB for users to write and share articles easily.
          </p>
          <div className='logo-div'>
            <a
              href='' // Replace with your GitHub link
              className='link-tag'
            >
              <img src={githubLogo} alt='GitHub' className='img-div'/>
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className='bg-white shadow-lg rounded-lg p-5 w-80'>
          <img
            src='https://via.placeholder.com/150'
            alt='Project 3'
            className='w-full h-40 object-cover rounded-t-lg'
          />
          <h2 className='text-xl font-bold mt-5'>Project 3</h2>
          <p className='text-gray-600 mt-2'>
            A recipe-sharing app built with React and Firestore, allowing users to browse and save recipes.
          </p>
          <div className='logo-div'>
            <a
              href='' // Replace with your GitHub link
              className='link-tag'
            >
              <img src={githubLogo} alt='GitHub' className='img-div' />
            </a>
          </div>
        </div>

        {/* Project 4 */}
        <div className='bg-white shadow-lg rounded-lg p-5 w-80'>
          <img
            src='https://via.placeholder.com/150'
            alt='Project 4'
            className='w-full h-40 object-cover rounded-t-lg'
          />
          <h2 className='text-xl font-bold mt-5'>Project 4</h2>
          <p className='text-gray-600 mt-2'>
            An e-commerce platform built using the MERN stack, featuring user authentication and payment integration.
          </p>
          <div className='logo-div'>
            <a
              href='' // Replace with your GitHub link
              className='link-tag'
            >
              <img src={githubLogo} alt='GitHub' className='img-div' />
            </a>
          </div>
        </div>

        {/* Project 5 */}
        <div className='bg-white shadow-lg rounded-lg p-5 w-80'>
          <img
            src='https://via.placeholder.com/150'
            alt='Project 5'
            className='w-full h-40 object-cover rounded-t-lg'
          />
          <h2 className='text-xl font-bold mt-5'>Project 5</h2>
          <p className='text-gray-600 mt-2'>
            A portfolio website built with HTML, CSS, and JavaScript showcasing a developer's skills and projects.
          </p>
          <div className='logo-div'>
            <a
              href='https://github.com/your-username/project5' // Replace with your GitHub link
              className='link-tag'
            >
              <img src={githubLogo} alt='GitHub' className='img-div' />
            </a>
          </div>
        </div>

        {/* Project 6 */}
        <div className='bg-white shadow-lg rounded-lg p-5 w-80'>
          <img
            src='https://via.placeholder.com/150'
            alt='Project 6'
            className='w-full h-40 object-cover rounded-t-lg'
          />
          <h2 className='text-xl font-bold mt-5'>Project 6</h2>
          <p className='text-gray-600 mt-2'>
            A personal finance tracking app built using React and Firebase to help users manage their budgets effectively.
          </p>
          <div className='logo-div'>
            <a
              href='https://github.com/your-username/project6' // Replace with your GitHub link
               className='link-tag'
            >
              <img src={githubLogo} alt='GitHub' className='img-div' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
