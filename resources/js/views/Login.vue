<template>
    <div>
        <h3 class="text-center">Login Form</h3>
        <div class="row">
            <div class="col-md-6 m-auto">
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label>Username</label>
                        <input type="text" class="form-control" v-model="user.username">
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="text" class="form-control" v-model="user.password">
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                user: {}
            }
        },
        methods: {
            login() {

                this.axios
                    .post('http://localhost:8000/api/login/', this.user)
                    .then(response => (
                        this.$router.push({name: 'home'})
                        // console.log(response.data)
                    ))
                    .catch(error => console.log(error))
                    .finally(() => this.loading = false)
            }
        }
    }
</script>
