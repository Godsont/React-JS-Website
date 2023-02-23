export default {
  name: 'posts',
  title: 'Posts',
  type: 'document',
  fields: [
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
    },

    {
      name: 'label',
      type: 'string',
      title: 'Label',
    },

    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },

    {
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
      title: 'Content',
    },

    {
      name: 'datePublished',
      type: 'date',
      title: 'Date Published',
    },

    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
    },
  ],
}
