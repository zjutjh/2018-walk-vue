import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('../page/index'),
            children: [
                {
                    path: '/index',
                    name: 'notApply',
                    component: () => import('../page/index/com/notApply/index.vue')
                },
                {
                    path: 'applying',
                    name: 'applying',
                    component: () => import('../page/index/com/applying/index.vue')
                },
                {
                    path: 'applyed/notHaveTeam',
                    name: 'notHaveTeam',
                    component: () => import('../page/index/com/applyed/notHaveTeam/index.vue')
                },
                {
                    path: 'applyed/haveTeam/captain',
                    name: 'captain',
                    component: () => import('../page/index/com/applyed/haveTeam/captain.vue')
                },
                {
                    path: 'applyed/haveTeam/member',
                    name: 'member',
                    component: () => import('../page/index/com/applyed/haveTeam/member.vue')
                }
            ]
        },
        {
            path: '/login/',
            name: 'login',
            component: () => import('../page/login'),
            children: [
                {
                    path: '/',
                    name: 'stuLogin',
                    component: () => import('../page/login/com/stu')
                },
                {
                    path: 'other',
                    name: 'other',
                    component: () => import('../page/login/com/other')
                }
            ]



        },
        {
          path: '/mine/info',
          name: 'mineInfo',
          component: () => import('../page/mineInfo')
        },
        {
            path: '/team/create',
            name: 'teamCreateOrUpdate',
            component: () => import('../page/create')
        },
        {
            path: '/team/list',
            name: 'teamList',
            component: () => import('../page/teamList')
        },
        {
            path: '/mine/team',
            name: 'mineTeam',
            component: () => import('../page/mineTeam'),
            children: [
                {
                    path: 'captain',
                    name: 'captainTeam',
                    component: () => import('../page/mineTeam/com/captain')
                },
                {
                    path: 'member',
                    name: 'memberTeam',
                    component: () => import('../page/mineTeam/com/member')
                }

            ]
        },
        {
            path: '/finish',
            name: 'finish',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../page/finish/index.vue')
        }, {
            path: '/dis',
            name: 'di',
            component: () => import('../page/disclaimer')
        }
    ]
})
