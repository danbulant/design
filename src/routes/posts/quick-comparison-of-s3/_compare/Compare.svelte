<script>
	import * as Pancake from '@sveltejs/pancake'; 
	import { spring } from 'svelte/motion';
	import { onMount } from 'svelte';
    import Date from '$lib/components/Date.svelte';

    let averageSize = 50;
    $: if(averageSize < 1) averageSize = 1;
    let fileCount = 0;
    $: fileCount = (egress * 1e9) / (averageSize*1e6);

    const data = [
        {
            name: "Cloudflare R2",
            price: ({ storage, egress, fileCount, dataRetention }) => 10 * storage + Math.max(0, fileCount-10e6)*0.36/1e6,
            color: "orange",
            link: "cloudflare-r2"
        }, {
            name: "Wasabi",
            price: ({ storage, egress, fileCount, dataRetention }) => 5 * storage * (90/dataRetention),
            color: "green",
            link: "wasabi"
        }, {
            name: "Backblaze B2",
            price: ({ storage, egress, fileCount, dataRetention }) => 4 * storage + 10 * egress + Math.max(0, fileCount - 2500)*4/10e6,
            color: "red",
            link: "backblaze-b2"
        }, {
            name: "DO Spaces",
            price: ({ storage, egress, fileCount, dataRetention }) => 20 * storage + 10 * egress,
            color: "blue",
            link: "digitalocean-spaces"
        }, {
            name: "Storj.io",
            price: ({ storage, egress, fileCount, dataRetention }) => 4 * storage + 7 * egress,
            color: "rgb(0,120,180)",
            link: "storjio"
        }
    ];

	let el;
	let w = 320;
	function format(num) {
        if(!num) return "";
        if(num > 1e6) {
            return num/1e6 + "M";
        }
        if(num > 1e3) {
            return num/1e3 + "K";
        }
        return num;
	}
	const m = spring();
	$: size = w < 480 ? 'small' : w < 640 ? 'medium' : 'large';
    $: $m = data.map((d, i) => ({ x: i, y: d.price({ storage, egress, fileCount, dataRetention }) }));
	let max = spring();
    $: $max = Math.max(50, ...data.map(d => d.price({ storage, egress, fileCount, dataRetention }) + d.price({ storage, egress, fileCount, dataRetention }) * 0.2));
	onMount(() => {
        w = el.clientWidth;
    });

    let storage = 1;
    $: if(storage < 1) storage = 1;
    let egress = 1;
    $: if(egress < 1) egress = 1;
    let dataRetention = 90;
    $: if(dataRetention < 1) dataRetention = 1;
</script>

<label for="storage">Storage used</label>
<div class="flex">
    <input type="range" min="1" max="1000" step="1" bind:value={storage}>
    <div class="input-tb">
        <input name="storage" id="storage" type="number" min="1" max="1000" step="1" bind:value={storage}>
    </div>
</div>

<label for="egress">Expected downloads/egress</label>
<div class="flex">
    <input type="range" min="1" max="1000" step="1" bind:value={egress}>
    <div class="input-tb">
        <input name="egress" id="egress" type="number" min="1" max="1000" step="1" bind:value={egress}>
    </div>
</div>

<div class="chart {size}" bind:this={el} bind:clientWidth={w}>
    <div class="background">
		<Pancake.Chart x1={0 - 0.5} x2={4 + 0.5} y1={0} y2={$max}>
            <Pancake.Columns data={$m} width={1} let:value>
                <div class="column" style="background-color: {data[value.x].color};">${Math.round(value.y)}</div>
            </Pancake.Columns>
        </Pancake.Chart>
    </div>
	<div class="foreground">
		<Pancake.Chart x1={0 - 0.5} x2={4 + 0.5} y1={0} y2={$max}>
			<Pancake.Grid horizontal count={5} let:value>
				<div class="grid-line horizontal"></div>
				<span class="y label">{format(value)}</span>
			</Pancake.Grid>

			<Pancake.Grid vertical count={5} let:value>
				<span class="x label">
                    <a href="#{data[value].link}">{data[value].name}</a>
				</span>
			</Pancake.Grid>
		</Pancake.Chart>
	</div>
</div>

<p class="credit">
	Source: Respective pricing pages (see links above), on <Date value="2022-05-16T16:00" /> <small>(hover for quick relative time)</small> <br />
    Prices are estimates, expecting that traffic is uniform during the month, and that the average size of a file is {averageSize}MB ({Math.ceil(fileCount)} files downloaded). Doesn't account for listings or deletions. Uploads are not using multipart.
</p>

