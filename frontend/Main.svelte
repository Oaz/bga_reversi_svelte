<script lang="ts">
  import GamePlayArea from './lib/GamePlayArea.svelte';
  import {onMount} from "svelte";

  // Mock gamedatas for local testing
  const gamedatas = {
    players: [
      { id: 0, name: 'Player 1', color: 'ffffff', score:42 },
      { id: 1, name: 'Player 2', color: '000000', score:24 },
    ],
    board: [
      { x: 4, y: 4, player: 0 },
      { x: 5, y: 5, player: 0 },
      { x: 4, y: 5, player: 1 },
      { x: 5, y: 4, player: 1 }
    ]
  };

  const possibleMoves = {
    3: { 4: true, 5: true },
    4: { 3: true, 6: true },
    5: { 3: true, 6: true },
    6: { 4: true, 5: true }
  };

  function bgaPerformAction(action, args) {
    console.log(`Action: ${action}`, args);
    // Simulate adding a disc to the board
    if (action === 'actPlayDisc') {
      const { x, y } = args;
      const player = 1; // Simulate player 1's turn
      boardComponent.addDiscOnBoard(x, y, player);
    }
  }


  let boardComponent;

  onMount(() => {
    boardComponent.updatePossibleMoves(possibleMoves);
  });
</script>

<main>
  <h1>Reversi Game</h1>
  <div id="content">
    <GamePlayArea {gamedatas} {bgaPerformAction} bind:boardComponent />
  </div>
</main>

<style>
  main {
    font-family: Arial, sans-serif;
    text-align: center;
    padding: 20px;
  }

  h1 {
    margin-bottom: 20px;
  }

  #content {
    display: flex;
    justify-content: center;
  }

</style>