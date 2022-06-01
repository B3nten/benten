import * as Dialog from '@radix-ui/react-dialog'
import styles from '@/modules/navigation/navigation.module.css'
import Button from '@/common/components/functionButton'
import ConstWrap from '@/common/components/constWrap'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FaArtstation } from 'react-icons/fa'
import Link from 'next/link'
import { useState } from 'react'

export default function Navigation() {
    function focus() {
        requestAnimationFrame(() => document.getElementById('contact')?.focus())
    }
    return (
        <nav className="mx-auto w-full px-4 pt-8 pb-16 md:py-12 lg:w-4/5 lg:px-0">
            <div className="flex justify-between items-end">
                <a href="/" className="group text-3xl sm:text-3xl flex items-bottom">
                    <span className="inline-block text-cyan-300 group-hover:rotate-180 group-hover:translate-y-2 transition-all">@</span>
                    <span>
                        <div>benton</div>
                    </span></a>
                <Dialog.Root >
                    <Dialog.Trigger asChild>
                        <Button>menu.open</Button>
                    </Dialog.Trigger>
                    <Dialog.Portal>
                        <Dialog.DialogContent className={`fixed bg-background-focus min-w-[20%] inset-y-0 right-0 p-10 pr-20 ${styles.dialogcontent}`}>
                            <Dialog.DialogClose className='absolute top-2 left-7'>
                                <Button className='hover:bg-[#4b4b4b]'>menu.close</Button>
                            </Dialog.DialogClose>
                            <div className="mt-10">
                                <ConstWrap variable='menu'>
                                    <ul className='font-code font-light text-xl space-y-3 flex flex-col items-start'>
                                        <li className='hover-effect inline-block'>
                                            <Link href="/">
                                                <a>
                                                    <Dialog.DialogClose className='font-light'>Home,</Dialog.DialogClose>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className='hover-effect inline-block'><Link href="/blog">
                                            <a>
                                                <Dialog.DialogClose className="font-light">Blog,</Dialog.DialogClose>
                                            </a>
                                        </Link>
                                        </li>
                                        <li className='hover-effect inline-block'>
                                            <Link href="/projects">
                                                <a>
                                                    <Dialog.DialogClose className="font-light">Projects,</Dialog.DialogClose>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className='hover-effect inline-block'>
                                            <Link href="/about">
                                                <a>
                                                    <Dialog.DialogClose className="font-light">About,</Dialog.DialogClose>
                                                </a>
                                            </Link>
                                        </li>
                                        <li className='hover-effect inline-block'>
                                            <button onClick={focus}>
                                                <Dialog.DialogClose className="font-light">Contact</Dialog.DialogClose>
                                            </button>
                                        </li>
                                    </ul>
                                </ConstWrap>
                            </div>
                            <div className='flex space-x-4 mt-10'>
                                <button>
                                    <BsGithub className='transition hover:fill-accent w-6 h-6' />
                                </button>
                                <button>
                                    <FaArtstation className='transition hover:fill-[#5972ff] w-6 h-6' />
                                </button>
                                <button>
                                    <BsLinkedin className='transition hover:fill-[#0059ff] w-6 h-6' />
                                </button>
                            </div>
                        </Dialog.DialogContent>
                    </Dialog.Portal>
                </Dialog.Root>
            </div>
        </nav>
    )
}
