import { PortableText } from "@portabletext/react"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { materialOceanic } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Button from "@/common/components/functionButton"
import Link from "next/link"

export async function getStaticProps(context: any) {
    const res = await fetch(`https://6po0ek1e.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%20%26%26%20slug.current%20%3D%3D%20'${context.params.post}'%5D%7B'image'%3AmainImage.asset-%3Eurl%2C%20title%2C%20'categories'%3Acategories%5B%5D-%3Etitle%2C%20body%2C%20'author'%3Aauthor-%3Ename%2C%20_createdAt%7D`)
    const post = await res.json()
    return {
        props: { post }, // will be passed to the page component as props
    }
}

function Code(value: any) {
    console.log(value)
    return (
        <SyntaxHighlighter
            language={value.content.language}
            style={materialOceanic}
            codeTagProps={{ style: { backgroundColor: '' } }}
            customStyle={{ backgroundColor: 'rgb(38, 38, 43)' }}>
            {value.content.code}
        </SyntaxHighlighter >
    )
}

const myPortableTextComponents = {
    types: {
        code: ({ value }: any) => <Code content={value} />,
    }
}

export async function getStaticPaths() {
    const res = await fetch("https://6po0ek1e.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22post%22%5D%7B'slug'%3Aslug.current%7D")
    const slugs = await res.json()
    const paths = slugs.result.map((p: any) => {
        return {
            params: {
                post: p.slug
            }
        }
    })
    return {
        paths,
        fallback: true // false or 'blocking'
    }
}

export default function Post(props: any) {
    const post = props.post.result[0]
    return (
        <>
            <section className="section">
                <Link passHref href='/blog'><a><Button>page.back</Button></a></Link>
                <img className="w-full h-48 sm:h-72 lg:h-96 xl:h-[425px] 2xl:h-[500px] object-cover" src={post.image} />
            </section>
            <section className="section !max-w-3xl">
                <h1 className="text-4xl lg:text-6xl my-10 font-light">{post.title}</h1>
                <div className="prose prose-code:text-xs prose-a:hover-effect prose-a:no-underline prose-a:font-normal font-sans prose-invert max-w-none prose-h2:text-primary prose-h3:text-secondary prose-blockquote:text-white/60 prose-h4:text-accent prose-headings:font-code">
                    <PortableText value={post.body} components={myPortableTextComponents} />
                </div>
            </section>
        </>
    )
}