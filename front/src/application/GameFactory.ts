import Game from '@/application/Game';
import GameBuilder from '@/application/GameBuilder';
import DrawCardsPhase from '@/application/Phases/DrawCardsPhase';
import RefillAndIncrementManaPhase from '@/application/Phases/RefillAndIncrementManaPhase';
import SetInitStatsPhase from '@/application/Phases/SetInitStatsPhase';
import ShufflePhase from '@/application/Phases/ShufflePhase';
import SwitchPlayerPhase from '@/application/Phases/SwitchPlayerPhase';
import Player from '@/application/Player';

export default class GameFactory {
  constructor(private player1: Player, private player2: Player) {}

  game(): Game {
    return new GameBuilder()
      .withPlayers(this.player1, this.player2)
      .withInitPhase([
        SetInitStatsPhase.with({ health: 30, mana: 0 }),
        ShufflePhase.noShuffle(),
        DrawCardsPhase.withCards(3),
      ])
      .withLoop([
        new RefillAndIncrementManaPhase(),
        new SwitchPlayerPhase(),
        DrawCardsPhase.withCards(1),
      ])
      .build();
  }
}
