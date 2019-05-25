export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce94160cb2a0d1252565c9f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-6u37c1uw',
                  apiId: '4c9f679d-778b-49a1-8b52-c74470f30a15'
                },
                {
                  buildHookId: '5ce941613b675fc5dcc2b40f',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-p7ouh726',
                  apiId: '8678cb5f-138a-4347-9453-b78c4aceb120'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/brendanmicallef/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-p7ouh726.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
