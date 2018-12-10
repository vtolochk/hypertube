import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Movies from '@/components/Movies'
import Movie from '@/components/Movie'
import Activation from '@/components/Activation'
import UserProfile from '@/components/UserProfile'
import UserSettings from '@/components/UserSettings'
import NotFound from '@/components/NotFound'
import Oauth from '@/components/Oauth'

Vue.use(Router)

let router = new Router({
	mode: 'history',
	base: __dirname,
	routes: [
		{
			path: '/',
			component: Home,
			props: true,
		},
		{
			path: '/movies',
			component: Movies,
			props: true,
		},
		{
			path: '/movies/:id',
			component: Movie,
			props: true,
		},
		{
			path: '/activate',
			name: 'activation',
			props: true,
			component: Activation
		},
		{
			path: '/intra',
			name: 'oauth42',
			component: Oauth
		},
		{
			path: '/github',
			name: 'oauthGit',
			component: Oauth
		},
		{
			path: '/user/:id',
			name: 'userProfile',
			props: true,
			component: UserProfile,
		},
		{
			path: '/settings',
			name: 'userSettings',
			component: UserSettings,
			props: true,
		},
		{
			path: '/404',
			name: 'NotFound',
			component: NotFound,
			props: true
		},
		{
			path: '*',
			redirect: '/404' 
		}, 
	]
})

export default router
