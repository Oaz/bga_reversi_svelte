<script lang="ts">
    import PlayerTables from './PlayerTables.svelte';
    import Board from './Board.svelte';
    import {onMount} from "svelte";

    export let gamedatas;
    export let bgaPerformAction;
    export let boardComponent : Board|undefined = undefined;
    export let tablesComponent : PlayerTables|undefined = undefined;

    let resolveMounted;
    const mounted = new Promise((resolve) => {
        resolveMounted = resolve;
    });
    onMount(() => {
        resolveMounted();
    });

    export async function enterState(stateName : string, args) {
        await mounted;
        switch (stateName) {
            case 'playerTurn':
                await boardComponent.updatePossibleMoves(args.args.possibleMoves);
                break;

            case 'dummy':
                break;
        }
    }

    export async function playDisc(disc) {
        await mounted;
        await boardComponent.addDiscOnBoard(disc.x, disc.y, disc.player_id);
    }

    export async function turnOverDiscs(args, animate) {
        await mounted;
        const targetColor = gamedatas.players[args.player_id].color;
        await Promise.all(
            args.turnedOver.map(disc => boardComponent.animateTurnOverDisc(disc, targetColor, animate))
        );
    }

    export async function newScores(args) {
        await mounted;
        await tablesComponent.newScores(args);
    }

</script>

<div id="game_play_area">
    <PlayerTables {gamedatas} bind:this={tablesComponent}/>
    <Board {gamedatas} {bgaPerformAction} bind:this={boardComponent}/>
</div>