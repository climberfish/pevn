<template>
  <div class="tcg-card">
    <template v-if="!hidden">
      <span class="cost">{{cost}}</span>
      <span class="attack">{{attack}}</span>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    attack: Number,
    cost: Number,
    hidden: { default: false, type: Boolean },
  },
});
</script>

<style scoped>
.tcg-card {
  width: 6rem;
  height: 8rem;
  border: 0.4rem solid darkslategrey;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: bold;
  background-color: lightskyblue;
}
.cost {
  margin: -0.9rem -0.9rem 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background-color: royalblue;
  color: white;
  border: 0.375rem solid darkslategrey;
  border-radius: 50%;
  align-self: flex-end;
}

.attack {
  margin: 0 -0.9rem -0.9rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background-color: crimson;
  color: white;
  border: 0.375rem solid darkslategrey;
  border-radius: 50%;
  align-self: flex-end;
}
.tcg-card:hover {
  box-shadow: 0.1rem 0.3rem 0.4rem gray;
}
</style>
