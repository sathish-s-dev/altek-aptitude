<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="ISO-8859-1">
<title>Login Page</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"
	crossorigin="anonymous"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script>

<script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-light">
	<header class="bg-white drop-shadow-md sticky top-0">
		<nav
			class="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
			aria-label="Global">
			<div class="flex lg:flex-1">
				<a href="#" class="-m-1.5 p-1.5"> <span class="sr-only">ALTEK</span>
					<img class="h-8 w-auto" src="./images/Alt.Logo.png" alt="">
				</a>
			</div>
		</nav>
	</header>
	<input type="hidden" name="secretusername" id="secretusername" value="">
	<input type="hidden" name="secretpassword" id="secretpassword" value="">


	<div id="appendTestPaper">
		<div
			class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
			<div class="sm:mx-auto sm:w-full sm:max-w-md">
				<h2
					class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign
					in to your account</h2>
			</div>

			<div class="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
				<div class="space-y-6">
					<div>
						<label for="email"
							class="block text-sm font-medium leading-6 text-gray-900">Email
							address</label>
						<div class="mt-2">
							<input id="email" name="email" type="email" autocomplete="email"
								required
								class="indent-1.5 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
						</div>
					</div>

					<div>
						<div class="flex items-center justify-between">
							<label for="password"
								class="block text-sm font-medium leading-6 text-gray-900">Password</label>
						</div>
						<div class="mt-2">
							<input id="password" name="password" type="password"
								autocomplete="current-password" required
								class="indent-1.5 block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
						</div>
					</div>

					<div>
						<button type="submit" onclick="authenticateUserLogin();"
							class="flex justify-center w-[150px] mx-auto rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
							in</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="./js/login.js"></script>
</body>
</html>
