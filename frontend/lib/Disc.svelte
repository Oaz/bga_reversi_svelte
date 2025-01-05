<script>
    import { fly } from 'svelte/transition';

    export let disc; // The disc data (x, y, color)
    export let hor_scale;
    export let ver_scale;

    let discDiv;
    export async function animateDisc(targetColor, animate) {
        if (!animate) {
            // Skip animations if animations are disabled
            disc.color = targetColor;
            return;
        }
        discDiv.style.transition = 'opacity 0.5s';
        discDiv.style.opacity = 0;
        await new Promise(resolve => setTimeout(resolve, 500));
        discDiv.style.opacity = 1;
        await new Promise(resolve => setTimeout(resolve, 500));
        discDiv.style.opacity = 0;
        disc.color = targetColor;
        await new Promise(resolve => setTimeout(resolve, 500));
        discDiv.style.opacity = 1;
    }
</script>

<style>
    .disc {
        width: 56px;
        height: 56px;
        position: absolute;
        background-image: url('../img/tokens.png');
        background-size: auto 100%;
    }
    .disc[data-color='ffffff'] {
        background-position-x: 0%;
    }
    .disc[data-color='000000'] {
        background-position-x: 100%;
    }
</style>

<div
        id="disc_{disc.x}{disc.y}"
        class="disc"
        data-color={disc.color}
        style="left: {disc.x * hor_scale - 52}px; top: {disc.y * ver_scale - 55}px;"
        in:fly={{ x: 0, y: 0, duration: 500 }}
        bind:this={discDiv}
></div>