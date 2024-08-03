
<template>
<!-- COMPOSITION API     -->
    <div>
        COMPOSITION API
        <h1></h1>
        {{name}}

        <!-- FOR LOOP -->
        <div v-for="(each, index) in students" v-bind:key="each.id">
            <p>{{index+1}}.{{each.name}}, {{each.age}}</p>
        </div> <br><hr>

        <!-- CONDITIONAL STATEMENTS -->
        <p v-if="weekdays" > We are in weekdays </p>
        <p v-else-if="!weekdays"> We are weekends </p>
        <p v-else>Rest days </p> <br> <hr>

        <!-- vSHOW -->
        <p v-show="sunday"> Today is sunday </p> <br> <hr>

        <!-- FUNCTIONS AND EVENTS -->
        <button v-on:click="age++"> Increase Age </button>
        <b>Age:</b> {{age}}
        <button @click="myFunction"> Toggle Name </button> <hr>

        <!-- 2 WAY BINDING -->
        <input type="text" placeholder="user input1" class="form-control" v-model="userInput">
         {{userInput}}
            <!-- checkbox -->
        <label for=""> Do you agree with the terms and condition</label>
        <input type="checkbox" class="" v-model="skill" >
        
        <p v-if="skill">  {{skill}}</p> 
        <button class="btn btn-small btn-dark" :disabled="!skill"> Sign Up</button> <hr>
        
        <!-- radio button -->
        <label for=""> Vue:</label>
        <input type="radio" class="" v-model="skill2" value="vue">
        
        <label for=""> React:</label>
        <input type="radio" class="" v-model="skill2" value="React">
        
        <label for=""> Angular:</label>
        <input type="radio" class="" v-model="skill2" value="Angular">
        
        <label for=""> Laravel:</label>
        <input type="radio" class="" v-model="skill2" value="Laravel">
        
        {{skill2}} <br>

        <!-- select tags -->
        <select name="" id="" v-model="education"  class="btn ">
            <option >--</option>
            <option value="O'Level"> O'Level</option>
            <option value="B.sc"> B.sc</option>
            <option value="B.Tech">B.Tech</option>

        </select>
        {{education}}

        <hr><br>
    </div>
</template>

<script setup>
import { ref } from "vue";

    const userInput = ref(''); const skill = ref(''); const skill2=ref(''); const education=ref('');
    const name = ref('stephen');
    let num  = 6;
    var school="";
    
    const students = [
        {id:1, name: "Stephen", age:15},
        {id:2, name: "Olutayo", age:55},
        {id:3, name: "Augustine", age:35},
        {id:4, name: "Emmanuel", age:25},
    ]

    const weekdays = true; const weekends = false; const sunday= true;
    var age=ref(1);

     const myFunction = () =>{
        name.value = "Oduleke";
    }
</script>
