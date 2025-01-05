<script lang="ts">
    import {onMount} from "svelte";

    export let id;
    export const gamedatas = undefined;

    let message;

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
                if(args.active_player == id)
                    message = "It's my turn!";
                else
                    message = "I'm waiting...";
                break;

            case 'dummy':
                break;
        }
    }

</script>

<div id="player-message-{id}">
    {message}
</div>