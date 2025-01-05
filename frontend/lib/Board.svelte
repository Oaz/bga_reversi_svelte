<script lang="ts">
    import { onMount } from 'svelte';
    import Square from "./Square.svelte";
    import Disc from "./Disc.svelte";

    export let gamedatas;
    export let bgaPerformAction;

    const squares = [];
    const hor_scale = 64.8;
    const ver_scale = 64.4;
    for (let x = 1; x <= 8; x++) {
        for (let y = 1; y <= 8; y++) {
            squares.push({
                x,
                y,
                left: Math.round((x - 1) * hor_scale + 10),
                top: Math.round((y - 1) * ver_scale + 7)
            });
        }
    }
    function handlePlayDisc(square) {
        if (!possibleMoves[square.x]?.[square.y]) {
            // This is not a possible move => the click does nothing
            console.log(`move ${square} is not possible`);
            return;
        }

        // Notify the backend
        bgaPerformAction('actPlayDisc', {
            x: square.x,
            y: square.y
        });
    }

    let discs = [];
    export async function addDiscOnBoard(x, y, player) {
        const color = gamedatas.players[player].color;
        discs = [...discs, { x, y, color }];
    }

    let possibleMoves = {};
    export async function updatePossibleMoves(newPossibleMoves) {
        possibleMoves = { ...newPossibleMoves };
    }

    let discComponents = {};
    export async function animateTurnOverDisc(disc, targetColor, animate) {
        const discKey = `${disc.x}-${disc.y}`;
        const discComponent : Disc = discComponents[discKey];
        if (discComponent) {
            await discComponent.animateDisc(targetColor, animate);
        } else {
            console.error(`Disc component not found for key: ${discKey}`);
        }
    }

    onMount(() => {
        if (gamedatas && gamedatas.board) {
            for (const square of gamedatas.board) {
                if (square.player !== null) {
                    addDiscOnBoard(square.x, square.y, square.player);
                }
            }
        }
    });

</script>

<style>
    #board {
        width: 536px;
        height: 528px;
        background-image: url('../img/board.jpg');
        position: relative;
    }
</style>


<div id="board">
    {#each squares as square}
        <Square
                {square}
                isPossibleMove={possibleMoves[square.x]?.[square.y]}
                handlePlayDisc={handlePlayDisc}
        />
    {/each}
    {#each discs as disc}
        <Disc
                {disc}
                {hor_scale}
                {ver_scale}
                bind:this={discComponents[`${disc.x}-${disc.y}`]}
        />
    {/each}
</div>