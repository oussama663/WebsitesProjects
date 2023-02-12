<script>
	var form = document.forms["contact"];
	form.addEventListener('submit',contact_submit,false);

	function contact_submit(e) {
		// Stop Form From Submitting
		e.preventDefault();

		// Set Initial Variables
		var target = e.target || e.srcElement;
		var to = 'oussama663@gmail.com';
		var uri = 'mailto:' + to;
		var body = '';

		// Set Form Values to Variables
		var name = target.elements['name'].value;
		var surname = target.elements['surname'].value;
		var email = target.elements['email'].value;
		var phone = target.elements['phone'].value;
		var message = target.elements['message'].value;
		var subject = "Client Site";

		// Build Body / Message with all Input Fields
		body += message + "\r\n\r\n";
		body += "Nom: " + name + "\r\n";
		body += "Prénom: " + surname + "\r\n";
		body += "Phone Number: " + phone + "\r\n";
		body += "Email: " + email + "\r\n";

		// Build final Mailto URI
		uri += '?subject=' + encodeURIComponent(subject);
		uri += '&body=' + encodeURIComponent(body);

		// Open Mailto in New Window / Tab
		window.open(uri,'_blank');
	}
</script>