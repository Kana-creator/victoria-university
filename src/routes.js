import About from './pages/about'
import Home from './pages/home'

export const mainNav = [
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/about',
    name:'About Us',
    children:[
      {
        path:'/about',
        name:'About Us',
        component:About,
      },
      {
        path:'/about',
        name:'Who we Are',
        component:About,
      },
      {
        path:'/about/uni-council',
        name:'University Council',
        component:Home
    
      },
      {
        path:'/about/virtual-tour',
        name:'Virtual Tour',
        component:Home
      },
      {
        path:'/about/partners',
        name:'Partners and collaborators',
        component:Home
      },
      {
        path:'/about/partners',
        name:'Partners and collaborators',
        component:Home
      },
      {
        path:'/about/contactus',
        name:'Contact Us',
        component:Home
      },
    ]
  }, 
]
export const  topNav = [
  {
    path:'/staff',
    name:'Staff',
    component:Home,
  },
  {
    path:'/almuni',
    name:'Almuni',
    component:Home,
  },

]

const routes = [...mainNav, ...topNav]

export default routes 
