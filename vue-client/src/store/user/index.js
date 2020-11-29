import { firebase } from '@/services'

const state = {
  userProfile: {},
  loggedIn: false
}

const getters = {
  userProfile: ({ userProfile }) => userProfile,
  loggedIn: ({ loggedIn }) => loggedIn
}

const mutations = {
  USER_DETAILS (state, userProfile) {
    state.loggedIn = true
    state.userProfile = {
      uid: userProfile.uid,
      displayName: userProfile.displayName,
      email: userProfile.email,
      photoURL: userProfile.photoURL
    }
  },
  LOGOUT (state) {
    state.userProfile = {}
    state.loggedIn = false
  }
}

const actions = {
 async login (store) {
  if (store.state.loggedIn) return;
  
  const provider = new firebase.auth.GoogleAuthProvider()
  try {
    await firebase.auth().signInWithPopup(provider)
  } catch (error) {
    console.error(error)
  }
 },
 async logout (state) {
  try {
    await firebase.auth().signOut()
  } catch (error) {
    console.error(error)
  }
 }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}