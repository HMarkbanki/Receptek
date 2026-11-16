<script setup>
import { ref } from 'vue';



const recepies = ref([]);

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