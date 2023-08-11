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
	import { page } from '$app/stores';

	$page.url.pathname;

	function scrollHandler(event: ComponentEvents<AppShell>['scroll']) {
		console.log(event.currentTarget.scrollTop);
	}
</script>

<AppShell on:scroll={scrollHandler}>
	<svelte:fragment slot="header"><LightSwitch /></svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		{#if $page.url.pathname === '/about'}
			<a href="/" class="btn variant-filled-tertiary">
				<span>Home</span>
			</a>
		{:else if $page.url.pathname === '/'}
			<a href="/about" class="btn variant-filled-tertiary">
				<span>About</span>
			</a>
		{:else}
			<a href="/" class="btn variant-filled-tertiary">
				<span>Home</span>
			</a>
			<br />
			<a href="/about" class="btn variant-filled-tertiary">
				<span>About</span>
			</a>
		{/if}
	</svelte:fragment>
	<svelte:fragment slot="sidebarRight">Sidebar Right</svelte:fragment>
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<svelte:fragment slot="footer">Footer</svelte:fragment>
</AppShell>