<details>
    <summary> Additional options and details </summary>
    
    <label for="file-size">Average file size</label>
    <small>It does account file count into the pricing maths, defaults to 1 file downloaded = GetObject op. I think that the ops pricing is just anti-spam measure.</small>
    <div class="flex">
        <input type="range" min="1" max="1000" step="1" bind:value={averageSize}>
        <div class="input-text input-mb">
            <input name="file-size" id="file-size" type="number" min="1" max="1000" step="1" bind:value={averageSize}>
        </div>
    </div>

    <label for="days">Average data retention</label>
    <small>Only affects Wasabi pricing.</small>
    <div class="flex">
        <input type="range" min="1" max="90" step="1" bind:value={dataRetention}>
        <div class="input-text input-days">
            <input name="days" id="days" type="number" min="1" max="90" step="1" bind:value={dataRetention}>
        </div>
    </div>

    <table>
        <thead>
            <th>Service</th>
            <th>Calculation method</th>
            <th>Result</th>
        </thead>
        <tbody>
            {#each data as service}
                <tr>
                    <td><a href="#{service.link}">{service.name}</a></td>
                    <td><code>{service.price.toString().substring(service.price.toString().indexOf("=>") + 3)}</code></td>
                    <td>${Math.floor(service.price({ egress, fileCount, storage, dataRetention }))}/TB/month</td>
                </tr>
            {/each}
        </tbody>
    </table>
</details>

<style>
    .flex {
        display: flex;
        gap: 15px;
    }
    .flex input[type="range"] {
        flex-grow: 1;
    }
    .flex input[type="number"] {
        flex-shrink: 0;
        height: 1.7em;
    }
    .input-text {
        display: inline-block;
        position: relative;
    }
    .input-text::after {
        position: absolute;
        top: 2px;
        right: .5em;
        transition: all .05s ease-in-out;
        pointer-events: none;
    }
    .input-tb::after {
        content: "TB";
    }
    .input-gb::after {
        content: "GB";
    }
    .input-mb::after {
        content: "MB";
    }
    .input-days::after {
        content: "days";
    }
    input#days {
        width: 5.5em;
    }
    .input-text:hover::after, .input-text:focus-within::after {
        right: 1.5em;
    }
    :global(.dark .flex div.input-text::after) {
        color: black;
    }
	.chart {
		position: relative;
		width: 100%;
		height: 300px;
		margin: 0 0 36px 0;
	}
	.background, .foreground {
		position: absolute;
		width: 100%;
		height: 100%;
		padding: 3em 3em 2em 0;
		box-sizing: border-box;
	}
	.slider-container {
		display: flex;
		position: absolute;
		left: 0;
		top: 0;
		user-select: none;
		-moz-user-select: none;
		color: #333;
	}
    :global(.dark .post-layout .chart .slider-container) {
        color: rgb(191, 191, 191);
    }
	.slider-container span {
		display: block;
		font-size: 2em;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
		font-variant-numeric: tabular-nums;
		text-shadow: 0 0 12px white, 0 0 12px white, 0 0 12px white, 0 0 12px white, 0 0 12px white, 0 0 12px white;
		cursor: ew-resize;
        transition: 0.3s text-shadow;
	}
    :global(.dark .post-layout .slider-container span) {
        text-shadow: 0 0 12px #1f1f1f, 0 0 12px #1f1f1f, 0 0 12px #1f1f1f, 0 0 12px #1f1f1f, 0 0 12px #1f1f1f, 0 0 12px #1f1f1f;
    }
	.grid-line {
		position: relative;
		display: block;
	}
	.grid-line.horizontal {
		width: 100%;
		left: 0;
		border-bottom: 1px solid rgba(0,0,0,0.05);
	}
	.label {
		position: absolute;
		font-size: 14px;
		color: #666;
		line-height: 1;
		white-space: nowrap;
	}
    :global(.dark .post-layout .chart .label) {
        color: rgb(191, 191, 191);
    }
	.y.label {
		left: calc(100% + 1em);
		bottom: -0.5em;
		line-height: 1;
	}
	.x.label {
		width: 8em;
		left: -4em;
		bottom: 5px;
		text-align: center;
	}
	.background .x.label {
		color: white;
		font-size: 10px;
	}
	.foreground .x.label {
		bottom: -22px;
	}
	.column {
		position: absolute;
		/* left: 1px;
		width: calc(100% - 2px); */
		left: 0;
		width: 100%;
		border-left: 1px solid rgba(255,255,255,0.4);
		border-right: 1px solid rgba(255,255,255,0.4);
		box-sizing: border-box;
		height: 100%;
		opacity: 0.6;
		border-radius: 2px 2px 0 0;
        color: white;
        text-align: center;
	}
	
	.credit {
		font-size: 14px;
	}
	.medium .slider-container span {
		font-size: 3.5em;
	}
	.large .slider-container span {
		font-size: 5em;
	}
</style>