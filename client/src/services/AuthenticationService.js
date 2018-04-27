import Api from '@/services/Api'

export default {
  fetchUsers () {
    return Api().get('users')
  },
  register (params) {
    return Api().post('register', params)
  }
}
