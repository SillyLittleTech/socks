import { collection, config, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local'
  },
  ui: {
    brand: {
      name: 'Socks'
    },
    navigation: {
      Guides: ['docs']
    }
  },
  collections: {
    docs: collection({
      label: 'Guides',
      slugField: 'title',
      path: 'src/content/docs/**',
      entryLayout: 'content',
      format: {
        contentField: 'content'
      },
      schema: {
        title: fields.slug({
          name: {
            label: 'Title'
          }
        }),
        description: fields.text({
          label: 'Description',
          multiline: true
        }),
        sidebar: fields.object(
          {
            order: fields.number({
              label: 'Sidebar order',
              validation: { isRequired: false }
            })
          },
          {
            label: 'Sidebar',
            description: 'Optional navigation metadata for Starlight.'
          }
        ),
        content: fields.markdoc({
          label: 'Content',
          extension: 'md',
          options: {
            image: {
              directory: 'public/content-images',
              publicPath: '/content-images/'
            }
          }
        })
      }
    })
  }
});
