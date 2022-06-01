import { FiExternalLink } from 'react-icons/fi'
import { SiGithub } from 'react-icons/si'
import { MdArticle } from 'react-icons/md'

export default function Projects() {

    return (
        <section className="section space-y-10">
            <h1 className='page-title'>Projects</h1>
            <FeaturedProject />
            <FeaturedProject />
            <div className="grid md:grid-cols-2 gap-4">
                <Project />
                <Project />
                <Project />
                <Project />
            </div>
        </section>
    )
}

function FeaturedProject() {
    return (
        <a className='block relative w-full p-4 md:p-6 bg-background-focus rounded-lg'>
            <img className='h-[496px] w-full object-cover rounded-md' src='/assets/ChickChau.jpg' />
            <div className='flex flex-col mt-4 md:flex-row justify-between'>
                <h2 className='text-3xl'>Project Name here</h2>
                <div className='flex space-x-3 mt-4 md:mt-0'>
                    <FiExternalLink className='w-10 h-10 stroke-primary' />
                    <SiGithub className='w-10 h-10 fill-secondary' />
                    <MdArticle className='w-10 h-10 fill-accent' />
                </div>
            </div>
            <p className='text-base mt-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptate minima molestias illum ratione distinctio optio architecto exercitationem, ex odio quaerat vel libero numquam, modi nostrum saepe tempora ab! Enim magnam est officiis molestias nesciunt repudiandae rerum molestiae animi illum nobis repellat repellendus, a doloribus vitae ea. Culpa doloribus iusto voluptatum voluptatem commodi quos sapiente eius reiciendis, voluptates praesentium repudiandae illum quam rem error distinctio, ea modi ad ducimus assumenda vitae omnis ipsa. Corporis minima ex vel in? Hic non sunt iure totam suscipit, dolore quaerat consequuntur animi natus molestiae maiores recusandae consectetur at dignissimos mollitia aut illum et accusantium.
            </p>
        </a>
    )
}
function Project() {
    return (
        <a className='block relative w-full p-4 bg-background-focus rounded-lg'>
            <div className='flex justify-between mt-4'>
                <h2 className='text-2xl'>Project Name here</h2>
                <div className='flex space-x-3'>
                    <FiExternalLink className='w-8 h-8 stroke-primary' />
                    <SiGithub className='w-8 h-8 fill-secondary' />
                    <MdArticle className='w-8 h-8 fill-accent' />
                </div>
            </div>
            <p className='text-sm mt-5'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum voluptate minima molestias illum ratione distinctio optio architecto exercitationem, ex odio quaerat vel libero numquam, modi nostrum saepe tempora ab!
            </p>
        </a>
    )
}