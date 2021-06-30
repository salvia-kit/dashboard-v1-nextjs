import UxIcon from './icons/Ux';
import ArIcon from './icons/ar';
import AppsIcon from './icons/apps';
import VideosIcon from './icons/videos';
import UpdatesIcon from './icons/updates';
import PhotographyIcon from './icons/photography';
import IllustrationIcon from './icons/illustration';
import DocumentationIcon from './icons/documentation';
import GraphicDesignIcon from './icons/graphic-design';

const data = [
  {
    section: 'Apps',
    content: [
      {
        title: 'All Apps',
        icon: <AppsIcon />,
        link: '/',
      },
      {
        title: 'Updates',
        icon: <UpdatesIcon />,
        link: '/admin/updates',
      },
    ],
  },
  {
    section: 'Categories',
    content: [
      {
        title: 'Photography',
        icon: <PhotographyIcon />,
        link: '/admin/photography',
      },
      {
        title: 'Graphic Design',
        icon: <GraphicDesignIcon />,
        link: '/admin/graphic-design',
      },
      {
        title: 'Videos',
        icon: <VideosIcon />,
        link: '/admin/videos',
      },
      {
        title: 'Illustrations',
        icon: <IllustrationIcon />,
        link: '/admin/illustration',
      },
      {
        title: 'UI/UX',
        icon: <UxIcon />,
        link: '/admin/ux',
      },
      {
        title: '3D/AR',
        icon: <ArIcon />,
        link: '/admin/ar',
      },
    ],
  },
  {
    section: 'Guides',
    content: [
      {
        title: 'Documentation',
        icon: <DocumentationIcon />,
        link: '/admin/documentation',
      },
    ],
  },
];

export default data;
