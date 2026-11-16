<script setup>
import { ref } from 'vue';
import SearchBar from './components/SearchBar.vue';
import ListRecepies from './components/ListRecepies.vue';



const recepies = ref([]);

const addRecepie = (r) =>{
    recepies.value.push(r)
}
</script>

<template>
    <nav class="navbar bg-1 fg-2 p-1">
        <div class="container-fluid">
            <p class="fw-bold mt-3"><span class="zold rounded-4  ">R</span> Receptkönyv</p>
            <p class="d-flex mt-3 fs-5">
                Receptek
                <button type="button" class="mx-5 btn btn-success br-5">+ Új recept</button>
            </p>
        </div>
    </nav>
    <header class="p-5">
        <h1 class="fw-bold">Mit főzzünk ma?</h1>
    </header>
    <main>
        <SearchBar />
        <ListRecepies />
    </main>

    <footer>
        <AddRecepies @add="addRecepie"/>
    </footer>
</template>
<style scoped>
.zold {
    background-color: #3f8c67;
    color: #fff;
    padding: 4px 10px;
}
</style>