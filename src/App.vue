<script setup>
import { ref } from 'vue';
import ListRecepies from './components/ListRecepies.vue';
import SearchBar from './components/SearchBar.vue';


const recepies = ref([]);

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
    <main class="p-5">
        <SearchBar />
        <ListRecepies />
    </main>
    <footer>

    </footer>
</template>
<style scoped>
.zold{
    background-color: #3f8c67;
    color: #fff;
    padding: 4px 10px;
}
</style>