<script>
    export let square;
    export let isPossibleMove;
    export let handlePlayDisc;

    function onClick() {
        handlePlayDisc(square);
    }
</script>

<style>
    .square {
        width: 62px;
        height: 62px;
        position: absolute;
    }

    .possibleMove {
        background-color: white;
        opacity: 0.2;
        cursor: pointer;
    }
</style>

<div
        id="square_{square.x}_{square.y}"
        class="square"
        class:possibleMove={isPossibleMove}
        style="left: {square.left}px; top: {square.top}px;"
        on:click={onClick}
        on:keydown={undefined}
        role="button"
        tabindex="0"
        title="{isPossibleMove ? 'Place a disc here' : ''}"
></div>

