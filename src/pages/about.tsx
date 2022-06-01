import ConstWrap from "@/common/components/constWrap"
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io'
import { SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiSvelte, SiBlender, SiAdobephotoshop, SiNetlify } from 'react-icons/si'


export default function About() {


    return (
        <section className='section'>
            <h1 className='page-title'>About</h1>
            <div className="grid gap-10 md:grid-cols-2">
                <div className="relative">
                    <img src="/assets/Benten.png" />
                </div>
                <div className="relative w-full h-full flex flex-col justify-center items-start space-y-8">
                    <ConstWrap variable="developer">
                        <div className="text-2xl">
                            <div>name: <span className="text-amber-400">'Benton'</span></div>
                            <div>age: <span className="text-green-400">24</span></div>
                            <div>location: <span className="text-amber-400">'Alberta, Canada'</span></div>
                        </div>
                    </ConstWrap>
                    <div className="relative">
                        <p className="max-w-[100ch] text-base">
                            Hi, welcome to my portfolio. I am a front-end web developer and 3D artist living in Alberta, Canada. From a young age I have been obsessed with building things using computers, from simple blogs and websites to entire 3D worlds. I love creating things that bring joy or utility to others.<br /><br />

                            In 2021 I graduated from University with a degree in Kinesiology. Fitness has always been another passion of mine and I wanted to combine that with computers and technology. Having learned to code at a young age I was able to pick up web development quickly alongside finishing my degree.<br /><br />

                            I love to learn and grow as a developer. My goal is to learn from my peers and experts in the field to continually improve my coding and design skills in order to become the best developer I can possibly be.
                        </p>
                    </div>
                    <div className="relative">
                        <ConstWrap variable='stack'>
                            <div className="flex items-end flex-wrap space-y-4 max-w-[75%]">
                                <IoLogoHtml5 className='w-10 h-10 transition hover:fill-accent' />
                                <span className="font-code opacity-30 mr-2 -ml-1">, </span>
                                <IoLogoCss3 className='w-10 h-10 hover:fill-primary' />
                                <span className="font-code opacity-30 mr-2 -ml-1">, </span>
                                <IoLogoJavascript className='w-10 h-10 hover:fill-accent' />
                                <span className="font-code opacity-30 mr-2 ml-1">, </span>
                                <SiTypescript className='w-10 h-10 hover:fill-primary' />
                                <span className="font-code opacity-30 mr-2 ml-1">, </span>
                                <SiReact className='w-10 h-10 hover:fill-primary' />
                                <span className="font-code opacity-30 mr-2 ml-1">, </span>
                                <SiNextdotjs className='w-10 h-10 hover:fill-slate-400' />
                                <span className="font-code opacity-30 mr-2 ml-1">, </span>
                                <SiTailwindcss className='w-10 h-10 hover:fill-secondary' />
                                <span className="font-code opacity-30 mr-2 ml-1">, </span>
                                <SiSvelte className='w-10 h-10 hover:fill-accent' />
                                <span className="font-code opacity-30 mr-2 ml-1">, </span>
                                <SiNetlify className='w-10 h-10 hover:fill-secondary' />
                                <span className="font-code opacity-30 mr-2 ml-1">, </span>
                                <SiAdobephotoshop className='w-10 h-10 hover:fill-primary' />
                                <span className="font-code opacity-30 mr-2 ml-1">, </span>
                                <SiBlender className='w-10 h-10 hover:fill-accent' />
                            </div>
                        </ConstWrap>
                    </div>
                </div>
            </div>
        </section>
    )
}