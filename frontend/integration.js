import {mount} from 'svelte';
import GamePlayArea from './lib/GamePlayArea.svelte';
import PlayerPanel from './lib/PlayerPanel.svelte';

export function initGamePlayArea(target, props) {
    try {
        return mount(GamePlayArea, {target: target, props: props,});
    } catch (error) {
        console.error('Error initializing GamePlayArea:', error);
    }
}

export function initPlayerPanel(target, props) {
    try {
        return mount(PlayerPanel, {target: target, props: props,});
    } catch (error) {
        console.error('Error initializing PlayerPanel:', error);
    }
}
