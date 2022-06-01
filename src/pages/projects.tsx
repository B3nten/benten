import { FiExternalLink } from 'react-icons/fi'
import { SiGithub } from 'react-icons/si'
import { MdArticle } from 'react-icons/md'

export async function getStaticProps() {
    const res = await fetch("https://6po0ek1e.api.sanity.io/v2021-10-21/data/query/production?query=%7B'featured'%3A*%5B_type%20%3D%3D%20%22project%22%20%26%26%20featured%20%3D%3D%20true%5D%7B'image'%3AmainImage.asset-%3Eurl%2C%20title%2C%20body%2C%20github%2C%20external%2C%20blog%20%7D%2C%0A%22projects%22%3A*%5B_type%20%3D%3D%20%22project%22%20%26%26%20featured%20%3D%3D%20false%5D%7Btitle%2C%20body%2C%20github%2C%20external%2C%20blog%20%7D%7D")
    const posts = await res.json()
    return {
        props: {
            posts,
        },
    }
}

export default function Projects(props: any) {
    return (
        <section className="section space-y-10">
            <h1 className='page-title'>Projects</h1>
            {props.posts.result.featured.map((p: any) => <FeaturedProject project={p} />)}
            <div className="grid md:grid-cols-2 gap-4">
                {props.posts.result.projects.map((p: any) => <Project project={p} />)}
            </div>
        </section>
    )
}

function FeaturedProject(project: any) {
    console.log(project)
    return (
        <div className='block relative w-full p-4 md:p-6 bg-background-focus rounded-lg'>
            <img className='h-[496px] w-full object-cover rounded-md' src='/assets/ChickChau.jpg' />
            <div className='flex flex-col mt-4 md:flex-row justify-between'>
                <h2 className='text-3xl'>{project.project.title}</h2>
                <div className='flex space-x-3 mt-4 md:mt-0'>
                    {project.project.external &&
                        <a rel='external' target='_blank' href={project.project.external}>
                            <FiExternalLink className='w-10 h-10 transition hover:stroke-primary' />
                        </a>}
                    {project.project.github &&
                        <a rel='external' target='_blank' href={project.project.github}>
                            <SiGithub className='w-10 h-10 stroke-primary transition hover:fill-secondary' />
                        </a>}
                    {project.project.blog &&
                        <a rel='external' target='_blank' href={project.project.blog}>
                            <MdArticle className='w-10 h-10 stroke-primary transition hover:fill-accent' />
                        </a>}
                </div>
            </div>
            <p className='text-base mt-10'>
                {project.project.body}
            </p>
        </div>
    )
}
function Project(project: any) {
    return (
        <div className='block relative w-full p-4 bg-background-focus rounded-lg'>
            <div className='flex justify-between mt-4'>
                <h2 className='text-2xl'>{project.project.title}</h2>
                <div className='flex space-x-3'>
                    {project.project.external &&
                        <a rel='external' target='_blank' href={project.project.external}>
                            <FiExternalLink className='w-8 h-8 transition hover:stroke-primary' />
                        </a>}
                    {project.project.github &&
                        <a rel='external' target='_blank' href={project.project.github}>
                            <SiGithub className='w-8 h-8 stroke-primary transition hover:fill-secondary' />
                        </a>}
                    {project.project.blog &&
                        <a rel='external' target='_blank' href={project.project.blog}>
                            <MdArticle className='w-8 h-8 stroke-primary transition hover:fill-accent' />
                        </a>}
                </div>
            </div>
            <p className='text-sm mt-5'>
                {project.project.body}
            </p>
        </div>
    )
}