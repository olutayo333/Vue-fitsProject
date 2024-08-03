<template>
    <div>
        OPTIONS API
        {{username}}

        <!-- FOR LOOP -->
        <div v-for="(each, index) in students" v-bind:key="each.id">
            <p>{{index+1}}.{{each.name}}, {{each.age}}</p>
        </div>
          <button @click="score++"> Increase Score </button>: {{score}}

          <button @click="myFunction">Toggle UserName</button>

                <!-- FORM -->
                <h3>Options API Form</h3>
           <form action="" @submit.prevent="signup">
                    <input type="text" class="form-control my-2" placeholder="Name" v-model="fullname" />
                    <input type="email" class="form-control my-2" placeholder="Email" v-model="email" />
                    <input type="number" class="form-control my-2" placeholder="Phone Number" v-model="phonenumber" />
                    <input type="password" class="form-control my-2" placeholder="Password" v-model="password" />
                    <p>I agree with <a href="">Terms and Conditions</a><span><input type="checkbox" v-model="terms"></span></p>
             
                    <button :disabled="!terms" type="submit" class="btn btn-dark mx-auto my-2"> Submit </button>
         </form>
        
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    setup(){
        const name= ref("combustion")
        return name
    },

    data(){
        return{
            fullname:"", email:"", phonenumber:"", terms:false,   
            username:"Stephen",
            password:"",

        students: [
                {id:1, name: "Stephen", age:15},
                {id:2, name: "Olutayo", age:55},
                {id:3, name: "Augustine", age:35},
                {id:4, name: "Emmanuel", age:25},
            ],
        score:50
        }
    },

    methods:{
        myFunction(){
            this.username= "Olapade"
        },

        signup(){
            let obj = {fullname:this.fullname, email:this.email, phonenumber:this.phonenumber, password:this.password }
            console.log(obj);
             localStorage.setItem('form1', JSON.stringify(obj));
        }
    }

   
}
</script>