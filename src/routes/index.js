import Homepage from '../components/Homepage/Homepage'
import About from '../components/About/About'
import NotFound from '../components/NotFound/NotFound'

export default [
    { 
        path: '/',
        exact: true,
        component: Homepage
    },
    { 
        path: '/about',
        component: About,
        /*routes: [
            { 
                path: '/about/contacts',
                component: Contacts
            }
        ]*/
    },
    { 
        path: '*',
        component: NotFound
    }
]