<script setup>
import { computed, ref } from 'vue';
import AddRecepies from './components/AddRecepies.vue';
import { recipeData } from './data/recepieData.js';
import Recepie from './classes/Recepie.js';
import SearchBar from './components/SearchBar.vue';
import ListRecepies from './components/ListRecepies.vue';



const recepies = ref([]);
const currentDiff = ref(0);
const filter = ref("")

for (let i = 0; i < recipeData.length; i++) {
    var r = recipeData[i]
    recepies.value.push(new Recepie(r.name, r.desc, r.time, r.difficulty, r.picture))
}
const addRecepie = (r) => {
    recepies.value.push(r)
}

const setDiff = (d) => {
    currentDiff.value = d;
}

const filtered = computed(() => {
    if (currentDiff.value == "konnyu") {
        return recepies.value.filter(r => r.getDifficulty() == "Könnyű")
    } else if (currentDiff.value == "kozepes") {
        return recepies.value.filter(r => r.getDifficulty() == "Közepes")
    } else if (currentDiff.value == "nehez") {
        return recepies.value.filter(r => r.getDifficulty() == "Nehéz")
    }

    return recepies.value
})


const name = ref("");
const desc = ref("");
const time = ref("");
const difficulty = ref("");


const add = () => {
    recepies.value.push(new Recepie(name.value, desc.value, time.value, difficulty.value))
}

const setfilter = (f)=>{
    filter.value = f;
}


</script>

<template>
    <nav class="navbar bg-1 fg-2 p-1">
        <div class="container-fluid">
            <p class="fw-bold mt-3"><span class="zold rounded-4  ">R</span> Receptkönyv</p>
            <p class="d-flex mt-3 fs-5">
                Receptek
                <button type="button" class="mx-5 btn btn-success br-5" data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop">+ Új recept</button>
            </p>
        </div>
    </nav>
    <header class="p-5">
        <h1 class="fw-bold">Mit főzzünk ma?</h1>
    </header>
    <main>
        <SearchBar @diff="setDiff" @sendfilter="setfilter"/>
        <ListRecepies :recepies="filtered" />
    </main>



    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <section>
                        <div class="mb-3">
                            <label class="form-label">Nev</label>
                            <input v-model="name" type="email" class="form-control">
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Leiras</label>
                            <input v-model="desc" type="email" class="form-control">
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Elkeszitesi ido</label>
                            <input v-model="time" type="email" class="form-control">
                        </div>

                        <div class="mb-3">
                            <label class="form-label">nehezseg</label>
                            <input v-model="difficulty" type="email" class="form-control">
                        </div>
                    </section>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success" @click="add" data-bs-dismiss="modal">Add</button>
                </div>
            </div>
        </div>
    </div>



</template>
<style scoped>
.zold {
    background-color: #3f8c67;
    color: #fff;
    padding: 4px 10px;
}
</style>