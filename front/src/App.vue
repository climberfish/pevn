<template>
  <div class="game">
    <Hand :isOpponent="true" :cards="player2.hand" />
    <PlayerStatus :health="player2.health" :mana="player2.currentMana"/>
    <PlayerStatus :health="player1.health" :mana="player1.currentMana"/>
    <Hand :isOpponent="false" :cards="player1.hand" @play-card="playTheCard"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Hand from '@/components/Hand.vue';
import PlayerStatus from '@/components/PlayerStatus.vue';

import GameFactory from '@/application/GameFactory';
import Player from '@/application/Player';
import Game from '@/application/Game';
import CastCardAction from '@/application/Actions/CastCardAction';

interface AppData {
  player1: Player | null,
  player2: Player | null,
  game: Game | null,
}

export default defineComponent({
  name: 'App',
  components: { Hand, PlayerStatus },
  data(): AppData {
    return {
      player1: null,
      player2: null,
      game: null,
    };
  },
  created() {
    this.player1 = new Player();
    this.player2 = new Player();
    this.game = new GameFactory(this.player1 as Player, this.player2 as Player).game();
    this.game.start();
    this.game.nextPhase();
  },
  methods: {
    playTheCard(idx: number) {
      if (this.player1 === null) return;
      if (this.game === null) return;

      const card = this.player1.hand[idx];
      new CastCardAction(this.player1 as Player, card).run(this.game as Game);
    },
  },
});
</script>

<style>
html {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 16px;
}
.game {
  height:80vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.game .player-hand {
  min-height: 8.5rem;
}
</style>
