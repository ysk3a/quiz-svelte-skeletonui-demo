<script lang="ts">
	export const ssr = false;
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { LightSwitch, AppShell } from '@skeletonlabs/skeleton';
	import type { ComponentEvents } from 'svelte';

	function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
		console.log(event.currentTarget.scrollTop);
	}
</script>

<AppShell on:scroll={scrollHandler}>
	<svelte:fragment slot="header"><LightSwitch /></svelte:fragment>
	<svelte:fragment slot="sidebarLeft">Sidebar Left</svelte:fragment>
	<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
