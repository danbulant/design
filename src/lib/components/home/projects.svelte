<script>
    import Project from "./project.svelte";

	/** @type {null | "websites" | "applications" | "bots"} */
    export var appTypeHover;
</script>

<div class="projects" id="projects">
    <div>
        <h2>
            I helped many projects come to life. Here are some examples:
        </h2>
        <Project
            link="/projects/heaventaker"
            image="/screenshots/heaventaker/heaventaker.webp"
            grayscale={appTypeHover && appTypeHover === "bots"}
            width={2050}
            height={1080}
            name="Heaventaker"
            clickable
            target="_self"
        >
            <b>Heaventaker</b> - Helltaker fan game
            <svelte:fragment slot="desc">
                <p>
                    <img src="/azrael.gif" alt="" style="height: 24px; width: 24px; display: inline"> Heaventaker is a helltaker fan-game visual novel and puzzle game.
                </p>
                <p>
                    Heaventaker currently has 3 different puzzles and 4 angels to collect. Playable online on the website, or on Android devices (application installable from Google Play Store)
                </p>
            </svelte:fragment>
        </Project>
        <Project
            image="/screenshots/animasher.webp"
            grayscale={appTypeHover && appTypeHover !== "websites"}
            extradark
            width={1920}
            height={940}
            link="https://animasher.net"
            name="Animasher"
        >
            <b>Animasher</b> - Platform for creating and sharing animations
            <svelte:fragment slot="desc">
                <p>
                    Animasher is a work in progress platform for creating and sharing animations online.
                </p>
                <p>
                    It allows people to easily create animations inside the website, and then share it with the world, as well as communicate with other creators to improve themselves.
                </p>
            </svelte:fragment>
        </Project>
    </div>
    <div>
        <div class="pad"></div>
        <Project
            link="https://manga.danbulant.eu"
            image="/screenshots/mangadex.webp"
            grayscale={appTypeHover && appTypeHover !== "websites"}
            width={803}
            height={382}
            name="Mangades reader"
        >
            <b>Mangades</b> - Mangadex viewer
            <svelte:fragment slot="desc">
                <p>
                    A Mangadex client, with EPUB/CBZ download options, and a sleek UI.
                </p>
            </svelte:fragment>
        </Project>
        <Project
            link="https://tictactoe.danbulant.eu"
            image="/screenshots/tictactoe.png"
            grayscale={appTypeHover && appTypeHover !== "websites"}
            width={1105}
            height={720}
            name="TicTacToe"
        >
            <b>Ultimate tictactoe</b> - Online Tic-Tac-Toe, with a twist
            <svelte:fragment slot="desc">
                <p>
                    Online Tic-Tac-Toe game that can be played with a friend locally or online.
                    Play across 3x3 boards, each with a "classic" 3x3 grid inside.
                    When you play your move, the next player has to play in the board that corresponds to the cell you played in.
                    The corresponding grid is highlighted when you hover over a cell.
                    Please note that the rules are slightly different that what's normally known as utlimate tictactoe.
                </p>
            </svelte:fragment>
        </Project>
    </div>
</div>

<style>
	.projects {
		max-width: 1380px;
	}
	.projects {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		margin: 0 20px 0px 20px;
	}
    @media (min-width: 1520px) {
		.projects {
			margin: 0 auto 0px auto;
		}
	}
	.projects > div {
		width: calc(50% - 40px);
	}
	.projects .pad {
		margin-top: 110px;
	}
	@media (max-width: 860px) {
		.projects > div {
			width: calc(100% - 80px);
			margin: auto;
		}
		.projects .pad {
			margin-top: 0px;
		}
		.projects h2 {
			margin: 1em 0 1em 10px;
		}
	}
	.projects h2 {
		font-size: 29px;
		font-weight: 400;
		margin-block-start: 1em;
		margin-block-end: 1em;
		margin-inline-start: 40px;
		margin-inline-end: 40px;
	}
</style>