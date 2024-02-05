
const routes = [
    {
        path: '/',
        component: () => import('layouts/MainLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('pages/IndexPage.vue'),
                title: "Anirudha Jadhav",
                // meta: {
                //     title: "Anirudha Jadhav"
                // }
            },
            { path: 'resume', component: () => import('pages/ResumePage.vue') },
            // Always leave this as last one,
            // but you can also remove it
            {
                path: '/:catchAll(.*)*',
                component: () => import('pages/ErrorNotFound.vue')
            }
        ]
    },
    {
        path: '/admin',
        component: () => import('layouts/AdminLayout.vue'),
        children: [
            {
                path: '',
                component: () => import('pages/AdminPage.vue')
            }
        ]
    }

]

export default routes
