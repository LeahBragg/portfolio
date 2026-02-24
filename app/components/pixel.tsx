'use client'
const url = "/leahbragg/"
export default function Pixel() {

    return (
        <>
            <div className="relative mt-8 md:mt-8 z-10">
                <div className="relative mx-auto text-center text-(--darkBlue) z-11">
                    <h1 className="text-3xl font-bold">Pixel Art Web App</h1 >
                    <p className="text-1">JavaScript pixel art maker</p>
                </div>

                <div className="relative flex mx-10 flex-col z-10 justify-center items-center">

                    <img src={url + "Pixel.svg"} className='w-sm m-4' />



                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-self-right">
                        <a target="_blank" href="https://github.com/LeahBragg/PixelArt" className="font-semibold text-(--darkBlue) outline-(--darkBlue) outline-3 rounded-xl bg-(--offWhite) p-4 hover:text-(--lightPink) hover:bg-(--darkBlue)">
                            View on Github
                        </a>
                        <a target="_blank" href="https://leahbragg.github.io/PixelArt/" className="font-semibold text-(--darkBlue) outline-(--darkBlue) outline-3 rounded-xl bg-(--offWhite) p-4 hover:text-(--lightPink) hover:bg-(--darkBlue)">
                            Play in browser
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
