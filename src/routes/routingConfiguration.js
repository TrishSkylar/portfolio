/* Pages */
import AboutMe from '../pages/AboutMe';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Work from '../pages/Work';

/* Configuration */
export default [
  {
    page: AboutMe,
    exact: true,
    path: '/about-me'
  },
  {
    page: Contact,
    exact: true,
    path: '/contact'
  },
  {
    page: Home,
    exact: true,
    path: '/'
  },
  {
    page: Work,
    exact: true,
    path: '/work'
  }
];