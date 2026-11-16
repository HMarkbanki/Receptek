<script setup>

</script>
<template>
    <div class="container">
        <div class="d-flex row justify-content-center">

            <div v-for="i in 100" class="card mx-3 my-2 p-0" style="width: 30%;">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPWn5i6TtMR_qJB5fW4LR_BiuBiYVvLPES68vGrsYwN3wINbkuTtidEn51nZxju4wU9UYDITzn1cQoDYdXC_prSkUzJ8CzP8xny6jGRw&s=10" class="card-img-top" alt="kep">
                <div class="card-body">
                    <div>
                    <p v-if="nehezseg == konnyu" class="nehezseg konnyu rounded-4">Könnyű</p>
                    <p v-else-if="nehezseg == kozepes" class="nehezseg kozepes rounded-4">Közepes</p>
                    <p v-else-if="nehezseg == nehez" class="nehezseg Nehéz rounded-4">Nehéz</p>
                    </div>
                    <h5 class="card-title fs-3">Gulyasleves</h5>
                    <p class="card-text fs-6">asd</p>
                    <a href="#" class="btn btn-success w-100">Recept megtekintése </a>
                </div>
            </div>
        </div>
    </div>

</template>
<style scoped>
.card-text{
    color: #5a5a5a;
}

.nehezseg{
    font-size: 15px;
}

.konnyu{
    background-color: #3f8c67;
    color: #fff;
    display: inline;
    padding: 5px 10px;
}
.kozepes{
    background-color: #ffc107;
    color: #000;
    display: inline;
    padding: 5px 10px;
}
.nehez{
    background-color: #dc3545;
    color: #fff;
    display: inline;
    padding: 5px 10px;
}
</style>