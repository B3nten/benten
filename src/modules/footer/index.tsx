import ConstWrap from "@/common/components/constWrap"
import Button from "@/common/components/functionButton"
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaArtstation } from 'react-icons/fa'

export default function Footer() {

    return (
        <section className="py-20 px-4 ">
            <div className="w-full grid gap-10 md:gap-4 md:grid-cols-2 items-top md:justify-items-center ">
                <form id="myform" data-netlify="true" name="Contact" method="POST" className="flex flex-col justify-start items-start space-y-2">
                    <ConstWrap variable="contact_form">
                        <div className="space-y-2">
                            <div className="grid grid-cols-[auto_auto] place-items-start space-x-4 font-code">
                                <div className="flex flex-col space-y-2">
                                    <label htmlFor="name">name: </label>
                                    <label htmlFor="email">email: </label>
                                    <label htmlFor="message">message: </label>
                                </div>
                                <div className="flex flex-col space-y-2">
                                    <span><input id='contact' className='bg-background-focus rounded-sm w-full max-w-[12rem]' name="name" required={true} />,</span>
                                    <span><input className='bg-background-focus rounded-sm w-full max-w-[12rem]' name="email" type="email" required={true} />,</span>
                                    <span><textarea className='bg-background-focus rounded-sm w-full max-w-[12rem]' name="message" />,</span>
                                </div>
                            </div>
                        </div>
                        <Button className='-translate-x-3'>Send</Button>
                    </ConstWrap>
                    <input type="hidden" name="form-name" value="Contact" />
                </form>

                <div className="space-y-1">
                    <ConstWrap variable="socials">
                        <button>
                            <BsGithub className='transition hover:fill-accent w-6 h-6' />
                        </button>
                        <span>, </span>
                        <button>
                            <FaArtstation className='transition hover:fill-[#5972ff] w-6 h-6' />
                        </button>
                        <span>, </span>
                        <button>
                            <BsLinkedin className='transition hover:fill-[#0059ff] w-6 h-6' />
                        </button>
                    </ConstWrap>
                </div>
            </div>
        </section>
    )
}