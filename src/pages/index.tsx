import Link from 'next/link'
import { SiGithub } from 'react-icons/si'
import { FaArtstation } from 'react-icons/fa'
import { FiExternalLink } from 'react-icons/fi'

export async function getStaticProps() {

    const res = await fetch("https://6po0ek1e.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%7Btitle%2C%20'author'%3Aauthor-%3Ename%2C%20'slug'%3Aslug.current%2C%20body%2C%20'categories'%3Acategories%5B%5D-%3Etitle%2C%20'image'%3AmainImage.asset-%3Eurl%2C%20_createdAt%7D%20%7C%20order(_createdAt%20desc)%5B0..1%5D")
    const posts = await res.json()

    return {
        props: {
            posts,
        },
    }
}

export default function Home(props: any) {
    return (
        <div className="space-y-10">
            <section className='section'>
                <div className='grid md:grid-cols-3 place-items-center'>
                    <div className="col-span-2">
                        <h1 className='text-2xl sm:text-4xl '>I{"'"}m Benton. I{"'"}m a developer, blogger and 3D artist.</h1>
                        <div className="grid grid-cols-2 md:block">
                            <div className='inline-flex flex-col items-start md:flex-row space-y-2 md:space-y-0 md:space-x-10 mt-5'>
                                <Link href='/blog'>
                                    <a className='inline-block hover-effect text-2xl'>blog</a>
                                </Link>
                                <Link href='/projects'>
                                    <a className='inline-block hover-effect text-2xl'>projects</a>
                                </Link>
                                <Link href='/about'>
                                    <a className='inline-block hover-effect text-2xl'>about me</a>
                                </Link>
                            </div>
                            <img className='md:hidden' src='/assets/benten.png' />
                        </div>
                    </div>
                    <img className='hidden md:block h-60 w-auto' src='/assets/benten.png'></img>
                </div>
            </section>
            <section className='section'>
                <div className='w-full max-w-3xl space-y-6'>
                    <h2 className='text-3xl'>latest posts</h2>
                    {props.posts.result.map((p: any) => <Link key={p.slug} href={`/blog/${p.slug}`} passHref><HomeBlogCard post={p} /></Link>)}
                </div>
            </section>
            <section className='section'>
                <div className="grid lg:grid-cols-2 gap-10 max-w-3xl">
                    <div className='block group relative w-full p-6 bg-background-focus rounded-lg'>
                        <div className='flex items-center space-x-2'>
                            <SiGithub className='w-12 h-12' />
                            <h2 className='text-3xl'>@B3nten</h2>
                        </div>
                        <ul className='mt-10 space-y-4'>
                            <li>
                                <a rel='noreferrer' target='_blank' href='https://github.com/B3nten/tabletop-journal'>
                                    <div className="flex items-center space-x-2">
                                        <h3 className='text-primary'>Notescroll</h3><FiExternalLink className='inline stroke-secondary' />
                                    </div>
                                    <p className='text-xs mt-1'>Notescroll is a progressive web app for table-top gamers, featuring note, references, timelines and more.</p>
                                </a>
                            </li>
                            <li>
                                <a rel='noreferrer' target='_blank' href='https://github.com/B3nten/tabletop-journal'>
                                    <div className="flex items-center space-x-2">
                                        <h3 className='text-primary'>ssg-asset-fetcher</h3><FiExternalLink className='inline stroke-secondary' />
                                    </div>
                                    <p className='text-xs mt-1'>ssg-asset-fetcher is a node command line tool to fetch and replace external assets in prerendered html.</p>
                                </a>
                            </li>
                            <li>
                                <a rel='noreferrer' target='_blank' href='https://github.com/B3nten/tabletop-journal'>
                                    <div className="flex items-center space-x-2">
                                        <h3 className='text-primary'>svelte-utilities</h3><FiExternalLink className='inline stroke-secondary' />
                                    </div>
                                    <p className='text-xs mt-1'>svelte-utilities is a utility library for Svelte/SvelteKit.</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a rel='noreferrer' target='_blank' href='https://artstation.com/benten28' className='block group relative w-full p-6 bg-background-focus rounded-lg aspect-square'>
                        <div className={`absolute -z-10 inset-1 blur-lg opacity-0 group-hover:opacity-100 transition`}></div>
                        <div className='flex items-center space-x-2'>
                            <FaArtstation className='w-12 h-12' />
                            <h2 className='text-3xl'>@benten28</h2>
                        </div>
                        <img className='mt-5' src="/assets/artstation.jpg" alt="" />
                    </a>
                </div>
            </section>
        </div>

    )
}

function HomeBlogCard({ href, post }: any) {

    return (
        <a href={href} className='block group relative w-full p-4 bg-background-focus rounded-lg'>
            <div className={`absolute -z-10 inset-1 blur-lg opacity-0 bg-gradient-to-tr from-primary to-secondary group-hover:opacity-100 group-focus:opacity-100 transition`}></div>
            <img className='h-40 w-full object-cover rounded-md' src={post.image} />
            <div className='flex flex-col lg:flex-row justify-between mt-4'>
                <h2 className='text-3xl'>{post.title}</h2>
                <div className='text-sm'>
                    <div className='text-primary'>{post.author}</div>
                    <div className='text-secondary'>{post._createdAt.substring(0, 10)}</div>
                    <div className='text-accent'>{post.categories.map((c: string, i: number) => <span key={c}>{c}{i === post.categories.length - 1 ? '' : ', '}</span>)}</div>
                </div>
            </div>
        </a>
    )
}

