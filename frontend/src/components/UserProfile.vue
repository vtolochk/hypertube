<template>
  <v-container fluid grid-list-md class="mt-3 white">
  <Loader :run='!downloaded'/>
    <v-layout row wrap>
      <v-flex d-flex md2 sm3 lg2>
      </v-flex>
      <v-flex xs12 md8 sm6 lg8 class="mt-5">
        <div flat>
          <v-img :aspect-ratio="13/6" :src="bgImg">
            <v-layout pa-2 column fill-height class="lightbox white--text">
              <v-spacer></v-spacer>
              <v-layout shrink>
                <v-flex shrink>
                  <v-avatar size="90" tile style="border: 8px solid white; border-radius: 50%;" class="p-5 mb-3 ml-3">
                    <v-img  v-if='downloaded' class='rounded round-img'
                          style="position: absolute;"
                          :aspect-ratio="16/9"
                          :src="myUser.image ? myUser.image : 'https://htstatic.imgsmail.ru/pic_image/f610f26e5e56d5851ef82213b8bbec5a/1200/630/1238972/'">
                          <v-layout slot="placeholder"
                                    fill-height
                                    align-center
                                    justify-center
                                    ma-0
                                    >
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                          </v-layout>
                    </v-img>
                  </v-avatar>
                </v-flex>
                <v-flex shrink>
                  <div v-if='downloaded' style="word-break: break-all; font-size: 2.5rem;">{{myUser.first ? myUser.first : this.$t('activation.invalid_alert')}}</div>
                  <div style="word-break: break-all; font-size: 2.5rem;">{{myUser.last}}</div>
                </v-flex>
              </v-layout>
            </v-layout>
          </v-img>
        </div>
        <list-of-movies v-if='myUser.first'  :title="$t('profile.profile.commented')"
                          :movies='commentedMovies'
                          :totalNumberOfMovies="totalNumberOfCommentedMovies"></list-of-movies>
        <list-of-movies   v-if="currentUser"
                          :title="$t('profile.profile.watched')"
                          :movies='watchedMovies'
                          :totalNumberOfMovies="totalNumberOfWatchedMovies"></list-of-movies>
      </v-flex>
      <v-flex d-flex md2 sm3 lg2>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import { HTTP } from '../http-common'
import randomImage from '../utils/randomImage'
import listOfMovies from './listOfMovies'
import Loader from './Loader'
import setDefaultPosterPath from '../utils/setDefaultPosterPath'
import setAuthorizationToken from '../utils/setAuthToken'

export default {
  name: 'UserPage',
  props: ['user', 'userLoggedIn', 'locale'],
  components: {'list-of-movies': listOfMovies, Loader },
  data () {
		return {
			myUser: {},
			commentedMovies: [],
			watchedMovies: [],
			bgImg:  randomImage(),
			totalNumberOfCommentedMovies: 0,
			totalNumberOfWatchedMovies: 0,
			currentUser: false,
			downloaded: false,
		}
    },
    methods: {

      getUserWatchedMovies() {
        HTTP.get('/movie/watched').then(result => {
			if (result.data.success == true) {
				this.currentUser = true
				setDefaultPosterPath(result.data.movies)
				this.watchedMovies = result.data.movies
				this.totalNumberOfWatchedMovies = this.watchedMovies.length
			} else if (result.data.success == false) {
				setAuthorizationToken(false)
				this.$router.push('/')
			}
			this.downloaded = true
        })
        .catch((err) => {
          	console.log('Error:', err)
			this.downloaded = true
			this.myUser.last = this.$t('activation.invalid_alert')
        })
      },

      getData() {
        let user_id = window.location.pathname.split('/')[2]
        HTTP.get('user/commented-movies/' + user_id).then(result => {
            if (result.data.success == true) {
              if (user_id === this.user.user_id) {
                this.getUserWatchedMovies()
              }
              this.myUser.first = result.data.first
              this.myUser.last = result.data.last
              this.myUser.image = result.data.image
              setDefaultPosterPath(result.data.movies)
              this.commentedMovies = result.data.movies
              this.totalNumberOfCommentedMovies = this.commentedMovies.length
              if (this.myUser.image === null) {
                this.myUser.image = this.user.image
              }
            } else if (result.data.success == false) {
              setAuthorizationToken(false)
              this.$router.push('/')
            }
			this.downloaded = true
          })
          .catch((err) => { this.downloaded = true; console.log('Error:', err) })
      },
    },

    mounted() {
        this.getData()
    },

	created() {
		if (localStorage.locale == 'en' || localStorage.locale  == 'ru' || localStorage.locale == 'uk') {
 			this.$i18n.locale = localStorage.locale
		}
        else {
            localStorage.locale = 'en'
            this.$i18n.locale = 'en'
        }
	},

  }
</script>
