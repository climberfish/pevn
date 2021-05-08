<template>
  <div class="player-status">
    <span class="health">{{ health }}</span>
    <span class="mana">{{ mana }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    health: Number,
    mana: Number,
  },
});
</script>

<style>
.player-status {
  display: flex;
}

.player-status > .health,
.player-status > .mana {
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.4rem;
  height: 4rem;
  width: 4rem;
}

.player-status > .health {
  background-color: crimson;
}

.player-status > .mana {
  background-color: royalblue;
}
</style>
