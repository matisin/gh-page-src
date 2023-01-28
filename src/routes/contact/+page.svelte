<script>
	import Navbar from '../components/Navbar.svelte';
	import location from '$lib/images/location.svg';
	import phone from '$lib/images/phone.svg';
	import mail from '$lib/images/mail.svg';
	import linkedin from '$lib/images/linkedin.svg';
	import contactMe from '$lib/images/contact-me.jpg';
	import './styles.css';
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
					<a href="https://goo.gl/maps/DERwaAaXaprhhEU1A" target="_blank" rel="noreferrer">
						<img class="icon" src={location} alt="lugar." />&ensp;Concepción, Chile</a
					>
				</div>
				<div class="contactBox">
					<a href="mailto:matias.medina.s2@gmail.com">
						<img class="icon" src={mail} alt="mail." />&ensp;matias.medina.s2@gmail.com</a
					>
				</div>
				<div class="contactBox">
					<a href="tel:+56987334383"
						><img class="icon" src={phone} alt="teléfono." />&ensp;(+56) 9 - 8733 4383</a
					>
				</div>
				<div class="contactBox">
					<a
						href="https://www.linkedin.com/in/mat%C3%ADas-medina-79141111b/"
						target="_blank"
						rel="noreferrer"
						><img class="icon" src={linkedin} alt="linkedin." />&ensp;Concepción, Chile</a
					>
				</div>
				<img class="contactMe" src={contactMe} alt="contact me" />
			</div>
		</div>
	</div>
</section>
