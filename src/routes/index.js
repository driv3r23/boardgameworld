import Homepage from '../components/Homepage/Homepage'
import About from '../components/About/About'

export default [
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
        path: '/',
        component: Homepage
    }
]