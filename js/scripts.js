function handleWarrior(event) {
  event.preventDefault();

  let shaqWarrior = document.querySelector("div#shaqWarrior");
  let shaqMagic = document.querySelector("div#shaqMagic");
  let shaqArchery = document.querySelector("div#shaqArchery");
  let averageWarrior = document.querySelector("div#averageWarrior");
  let averageMagic = document.querySelector("div#averageMagic");
  let averageArchery = document.querySelector("div#averageArchery");
  let tinyWarrior = document.querySelector("div#tinyWarrior");
  let tinyMagic = document.querySelector("div#tinyMagic");
  let tinyArchery = document.querySelector("div#tinyArchery");



  let height = document.getElementById("height").value;
  const operator = document.querySelector("input[name='operator']:checked").value;

  shaqWarrior.setAttribute("class", "hidden");
  shaqMagic.setAttribute("class", "hidden");
  shaqArchery.setAttribute("class", "hidden");
  averageWarrior.setAttribute("class", "hidden");
  averageMagic.setAttribute("class", "hidden");
  averageArchery.setAttribute("class", "hidden");
  tinyWarrior.setAttribute("class", "hidden");
  tinyMagic.setAttribute("class", "hidden");
  tinyArchery.setAttribute("class", "hidden");

  if (height === 'shaq' && operator === 'warrior') {
    shaqWarrior.removeAttribute('class', 'hidden');
  } else if (height === 'shaq' && operator === 'magic') {
    shaqMagic.removeAttribute('class', 'hidden');
  } else if (height === 'shaq' && operator === 'archery') {
    shaqArchery.removeAttribute('class', 'hidden');
  } else if (height === 'average' && operator === 'warrior') {
    averageWarrior.removeAttribute('class', 'hidden');
  } else if (height === 'average' && operator === 'magic') {
    averageMagic.removeAttribute('class', 'hidden');
  } else if (height === 'average' && operator === 'archery') {
    averageArchery.removeAttribute('class', 'hidden');
  } else if (height === 'tiny' && operator === 'warrior') {
    tinyWarrior.removeAttribute('class', 'hidden');
  } else if (height === 'tiny' && operator === 'magic') {
    tinyMagic.removeAttribute('class', 'hidden');
  } else if (height === 'tiny' && operator === 'archery') {
    tinyArchery.removeAttribute('class', 'hidden');
  }
  


  // the code to get and process form values will go here!
}

window.addEventListener("load", function () {
  const form = document.getElementById("character");
  form.addEventListener("submit", handleWarrior);
});