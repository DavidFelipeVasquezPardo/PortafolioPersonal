export function CagasTxt({ data }) {
    const [title, subTitle, txt1, subTitle2, txt2, subTitle3, txt3, subTitle4, txt4, subTitle5, txt5,] = data;

    return (
        <div className="flex flex-col items-center mt-16 mr-5 ml-5 lg:mr-64 lg:ml-64">
            <h2 className="bg-violet-500 w-40 lg:w-80 p-2 lg:p-3 rounded-tr-lg rounded-tl-lg font2 text-white text-3xl lg:text-5xl text-center">
            {title}
            </h2>

            <div className="bg-black p-2 rounded-lg bg-opacity-40 shadow-custom-purple">

                <h2 className="font2 text-violet-500 text-2xl text-center mt-4 lg:text-2xl">{subTitle}</h2>
                <p className="font1 text-white text-center lg:text-xl">{txt1}</p>

                <h2 className="font2 text-violet-500 text-2xl text-center mt-4 lg:text-2xl">{subTitle2}</h2>
                <p className="font1 text-white text-center lg:text-xl">{txt2}</p>

                <h2 className="font2 text-violet-500 text-2xl text-center mt-4 lg:text-2xl">{subTitle3}</h2>
                <p className="font1 text-white text-center lg:text-xl">{txt3}</p>

                <h2 className="font2 text-violet-500 text-2xl text-center mt-4 lg:text-2xl">{subTitle4}</h2>
                <p className="font1 text-white text-center lg:text-xl">{txt4}</p>

                <h2 className="font2 text-violet-500 text-2xl text-center mt-4 lg:text-2xl">{subTitle5}</h2>
                <p className="font1 text-white text-center lg:text-xl">{txt5}</p>

            </div>

        </div>
    );
}
