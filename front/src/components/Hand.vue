<template>
  <div class="player-hand">
    <div v-for="(card, idx) of cards" :key="idx" class="card">
      <Card
        :attack="card.attack"
        :cost="card.cost"
        :hidden="isOpponent"
        :class="{ selected: idx === selectedCard }"
        @click="selectCard(idx)"
      />
      <button v-if="idx === selectedCard"
        class="playbutton"
        @click="playSelectedCard(idx)"
      >
        Jogar
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Card from '@/components/Card.vue';
import CardI from '@/application/Card';

export default defineComponent({
  props: {
    cards: {
      type: Object as PropType<CardI>,
      required: true,
    },
    isOpponent: {
      type: Boolean,
      required: true,
    },
  },
  components: { Card },
  data() {
    return {
      selectedCard: -1,
    };
  },
  methods: {
    selectCard(cardIdx: number) {
      if (this.isOpponent) return;

      this.selectedCard = cardIdx === this.selectedCard ? -1 : cardIdx;
    },
    playSelectedCard(cardIdx: number) {
      this.selectedCard = -1;
      this.$emit('play-card', cardIdx);
    },
  },
});
</script>

<style scoped>
.player-hand {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 100%;
}
.player-hand .tcg-card {
  position: relative;
  margin: 0.5rem;
}
.player-hand .selected.tcg-card {
  transform: translateY(-2rem);
}
.player-hand > .card {
  position: relative;
}
.card .playbutton {
  bottom: 0;
  position: absolute;
  margin-left: 0.5rem;
  width: calc(100% - 1rem);
  background-color: darkgoldenrod;
  color: white;
  border: none;
  padding: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
}
.card .playbutton:hover {
  box-shadow: 0 0.1rem 0.4rem gray;
}
</style>
