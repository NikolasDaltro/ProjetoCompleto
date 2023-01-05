<template>
  <div class="user-admin">
    <h1>Usuários Componente</h1>
  </div>
</template>

<script>
import { baseApiUrl } from '../../global'
import axios from 'axios'


export default {
    name: 'UserAdmin',
    data: function(){
        return{
            mode: 'save',
            user: {},
            users: []
        }
    },
    methods:{
        loadUsers(){
            const url = `${baseApiUrl}/users`
            axios.get(url).then(res =>{
                this.user = res.data
                console.log(this.user)
            })
        }
    },
    mounted(){
        this.loadUsers()
    }
}
</script>

<style>

</style>