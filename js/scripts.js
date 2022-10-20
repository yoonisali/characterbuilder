// Buisness Logic

function warrior() {


  document.getElementById("reveal2").setAttribute('class', 'hidden');
  const name = document.getElementById('name').value;
  const height = document.getElementById("height").value;
  const class1 = document.querySelector("input[name='operator']:checked").value;
  const dob = document.getElementById("dob").value;
  const color = document.getElementById("color").value;


  // UI Logic
  let result;
  if (height === 'shaq' && class1 === 'warrior') {
    result = document.removeAttribute("hidden");
  } else if (height === 'shaq' && class1 === 'magic') {
    result = document.removeAttribute('hidden');
  } else if (height === 'shaq' && class1 === 'archery') {
    result = document.removeAttribute('hidden');
  }


}







window.addEventListener("load", function () {
  const form = document.getElementById("character");
  form.addEventListener("submit", function(e){
    e.preventDefault(); 
    warrior();
  });
});