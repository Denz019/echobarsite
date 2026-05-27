const cocktails = {
  // HOUSE COCKTAILS
  A1: {
    name: "Lemon Pie-Tini",
    ingredients: "Vanilla liqueur, Limoncello, lemon juice, sugar, vanilla & cream.",
    image: "images/lemon-pie-tini.jpg",
  },

  A2: {
    name: "Bramble",
    ingredients: "Gin, Creme de Mure, lemon juice & sugar.",
    image: "images/bramble.jpg",
  },

  A3: {
    name: "Gin Basil Smash",
    ingredients: "Gin, lemongrass syrup, lemon juice & basil.",
    image: "images/gin-basil-smash.jpg",
  },

  A4: {
    name: "Mate-ate",
    ingredients: "Pisco infused mate, cinnamon syrup & DOM Benedictine.",
    image: "images/mate-ate.jpg",
  },

  A5: {
    name: "Philly Smash",
    ingredients: "Blueberry infused rye whiskey, amaro, lime juice & sugar.",
    image: "images/philly-smash.jpg",
  },

  A6: {
    name: "Passion Caipirosca",
    ingredients: "Vodka, passion fruit, lime & sugar.",
    image: "images/passion-caipirosca.jpg",
  },

  A7: {
    name: "Very Berry Sour",
    ingredients: "Licor 43, blackberry liqueur, lemon & sugar.",
    image: "images/very-berry-sour.jpg",
  },

  A8: {
    name: "Berry Treasure",
    ingredients: "Bumbu rum, blackberry liqueur, chocolate bitters & orange juice.",
    image: "images/berry-treasure.jpg",
  },

  A9: {
    name: "Pear Gimlet",
    ingredients: "Xante Pear, pear, lime & sugar.",
    image: "images/pear-gimlet.jpg",
  },

  // CLASSIC COCKTAILS
  B1: {
    name: "Amaretto Sour",
    ingredients: "Amaretto, lemon juice & sugar.",
    image: "images/amaretto-sour.jpg",
  },

  B2: {
    name: "Whiskey Sour",
    ingredients: "Bourbon, Angostura Bitters, lemon juice & sugar.",
    image: "images/whiskey-sour.jpg",
  },

  B3: {
    name: "Classic Daiquiri",
    ingredients: "Rum, lime juice & sugar.",
    image: "images/classic-daiquiri.jpg",
  },

  B4: {
    name: "Espresso Martini",
    ingredients: "Vodka, coffee liqueur, muscovado sugar & cold brew espresso.",
    image: "images/espresso-martini.jpg",
  },

  B5: {
    name: "Dark & Stormy",
    ingredients: "Gosling Black Rum, Angostura Bitters, lime juice, sugar & ginger beer.",
    image: "images/dark-and-stormy.jpg",
  },

  B6: {
    name: "Old Fashioned",
    ingredients: "Bourbon, Angostura Bitters, orange bitters & muscovado sugar.",
    image: "images/old-fashioned.jpg",
  },

  B7: {
    name: "Negroni",
    ingredients: "Gin, Campari & sweet vermouth.",
    image: "images/negroni.jpg",
  },

  B8: {
    name: "Aperol Spritz",
    ingredients: "Aperol, prosecco & soda water.",
    image: "images/aperol-spritz.jpg",
  },

  B9: {
    name: "Mai Tai",
    ingredients: "Bumbu XO, orgeat & lime juice.",
    image: "images/mai-tai.jpg",
  },

  // ALCOHOL FREE
  C1: {
    name: "Passion Less",
    ingredients: "Passion fruit puree, lime juice, sugar, mint & soda water.",
    image: "images/passion-less.jpg",
  },

  C2: {
    name: "Boy Next Door",
    ingredients: "Martini Vibrante & pink grapefruit soda.",
    image: "images/boy-next-door.jpg",
  },

  C3: {
    name: "Amber Sour",
    ingredients: "Alcohol free amaretto, lemon juice & sugar.",
    image: "images/amber-sour.jpg",
  },
};
const svgObject = document.getElementById("tasteMap");

const nameEl = document.getElementById("cocktailName");
const ingredientsEl = document.getElementById("cocktailIngredients");
const imageEl = document.getElementById("cocktailImage");

svgObject.addEventListener("load", () => {
  const svgDoc = svgObject.contentDocument;

  const dots = svgDoc.querySelectorAll(".dot");

  dots.forEach((dot) => {
    const id = dot.dataset.id;

    dot.style.cursor = "pointer";

    dot.addEventListener("mouseenter", () => {
      showCocktail(id);
    });
  });
});

function showCocktail(id) {
  const cocktail = cocktails[id];

  if (!cocktail) return;

  nameEl.textContent = cocktail.name;
  ingredientsEl.textContent = cocktail.ingredients;

  imageEl.src = cocktail.image;
  imageEl.alt = cocktail.name;
}
