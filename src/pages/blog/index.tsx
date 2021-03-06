import Link from "next/link"
import Head from "next/head"
export async function getStaticProps() {

    const res = await fetch("https://6po0ek1e.api.sanity.io/v2021-10-21/data/query/production?query=%7B%27featured%27%3A%2A%5B_type%20%3D%3D%20%22post%22%20%26%26%20featured%20%3D%3D%20true%5D%7B%27image%27%3AmainImage.asset-%3Eurl%2C%20%27slug%27%3Aslug.current%2C%20featured%2C%20title%2C%20%27categories%27%3Acategories%5B%5D-%3Etitle%2C%20body%2C%20%27author%27%3Aauthor-%3Ename%2C%20_createdAt%7D%2C%0A%22posts%22%3A%2A%5B_type%20%3D%3D%20%22post%22%20%26%26%20featured%20%3D%3D%20false%5D%7B%27image%27%3AmainImage.asset-%3Eurl%2C%20%27slug%27%3Aslug.current%2C%20featured%2C%20title%2C%20%27categories%27%3Acategories%5B%5D-%3Etitle%2C%20body%2C%20%27author%27%3Aauthor-%3Ename%2C%20_createdAt%7D%7D")
    const posts = await res.json()

    return {
        props: {
            posts,
        },
    }
}

export default function Blog(props: any) {
    console.log(props)
    return (
        <>
            <Head>
                <title>@benten: blog</title>
                <link rel="shortcut icon" href="/favicon.png" />
            </Head>
            <div className='space-y-10'>
                <section className="section">
                    <h1 className='page-title'>Blog</h1>
                    <div className='mb-5'></div>
                    {props.posts.result.featured.map((b: any) => <Link key={b.slug} passHref href={`/blog/${b.slug}`}>
                        <FeatureBlogCard post={b} />
                    </Link>)}
                </section>
                <section className="section space-y-8">
                    {props.posts.result.posts.map((p: any) => <Link key={p.slug} passHref href={`/blog/${p.slug}`}><BlogCard post={p} /></Link>).reverse()}
                </section>
            </div >
        </>
    )
}

function FeatureBlogCard({ href, post }: any) {
    return (
        <a href={href} className='block group relative w-full p-4 md:p-6 bg-background-focus rounded-lg'>
            <div className={`absolute -z-10 inset-1 blur-lg bg-gradient-to-tr from-primary to-secondary opacity-0 group-hover:opacity-100 transition`}></div>
            <img className=' h-40 md:h-96 w-full object-cover rounded-md' src={post.image} />
            <div className='flex flex-col lg:flex-row justify-between mt-4'>
                <h2 className='text-3xl'>{post.title}</h2>
                <div className='text-sm'>
                    <div className='text-primary'>{post.author}</div>
                    <div className='text-secondary'>{post._createdAt.substring(0, 10)}</div>
                    <div className='text-accent'>{post.categories.map((c: string, i: number) => <span key={c}>{c}{i === post.categories.length - 1 ? '' : ', '}</span>)}</div>
                </div>
            </div>
        </a >
    )
}

function BlogCard({ href, post }: any) {
    return (
        <a href={href} className='block group relative w-full p-4 md:p-6 bg-background-focus rounded-lg'>
            <div className={`absolute -z-10 inset-1 blur-lg opacity-0 bg-gradient-to-tr from-primary to-secondary group-hover:opacity-100 group-focus:opacity-100 transition`}></div>
            <img className='hidden md:block h-24 md:h-48 w-full object-cover rounded-md' src={post.image} />
            <div className='flex flex-col lg:flex-row justify-between lg:items-center mt-2'>
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