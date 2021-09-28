import PortfolioSite from '../../images/PortfolioSite.png'
import ExerTracker from '../../images/ExerTracker.png'
import ArdentHQ from '../../images/ArdentHQ.png'

export const projects = [
  {
    title: 'Portfolio Website',
    subtitle: 'React and Node.js',
    description: 'The website you are seeing right now is made with React and Node.js.',
    image: PortfolioSite,
    link: 'https://github.com/aton4/portfolio-website',
    linkType: 'GitHub',
  },
  {
    title: 'Exercise Tracker',
    subtitle: 'MERN Stack Website',
    description:
      'A basic web app with MongoDB as the database, Express as the server, React as the tool to create the web pages, and Node.js as the JavaScript runtime environment. I created this project to teach some friends on how the backend and frontend of web apps are set up.',
    image: ExerTracker,
    link: 'https://github.com/aton4/MERN-Stack-Website',
    linkType: 'GitHub',
  },
  {
    title: 'Ardent Office',
    subtitle: 'React and GraphQL',
    description:
      'Developed the web application for office employees to interact with classroom and student tables in our RethinkDB database. One of my main contributions is creating the login page.',
    image: ArdentHQ,
    link: 'https://hq.ardentlabs.io/',
    linkType: 'Website',
  },
]
