

//Get the form element
const form = document.getElementById('theForm');

//adding submit event listener
document.getElementById('s').addEventListener('submit', function(event){
	event.preventDefault();//Prevents page reload

	//getting the form values
	const name = form.name.value;
	const email = form.email.value;
	const number = form.number.value;
	const gender = form.gender.value;
	const course = form.course.value;
	const resume = form.resume.value;
	const image = form.image.value;
	const about = form.about.value;

	//Displaying to the console
	console.log("The name: ", name);
	console.log('The Email is: ', email);
	console.log("Number: ", number);
	console.log("Gender: ", gender);
	console.log("Taking a course in: ", course);
	console.log("Resume file: ", resume);
	console.log("The image: ", image);
	console.log("More about me: ", about);

});

//document.getElementById("myBtn").addEventListener("click", doSomething);


