export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'github',
      title: 'Github',
      type: 'url',
    },
    {
      name: 'external',
      title: 'External',
      type: 'url',
    },
    {
      name: 'blog',
      title: 'Blog',
      type: 'url',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'text',
    },
  ],
  initialValue: {
    featured: false
  },
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
