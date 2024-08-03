<template>
    <h5></h5>
    <div class="container-fluid">
        <div class="row"> 
            <div class="col-lg-5 mx-auto px-1">
                <form action="">
                    <input type="text" class="form-control my-2" placeholder="Name" v-model="name" />
                    <input type="email" class="form-control my-2" placeholder="Email" v-model="email" />
                    <input type="number" class="form-control my-2" placeholder="Phone Number" v-model="phonenumber" />
                    <input type="password" class="form-control my-2" placeholder="Password" v-model="password" />
                    <p>I agree with <a href="">Terms and Conditions</a><span><input type="checkbox" v-model="terms"></span></p>
             
                    <button :disabled="!terms" @click="signup" type="submit" class="btn btn-dark mx-auto my-2"> Submit </button>
                </form>
            </div>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button>
        </div>

        
            <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>

    </div>

</template>

<script setup>
    import { router } from "@/router";
import { ref } from "vue";

    const name= ref("");
    const email = ref("");
    const phonenumber = ref("");
    const password = ref("");

    const terms = ref(false);

    const signup = ()=>{
        console.log("iz working");
        router.push('/hello');
    }
</script>