'use client'

export default function Saltify() {

    return (
        <>
            <div className="relative mt-8 md:mt-0">
                <div className="relative mx-auto text-center text-(--darkBlue) z-11">
                    <p className="text-1 tracking-wide">August 2025 - December 2025</p>
                    <h1 className="text-6xl font-bold">Saltify</h1 >
                    <p className="text-2xl font-semibold">Developer</p>
                </div>

                <div className="relative flex mx-10 flex-col z-10 justify-center items-center">

                    <div className="p-4 my-8 w-xs lg:w-md bg-(--offWhite) outline-4 rounded-xl outline-(--lightGreen)">
                        <p className="text-xl sm:lg tracking-wide text-left">Saltify is an open source Python app being developed with Open Source with SLU. It transcribes conversations between speech pathologists and their patients.
                            It maintains and annotates speech errors, useful for diagnostic purposes, and records the transcription into SALT formatting.
                            In the app, pathologists can label speakers, add morphemes, and check the grammar.</p>
                    </div>



                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-self-right">
                        <a target="_blank" href="https://github.com/oss-slu/SpeechTranscription" className="font-semibold text-(--darkBlue) outline-(--darkBlue) outline-4 rounded-xl bg-(--offWhite) p-4 hover:text-(--lightGreen) hover:bg-(--darkBlue)">
                            View on Github
                        </a>
                        <a target="_blank" href="https://oss-slu.github.io/projects/saltify/about" className="font-semibold text-(--darkBlue) outline-(--darkBlue) outline-4 rounded-xl bg-(--offWhite) p-4 hover:text-(--lightGreen) hover:bg-(--darkBlue)">
                            View on OSS
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}
