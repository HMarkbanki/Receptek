<script setup>
import { ref } from 'vue';
import AddRecepies from './components/AddRecepies.vue';
import { recipeData } from './data/recepieData.js';
import Recepie from './classes/Recepie.js';



const recepies = ref([]);


for (let i = 0; i < recipeData.length; i++) {
    var r = recipeData[i]
    recepies.value.push(new Recepie(r.name, r.desc, r.time, r.difficulty, r.picture))
}
const addRecepie = (r) => {
    recepies.value.push(r)
}
</script>

<template>
    <nav class="navbar bg-1 fg-2 p-1">
        <div class="container-fluid">
            <p class="fw-bold"><span class="zold rounded-4  ">R</span> Receptkönyv</p>
            <p class="d-flex mt-3 fs-5">
                Receptek
                <button type="button" class="mx-5 btn btn-success br-5">+ Új recept</button>
            </p>
        </div>
    </nav>
    <header>
        <h1 class="fw-bold">Mit főzzünk ma?</h1>
    </header>
    <main>
        <section>

        </section>
    </main>

    <footer>
        <AddRecepies @add="addRecepie" />
    </footer>

    
</template>
<style scoped>
.zold {
    background-color: #3f8c67;
    color: #fff;
    padding: 4px 10px;
}
</style>