<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	$name = strip_tags(trim($_POST["name"]));
		$name = str_replace(array("\r","\n"),array(" "," "),$name);
	$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
	$subject = trim($_POST["subject"]);
	$message = trim($_POST["message"]);

	if (empty($name) OR empty($message) or !filter_var($email, FILTER_VALIDATE_EMAIL)) {
		http_response_code(400);
		echo "Oops! There was a problem with your submission. Please complete the form and try again.";
		exit;
	}

	$recipient = "nicole.vatland@me.com";

	if (empty($subject)) {
		$subject = "New Message";
	}

	$email_headers = "From: $name <$email>";

	if (mail($recipient, $subject, $message, $email_headers)) {
		http_response_code(200);
		echo "Thank you! Your message has been sent.";
	} else {
		http_response_code(500);
		echo "Oops! Something went wrong and your message could not be sent.";
	}
} else {
	http_response_code(403);
	echo "There was a problem with your submission. Please try again.";
}

?>