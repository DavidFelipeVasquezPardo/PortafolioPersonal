import "./pages.css"
import imgprofile from "../../public/img/profile.jpg"

import { CagasTxt } from "../Components/CagasTxt";
const TextoCagas = [
    ['Goals',
    'Obtain my degrees in Systems Engineering and Software Engineering:',
    'Successfully complete both programs to strengthen my academic and professional background, opening new doors in the technological world.',
    'Build a promising professional future:',
    'Create a career full of opportunities and achievements, standing out in the technology field and reaching my goals with dedication and passion.',
    'Become a Project Manager:',
    'Develop my skills to lead technological projects, managing teams and resources to achieve exceptional results and contribute to the success of initiatives.',
    "Pursue a Master's Degree:",
    'Expand my knowledge and specialize in advanced areas of technology through graduate studies, staying at the forefront of the latest trends and developments in the field.'
    ],
    ['Interests', 'hello'],
];

export function AboutMe(){

    return(

    <div className="w-full h-auto flex flex-col">

        <div className="w-full flex items-center mb-5 lg:mb-20 lg:mt-5">

            <h1 className="font2 w-full text-center text-4xl text-white mt-5 lg:text-7xl">David Felipe Vasquez Pardo</h1>
            
        </div>

        <div className="w-full h-auto flex flex-col items-center lg:flex-row lg:justify-around">

            <div className="h-1/2 w-1/2 bg-violet-500 p-2 rounded-full lg:h-1/4 lg:w-1/4 shadow-custom-purple">

            <img src={imgprofile} className="w-full h-full rounded-full"></img>

            </div>

            <div className="mt-5 ml-5 mr-5 lg:w-2/4">

                <p className="font1 text-white text-justify lg:text-xl">

                <strong className="text-violet-500 text-xl lg:text-2xl">Hi!</strong> I'm thrilled to be a <strong className="text-violet-500 text-xl lg:text-2xl">Systems Engineering</strong> student with an immense passion for technology. Currently navigating the exciting middle phase of my academic journey, I am deeply enthusiastic about my field and the endless possibilities it offers. I truly love what I do and am constantly inspired by the amazing advancements and innovations in technology!

                </p>

            </div>

        </div>

        <div>
            
        {TextoCagas.map((item, index) => (
                <CagasTxt key={index} data={item} />
            ))}
            
        </div>

    </div>  
        
    )

}