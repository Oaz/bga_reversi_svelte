<script>
    import {onMount} from "svelte";

    export let gamedatas;

    let players = {};

    onMount(() => {
        console.log("player tables", gamedatas);
        players = Object.fromEntries(
            Object.entries(gamedatas.players).map(([player_id, player]) => [player_id, {
                id: player_id,
                score: player.score,
                name: player.name
            }]));
        console.log(players);
    });

    export async function newScores(args) {
        for (const player_id in args.scores) {
            players[player_id].score = args.scores[player_id];
        }
    }
</script>

<div id="player-tables">
    {#each Object.values(players) as player}
        <div id="player-table-{player.id}">
            <strong>{player.name}</strong>
            <div>Player score: {player.score}</div>
        </div>
    {/each}
</div>