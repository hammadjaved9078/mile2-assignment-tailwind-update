import React from 'react'
import Heading from './Heading';
import Card from './Card';
const data =[
	{
	id: 0,
	title: "Todo List",
	desc: "A React & Typescript based app for manging and organizing your tasks efficiently.",
	img: "/project_01.png",
	tags: ["React", "Node", "CSS", "Typescript"],	
	},
	{
	id: 1,
	title: "Countdown Timer",
	desc: "A Next.js & Typescript powered website to track time with an interactive countdown feature.",
	img: "/project_02.png",
	tags: ["Next.JS", "Node", "CSS", "Typescript"],	
	},
	{
	id: 2,
	title: "Weather Widget",
	desc: "A Next.js & Typescript based tool for fetching and displaying real-time weather data.",
	img: "/project_03.png",
	tags: ["Next.JS", "Node", "CSS", "Typescript"],	
	},
	{
	id: 3,
	title: "Currency Converter Project",
	desc: "A simple HTML and Typescript powered tool for converting currencies with real-time rates.",
	img: "/project_04.png",
	tags: ["HTML", "Node", "CSS", "Typescript"],	
	},
	{
	id: 4,
	title: "Static Interactive Resume",
	desc: "A TypeScript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically.",
	img: "/project_05.png",
	tags: ["HTML", "Node", "CSS", "Typescript"],	
	},
	{
	id: 5,
	title: "Simple Calculator Project",
	desc: "A basic HTML CSS and TypeScript calculator for performing  essential arthmetic operations.",
	img: "/project_06.png",
	tags: ["HTML", "Node", "CSS", "Typescript"],	
	},
	

];


const Projects = () => {
  return (
    <div id='projects' className='container pt-32 p-[30px]'>
      <Heading title='My Projects'/>
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) =>(<Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}


        />))}
      </div>
    </div>
  )
}



export default Projects
