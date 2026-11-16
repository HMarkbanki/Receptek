<script setup>
import { ref } from 'vue';
import Recepie from '../classes/Recepie.js'


const emit = defineEmits(['add'])


const name = ref("");
const desc = ref("");
const time = ref("");
const difficulty = ref("");


const add = () =>{
    var r = new Recepie(name.value, desc.value, time.value, difficulty.value)
    emit('add', r)
}

</script>
<template>
    <section>
        <div class="mb-3">
            <label  class="form-label">Nev</label>
            <input v-model="name" type="email" class="form-control">
        </div>

        <div class="mb-3">
            <label class="form-label">Leiras</label>
            <input  v-model="desc" type="email" class="form-control">
        </div>

        <div class="mb-3">
            <label class="form-label">Elkeszitesi ido</label>
            <input v-model="time" type="email" class="form-control">
        </div>

        <div class="mb-3">
            <label  class="form-label">nehezseg</label>
            <input v-model="difficulty" type="email" class="form-control">
        </div>
        <div class="mb-3">
            <button type="button" class="btn btn-success" @click="add">add</button>
        </div>

    </section>
</template>
<style scoped></style>