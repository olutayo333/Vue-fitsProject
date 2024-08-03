<template>
    <div v-for="item in items" :key="item.id">
        <div class="card p-2 w-50 mx-auto">
            <p> {{item.name}}</p>

            <div v-if="item.quantity "> 
                {{item.quantity}}
                <p  :class="item.available ? 'text-success' : 'text-danger' " >{{item.available? 'Available' : 'out of stock'}}</p>
                <button class="btn btn-secondary" @click="orderNow(item.id)">Order Now </button>
            </div>

            <div v-if="item.quantity<=0">
                0
                <p class="text-danger">Out of Stock</p>
                <button class="btn btn-secondary" disabled @click="orderNow(item.id)">Order Now </button>
            </div>


            <!-- <p  :class="item.available ? 'text-success' : 'text-danger' " >{{item.available? 'Available' : 'out of stock'}}</p> -->
            
            
        </div>
    </div>
</template>
<script>
import { ref, computed } from "vue";

export default {
data(){
        return{
           
        items: [
                {id:1, name: "T-shirt", quantity:15, available:true},
                {id:2, name: "Round neck", quantity:55, available:true},
                {id:3, name: "Smart Watch", quantity:35, available:true },
                {id:4, name: "Hair Brush", quantity:0, available:false},
            ],
        
        }
    },

    methods:{
        // const availableItems = computed(()=>{

        // })
        orderNow(itemId) {
          let clickedItem = this.items.find((item)=>item.id == itemId );
        
          clickedItem.quantity = clickedItem.quantity -1;
          console.log(clickedItem);
        }
    },
}
</script>