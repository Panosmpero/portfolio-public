export const featuredData = [
  {
    id: 1,
    title: "Covid-19 Tracker",
    info: "A COVID-19 tracker built with React and React charts 2. The data is called with Axios and then served to the fields with React hooks. Style is made possible with Material UI and use of Sass and mostly Flexbox. The Map is created with Leaflet being fully interactive, auto-focusing on country change or click and the chart depicts the difference in cases, deaths, recovered numbers through time. The site is hosted on Firebase.",
    technologies: ["react", "material-UI", "React-charts-2", "Leaflet", "sass", "firebase"],
    url: "https://beros-covid-tracker.web.app",
    giturl: "https://github.com/Panosmpero/COVID-19-Tracker",
    img: "/img/covid_tracker.png"
  },
  {
    id: 2,
    title: "Amazon Clone",
    info: "A responsive amazon clone using React, Redux store for its frontend development. The backend is built with Node.js and the data is saved on MongoDB using mongoose and axios. The user can register / sign-in using his credentials while the password is hashed using bcrypt and the cart items are being saved in Cookie. Only admin can add / edit / remove products as well as managing pending customer orders with ease through a custom user interface. (Note: The initial page load may take some time, because the site is hosted on Heroku).",
    technologies: ["react", "redux", "sass", "node.js", "mongodb", "heroku"],
    url: "https://bero-amazon-clone.herokuapp.com/",
    giturl: "https://github.com/Panosmpero/amazon-clone",
    img: "/img/amazon_clone.png"
  },
  {
    id: 3,
    title: "E-commerce",
    info: "A responsive frontend e-commerce app using React hooks and useContext to populate its fields. The multi-layered search filter is custom made and it can automatically extract the necessary search parameters from the provided data. The cart items are being saved on local storage so that on page refresh / revisit, its contents will not be lost. The CSS is created with Sass compiler.",
    technologies: ["react", "javascript" , "sass", "styled-components"],
    url: "https://react-first-test-hooks.netlify.app",
    giturl: "https://github.com/Panosmpero/react-test-store",
    img: "/img/e-commerce.png"
  },
  {
    id: 4,
    title: "Choropleth Map",
    info: "A choropleth map utilizing D3.js library. It converts 2 seperate JSON API calls, one containing the map creation data and the other containing statistics, combining them together to result in readable and easy to understand data.",
    technologies: ["HTML", "CSS", "D3.js"],
    url: "https://codepen.io/panosmpero/full/VwvxRjj",
    giturl: "",
    img: "/img/choropleth_map.png"
  }
]