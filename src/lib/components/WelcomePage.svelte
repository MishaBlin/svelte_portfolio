<svelte:head>
	<meta name="description" content="welcome page" />
	<meta name="keywords" content="Innopolis, Software" />
	<meta name="author" content="Mikhail Kalinin" />
</svelte:head>

<div class="main-page" id="home">
	<div class="wrapper-main">
		<div class="photo-block"><img src="img/photo_me.jpg" alt="personal_photo" id="photo" /></div>
		<div class="text-block">
			<h1>Welcome! I am <span>M</span>ikhail<span>.</span></h1>
			<p>
				I am a beginner <span>software developer</span> currently studying at
				<span>Innopolis University</span>. I am willing to study new things and get as much
				<span>experience</span>
				as possible. Through my studies, I have gained a solid foundation in programming languages and
				software engineering principles. I am excited to showcase my projects and demonstrate my ability
				to create innovative and user-friendly applications. Join me on this exciting journey as I explore
				the endless possibilities of <span>software development</span>.
			</p>
		</div>
	</div>
</div>

<style>
	.main-page {
		background-color: #1d1d1d;
		left: 0;
		padding: 10% 60px;
	}

	.main-page .wrapper-main {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		margin: 0 auto;
	}

	.text-block {
		color: #ffffff;
		font-family: Montserrat, sans-serif;
		font-size: 1.2rem;
		min-width: 50%;
	}

	.text-block span {
		color: #d82949;
	}

	.main-page .photo-block {
		min-width: 50%;
	}

	#photo {
		width: 70%;
		height: 30%;
		border-radius: 50%;
	}
</style>
