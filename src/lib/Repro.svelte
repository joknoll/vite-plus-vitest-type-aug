<script lang="ts">
  let { label = "hello" }: { label?: string } = $props();
</script>

<h1>{label}</h1>

<button type="button">click me</button>
