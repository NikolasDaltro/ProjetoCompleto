<template>
  <div class="user-admin">
    <b-table hover striped :items="users" :fields="fields"></b-table>
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
            users: [],
            fields:[
                { key: 'id', label: 'Código', sortable: true},
                { key: 'name', label: 'Nome', sortable: true},
                { key: 'email', label: 'E-mail', sortable:true},
                { key: 'admin', label: 'Adminstrador', sortable: true,
            formatter: value => value ? 'Sim' : 'Não'},
                { key: 'actions', label: 'Ações' }
            ]
        }
    },
    methods:{
        loadUsers(){
            const url = `${baseApiUrl}/users`
            axios.get(url).then(res =>{
                this.users = res.data
                console.log(this.users)
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