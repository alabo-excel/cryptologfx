import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/login.vue')
    },
    {
        path: '/signup',
        name: 'Signup',
        component: () =>
            import ('../views/signup.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () =>
            import ('../views/dashboard.vue')
    },
    {
        path: '/notification',
        name: 'Notification',
        component: () =>
            import ('../views/notification.vue')
    },
    {
        path: '/referals',
        name: 'Referals',
        component: () =>
            import ('../views/referals.vue')
    },
    {
        path: '/support',
        name: 'Support',
        component: () =>
            import ('../views/support.vue')
    },
    {
        path: '/withdrawals',
        name: 'Withdrawals',
        component: () =>
            import ('../views/withdrawals.vue')
    },
    {
        path: '/deposit',
        name: 'Deposit',
        component: () =>
            import ('../views/deposit.vue')
    },
    {
        path: '/editprofile',
        name: 'EditProfile',
        component: () =>
            import ('../views/editProfile.vue')
    },
    {
        path: '/changepassword',
        name: 'ChangePassword',
        component: () =>
            import ('../views/changePassword.vue')
    },
    {
        path: '/withdrawalinfo',
        name: 'WithdrawalInfo',
        component: () =>
            import ('../views/withdrawalInfo.vue')
    },
    {
        path: '/transaction',
        name: 'Transaction',
        component: () =>
            import ('../views/transaction.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router