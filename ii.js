 
  const form = document.getElementById('theForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputs = form.querySelectorAll('input, select, textarea');
    const data = {};

    inputs.forEach(input => {
      data[input.name] = input.value;
    });

    console.log("Method 1 - Collected Data:", data);
  }); //
//
//
//
//
