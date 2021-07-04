const Snippet = () => (
  <pre className="font-mono text-sm px-4 py-1 rounded overflow-x-auto max-w-full bg-gray-100 text-black border">
    {`[ 
  {
    section : 'Apps',
    content: [
      {
        title: 'All Apps',
        icon: <AllAppsIcon />,
        link: '/admin/all-apps'
      },
      {
        title: 'Updates',
        icon: <UpdatesIcon/>,
        link: '/admin/updates'
      },
    ]
  },
]
`}
  </pre>
);

export default Snippet;
