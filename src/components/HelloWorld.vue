
<script setup>

import {useRoute} from 'vue-router';
import {onBeforeMount, onBeforeUnmount, onMounted, onUpdated, ref} from 'vue';

const route = useRoute();
// onBeforeMount //before the component loads.
const terms = ref(false)
const showTerms=ref(false)
const userLeave = ref(false)

onMounted(()=>{  
  // axios.post('http://localhost:7000/api/getProduct', {id:route.params.id}).then((result)=>{
  //   console.log(result);
  // })
})

onUpdated(()=>{
  if (terms) showTerms.value=true;
})

onBeforeUnmount(()=>{
  userLeave.value=true;
})


</script>

<template>
  <div>
    <p>This is the product page</p>
    {{route.params.id}}
    <!-- {{$route.params.id}}  options API, you dont need to import -->
    <input type="checkbox" v-model="terms"/>
    <label for=""> I agree to terms and condition</label>
    <div v-if="showTerms"> Lorep ipsum</div>
  </div>
  
  <div class="card mx-auto">

  </div>
</template>






<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
