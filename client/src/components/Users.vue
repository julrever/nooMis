<template>
  <div>
  <h1>Users</h1>
  <div v-if="users.length > 0" class="table-wrap">
    <div>
      <router-link v-bind:to="{ name: 'Register' }" class="">Add User</router-link>
    </div>
    <table>
      <tr>
        <td>email</td>
        <td width="550">password</td>
        <td width="100" align="center">Action</td>
      </tr>
      <tr v-for="user in users">
        <td>{{ user.email }}</td>
        <td>{{ user.password }}</td>
        <td align="center">
          <router-link v-bind:to="{ name: 'EditUser', params: { id: user._id } }">Edit</router-link> |
          <a href="#">Delete</a>
        </td>
      </tr>
    </table>
  </div>
  <div v-else>
    There are no users.. Lets add one now <br /><br />
    <router-link v-bind:to="{ name: 'Register' }" class="add_post_link">Add User</router-link>
  </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'users',
  data () {
    return {
      users: []
    }
  },
  mounted () {
    this.getUsers()
  },
  methods: {
    async getUsers () {
      const response = await AuthenticationService.fetchUsers()
      this.users = response.data.users
    }
  }
}
</script>

<style scoped>
.table-wrap {
  width: 60%;
  margin: 0 auto;
  text-align: center;
}
table th, table tr {
  text-align: left;
}
table thead {
  background: #f2f2f2;
}
table tr td {
  padding: 10px;
}
table tr:nth-child(odd) {
  background: #f2f2f2;
}
table tr:nth-child(1) {
  background: #4d7ef7;
  color: #fff;
}
a {
  color: #4d7ef7;
  text-decoration: none;
}
a.add_post_link {
  background: #4d7ef7;
  color: #fff;
  padding: 10px 80px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
}
</style>
