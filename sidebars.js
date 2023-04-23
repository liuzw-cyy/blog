/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
  note: [
    'introduction',
    {
      label: 'Docusaurus Theme',
      type: 'category',
      link: {
        type: 'doc',
        id: 'docusaurus/docusaurus-guides'
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'docusaurus/docs',
        },
      ],
    },
    {
      label: 'Code Review',
      type: 'category',
      link: {
        type: 'doc',
        id: 'code-specification/code-specification-guides'
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'code-specification/docs',
        },
      ],
    },
    {
      label: 'Vue',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'vue',
        },
      ],
    },
    {
      label: 'React',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'react',
        },
      ],
    },
    {
      label: 'Web',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'web',
        },
      ],
    },
    {
      label: 'JavaScript',
      type: 'category',
      link: {
        type: 'generated-index',
        title: 'JavaScript',
      },
      items: [
        {
          label: 'JavaScript常用方法实现',
          type: 'category',
          link: {
            type: 'doc',
            id: 'js/JavaScript常用方法实现/JavaScript常用方法实现-guides',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'js/JavaScript常用方法实现/docs',
            }
          ]
        },
        {
          label: 'JavaScript技巧',
          type: 'category',
          link: {
            type: 'doc',
            id: 'js/JavaScript技巧/JavaScript技巧-guides',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'js/JavaScript技巧/docs',
            }
          ]
        },
      ],
    },
    {
      label: 'Node',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'node',
        },
      ],
    },
    {
      label: 'CSS',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'css',
        },
      ],
    },
    {
      label: 'Git',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'git',
        },
      ],
    },
    {
      label: 'Algorithm',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'algorithm',
        },
      ],
    },
    {
      label: 'Docker',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'docker',
        },
      ],
    },
    {
      label: 'SQL',
      type: 'category',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          label: 'Mysql',
          type: 'category',
          link: {
            type: 'doc',
            id: 'database/mysql/mysql-note',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'database/mysql',
            },
          ],
        },
        {
          label: 'MongoDB',
          type: 'category',
          link: {
            type: 'doc',
            id: 'database/mongo/mongodb-note',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'database/mongo',
            },
          ],
        },
        {
          label: 'Redis',
          type: 'category',
          link: {
            type: 'doc',
            id: 'database/redis/redis-note',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'database/redis',
            },
          ],
        },
        {
          label: 'Elasticsearch',
          type: 'category',
          link: {
            type: 'doc',
            id: 'database/elasticsearch/elasticsearch-note',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'database/elasticsearch',
            },
          ],
        },
      ],
    },
  ],
}

module.exports = sidebars
