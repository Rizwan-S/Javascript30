const dogs = [
    { name: "Snickers", age: 2 },
    { name: "hugo", age: 8 },
];

function makeGreen() {
    const p = document.querySelector("p");
    p.style.color = "#BADA55";
    p.style.fontSize = "50px";
}

// Regular
console.log("Hello");

// Interpolated
console.log("Hello I am a %s string", "e");

// Styled
console.log("%c I am some great text", "font-size:50px; background:red;");

// warning!
console.warn("OH NOOO!");

// Error :|
console.error("Shit!");

// Info
console.info("Crocodiles eat 3-4 people per year.");

// Testing
console.assert(1 === 1, "That is wrong!");

// clearing
console.clear();

// Viewing DOM Elements
const p = document.querySelector("p");
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
    console.log(`This is ${dog.name}`);
});

// counting
console.count("Wes");

// timing
console.time("Fetching data");
console.timeEnd("Fetching data");
