import AllBooks from './views/AllBook.vue';
import AddBook from './views/AddBook.vue';
import EditBook from './views/EditBook.vue';
import Login from './views/Login.vue';


export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllBooks
    },
    {
        name: 'add',
        path: '/add',
        component: AddBook
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditBook
    },
    {
        name: 'login',
        path: '/login',
        component: Login
    }
];
