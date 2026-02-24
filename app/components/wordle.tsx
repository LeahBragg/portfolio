'use client'

export default function Wordle() {

    return (
        <>
            <div className="relative mt-8 md:mt-8 z-10">
                <div className="relative mx-auto text-center text-(--darkBlue) z-11">
                    <h1 className="text-3xl font-bold">"Wordle" Clone</h1 >
                    <p className="text-1">Java clone of NYT Game "Wordle"</p>
                </div>

                <div className="relative flex mx-10 flex-col z-10 justify-center items-center">

                    <img src={"Wordle.svg"} className='w-sm m-4' />



                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-self-right text-center">
                        <a target="_blank" href="https://github.com/LeahBragg/wordleClone/" className="font-semibold text-(--darkBlue) outline-(--darkBlue) outline-3 rounded-xl bg-(--offWhite) p-4 hover:text-(--lightPurple) hover:bg-(--darkBlue)">
                            View on Github
                        </a>
                        <a target="_blank" href="WordleDemo.mp4" className="font-semibold text-(--darkBlue) outline-(--darkBlue) outline-3 rounded-xl bg-(--offWhite) p-4 hover:text-(--lightPurple) hover:bg-(--darkBlue)">
                            Watch Demo
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
