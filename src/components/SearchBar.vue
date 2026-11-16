<script setup>
import { computed, ref, watchEffect, watch } from 'vue';

const emit = defineEmits(['diff', 'sendfilter'])
const nehezseg = ref(0)

watch(nehezseg, ()=>{
  emit('diff', nehezseg.value)
})
const filter = ref("")
const sendfilter = (filter) =>{
  emit('sendfilter', filter)
}
</script>
<template>

<section>

  <div class="container py-4">
    <div class="bg-white rounded-4 shadow-sm p-3">
      <div class="row g-3">
        <div class="col-12 col-lg">
          <input v-model="filter" @keyup="sendfilter" type="search" class="form-control form-control-lg rounded-4 fs-6 py-3" placeholder="Keress receptet..." aria-label="Keress receptet">
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <select v-model="nehezseg" class="form-select form-select-lg rounded-4 fs-6 py-3" aria-label="Nehézség">
            <option selected value="0">Minden nehézség</option>
            <option value="konnyu">Könnyű</option>
            <option value="kozepes">Közepes</option>
            <option value="nehez">Nehéz</option>
          </select>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <select class="form-select form-select-lg rounded-4 fs-6 py-3" aria-label="Rendezés">
            <option selected>Elkészítési idő szerint</option>
            <option>Leggyorsabb elöl</option>
            <option>Leghosszabb elöl</option>
          </select>
        </div>
      </div>
    </div>
  </div>

</section>

</template>
<style scoped>
.container, section{
    background-color: #ebf4ee;
}
</style>