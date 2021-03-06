import Game from '../Game';
import Phase from './Phase';

export default class SwitchPlayerPhase implements Phase {
  run(game: Game): void {
    game.switchPlayer();
  }
}
