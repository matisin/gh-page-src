<script>
	import Navbar from '../components/Navbar.svelte';
	import location from '$lib/images/location.svg';
	import phone from '$lib/images/phone.svg';
	import mail from '$lib/images/mail.svg';
	import linkedin from '$lib/images/linkedin.svg';
	import contactMe from '$lib/images/contact-me.jpg';

	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import moment from 'moment';
</script>

<section>
	<div class="main-container">
		<Navbar />
		<div class="contact">
			<div class="mail">
				<h2>Contáctame</h2>
				<h3>Cualquier duda envíame un mensaje</h3>
				<form action="mailto:matias.medina.s2@gmail.com" method="post" enctype="text/plain">
					<input type="text" id="name" required placeholder="Nombre" />
					<input
						type="email"
						id="email"
						placeholder="nombre@ejemplo.com"
						pattern=".+@.+\..+"
						required
					/>
					<textarea type="text" id="message" required placeholder="Escribe lo que quieras" />
					<input class="submit" type="submit" value="Enviar" />
				</form>
			</div>
			<div class="contactInfo">				
				<div class="contactBox">
					
					<a href="https://goo.gl/maps/DERwaAaXaprhhEU1A" target="_blank" rel="noreferrer"
						> <img class="icon" src={location} alt="lugar." />&ensp;Concepción, Chile</a
					>
				</div>
				<div class="contactBox">
					
					<a href="mailto:matias.medina.s2@gmail.com"> <img class="icon" src={mail} alt="mail." />&ensp;matias.medina.s2@gmail.com</a>
				</div>
				<div class="contactBox">
					
					<a href="tel:+56987334383"><img class="icon" src={phone} alt="teléfono." />&ensp;(+56) 9 - 8733 4383</a>
				</div>
				<div class="contactBox">
					<a href="https://www.linkedin.com/in/mat%C3%ADas-medina-79141111b/" target="_blank" rel="noreferrer"
						><img class="icon" src={linkedin} alt="linkedin." />&ensp;Concepción, Chile</a
					>
				</div>
				<img class="contactMe" src={contactMe} alt="contact me"/>
			</div>
		</div>
	</div>
</section>

<style>
	h2 {
		text-align: left;
		color: var(--color-text-2);
	}
	h3 {
		text-align: left;
		color: var(--color-text-2);
		font-weight: 300;
	}
	input {
		font-size: 13px;
		border-radius: 4px;
		line-height: 1.5;
		padding: 5px 10px;
		transition: box-shadow 100ms ease-in, border 100ms ease-in, background-color 100ms ease-in;
		border: var(--color-bg-grey);
		color: var(--color-text-2);
		background: var(--color-bg-grey);
		display: block;
		height: 30px;
		margin: 20px 0px;
		width: calc(100% - 40px);
	}

	textarea {
		font-family: var(--font-body);
		font-size: 13px;
		border-radius: 4px;
		line-height: 1.5;
		padding: 5px 10px;
		transition: box-shadow 100ms ease-in, border 100ms ease-in, background-color 100ms ease-in;
		border: var(--color-bg-grey);
		color: var(--color-text-2);
		background: var(--color-bg-grey);
		display: block;
		height: 100px;
		margin: 10px 0px;
		width: calc(100% - 40px);
		resize: none;
	}

	input:hover {
		border: #ccc;
	}
	input:focus {
		border: 1px solid var(--color-bg-0);
		background: var(--color-bg-3);
	}

	input.submit {
		background: var(--color-bg-0);
		color: var(--color-text);
		height: 45px;
		width: calc(100% - 20px);
		cursor: pointer;
		font-size: 23px;
		font-weight: 500;
		margin-bottom: 0px;
		transition: 0.3s;
	}

	input.submit:hover {
		background: var(--color-bg-2);		
	}

	.contact {
		background: var(--color-bg-3);
		display: -webkit-flex;
		display: flex;
		flex-direction: row;
		border-radius: 7px;
		padding: 10px 40px 40px 40px;
	}

	.mail {
		-webkit-flex: 3;
		-ms-flex: 3;
		flex: 3;
	}

	.contactInfo {
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		display: flex;
		flex-direction: column-reverse;
		padding-top: 20px;
	}

	.contactBox {
		margin: 10px 0px;
		width: max-content;
	}



	.icon {
		height: 20px;
		width: 20px;
		vertical-align: bottom;
	}

	.contactMe {
		width: 100%;
		border-radius: 5px;
	}

	a {
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	@media (max-width: 940px) {
		.contact {
			-webkit-flex-direction: column;
			flex-direction: column;
		}

		input {
			width: calc(100% - 20px);
		}
		input.submit {
			width: calc(100%);
		}
		textarea {
			width: calc(100% - 20px);
		}
	}
</style>
