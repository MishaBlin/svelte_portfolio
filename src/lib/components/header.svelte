<header>
	<div class="navbar-container">
		<div class="header-wrap">
			<div class="logo">
				<a href="/#home" class="logo-text"><span>M</span>ikhail <span>K</span>alinin</a>
			</div>
			<div class="menu">
				<ul>
					<li><div class="box"><a href="/#home">About me</a></div></li>
					<li><div class="box"><a href="/#">Projects</a></div></li>
					<li><div class="box"><a href="/#">Contacts</a></div></li>
				</ul>
				<div class="hamburger">
					<span class="bar" />
					<span class="bar" />
					<span class="bar" />
				</div>
			</div>
		</div>
	</div>
</header>

<style>
	.navbar-container {
		max-width: 1140px;
		margin: 0 auto;
		padding: 0 15px;
	}

	header {
		position: fixed;
		padding: 20px 10px;
		left: 0;
		right: 0;
		top: 0;
		margin: 0;
		background-color: #1d1d1d;
	}

	header .header-wrap {
		justify-content: space-between;
		align-items: center;
		display: flex;
		flex-wrap: wrap;
	}

	.header-wrap .logo a {
		font-size: 2rem;
		font-weight: 400;
		text-transform: uppercase;
		font-family: Montserrat, sans-serif;
		color: #ffffff;
	}

	.header-wrap .logo span {
		color: #d82949;
	}

	.navbar-container ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.navbar-container ul li {
		display: inline-flex;
		margin-left: 30px;
		padding: 0;
	}

	.navbar-container ul li a {
		font-size: 1.5rem;
		font-weight: 600;
		position: relative;
		color: white;
		text-transform: uppercase;
		font-family: Montserrat, sans-serif;
	}

	.box {
		position: relative;
		align-self: center;
		display: inline;
		margin-left: 30px;
		height: 115%;
	}

	.box::before {
		content: '';
		position: absolute;
		width: 10%;
		left: 0;
		height: 105%;
		background-color: #d82949;
		transition: 0.3s ease;
	}

	.box:hover::before {
		width: 100%;
	}

	.hamburger {
		display: none;
		cursor: pointer;
	}

	.bar {
		display: block;
		width: 25px;
		height: 3px;
		margin: 5px;
		transform: 0.3 ease-in-out;
		background-color: white;
	}
</style>
