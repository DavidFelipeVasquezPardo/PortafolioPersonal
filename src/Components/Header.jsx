import "./componentes.css"

export function Header(){

    return(

        <div className="w-full h-auto flex flex-col items-center pb-2 bg-black bg-opacity-50 lg:flex-row lg:justify-between lg:pb-0">

            <div className="h-16 mt-5 mb-5 rounded-full lg:ml-5">

                <img src="../../public/img/icon.test.png" className="h-full"></img>

            </div>

            <div className="w-full flex flex-row justify-around items-center ml-2 mr-2 lg:mr-5 lg:justify-end">

                <button className="">
                    <p className="font2 text-white text-sm lg:text-lg">About me</p>
                </button>

                <button className="lg:ml-6">
                    <p className="font2 text-white text-sm lg:text-lg">skills</p>
                </button>

                <button className="lg:ml-6">
                    <p className="font2 text-white text-sm lg:text-lg">Experience</p>
                </button>

                <button className="lg:ml-6">
                    <p className="font2 text-white text-sm lg:text-lg">References</p>
                </button>

                <button className="lg:ml-6">
                    <p className="font2 text-white text-sm lg:text-lg">Contact</p>
                </button>

            </div>
            
        </div>

    )
    
}