'use client'

export default function Escape() {

    return (
        <>
            <div className="relative mt-8 md:mt-8 z-10">
                <div className="relative mx-auto text-center text-(--darkBlue) z-11">
                    <h1 className="text-3xl font-bold">Escape the Maze Game</h1 >
                    <p className="text-1">Multi-level Scratch maze game</p>
                </div>

                <div className="relative flex mx-10 flex-col z-10 justify-center items-center">

                    <img src={"Maze.svg"} className='w-3xs md:w-sm m-4' />



                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-self-right text-center">
                        <a target="_blank" href="https://scratch.mit.edu/projects/444791999/" className="font-semibold text-(--darkBlue) outline-(--darkBlue) outline-3 rounded-xl bg-(--offWhite) p-4 hover:text-(--lightGreen) hover:bg-(--darkBlue)">
                            View on Scratch
                        </a>
                        <a target="_blank" href="https://scratch.mit.edu/projects/444791999/fullscreen/" className="font-semibold text-(--darkBlue) outline-(--darkBlue) outline-3 rounded-xl bg-(--offWhite) p-4 hover:text-(--lightGreen) hover:bg-(--darkBlue)">
                            Play on Scratch
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
