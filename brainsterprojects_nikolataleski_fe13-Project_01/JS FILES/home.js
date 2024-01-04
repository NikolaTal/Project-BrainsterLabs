// JS CODE FOR CARDS, FILTERS AND PAGINATION
document
  .querySelector("#marketing")
  .addEventListener("change", filterMarketing);
document.querySelector("#coding").addEventListener("change", filterCoding);
document.querySelector("#design").addEventListener("change", filterDesign);

function filterMarketing() {
  hideAllCards();

  if (document.querySelector("#marketing").checked) {
    var marketingCards = document.querySelectorAll(".marketing");
    marketingCards.forEach((marketingCard) => {
      marketingCard.style.display = "inline-block";
    });

    document.querySelector("#coding").checked = false;
    document.querySelector("#design").checked = false;
  } else {
    showAllCards();
  }
}

function filterCoding() {
  hideAllCards();

  if (document.querySelector("#coding").checked) {
    var codingCards = document.querySelectorAll(".coding");
    codingCards.forEach((codingCard) => {
      codingCard.style.display = "inline-block";
    });

    document.querySelector("#marketing").checked = false;
    document.querySelector("#design").checked = false;
  } else {
    showAllCards();
  }
}

function filterDesign() {
  hideAllCards();

  if (document.querySelector("#design").checked) {
    var designCards = document.querySelectorAll(".design");
    designCards.forEach((designCard) => {
      designCard.style.display = "inline-block";
    });

    document.querySelector("#coding").checked = false;
    document.querySelector("#marketing").checked = false;
  } else {
    showAllCards();
  }
}

function hideAllCards() {
  var allCards = document.querySelectorAll(".hideShow");

  allCards.forEach((card) => {
    card.style.display = "none";
  });
}

function showAllCards() {
  var allCards = document.querySelectorAll(".hideShow");

  allCards.forEach((card) => {
    card.style.display = "inline-block";
  });
}

const loadmore = document.querySelector(".load-more");

let currentItems = 6;
loadmore.addEventListener("click", (e) => {
  const elementList = [
    ...document.querySelectorAll(".paginationParent .pagination"),
  ];
  e.target.classList.add("show-loader");

  for (let i = currentItems; i < currentItems + 6; i++) {
    setTimeout(function () {
      e.target.classList.remove("show-loader");
      if (elementList[i]) {
        elementList[i].style.display = "flex";
      }
    }, 500);
  }
  currentItems += 6;

  if (currentItems >= elementList.length) {
    event.target.classList.add("loaded");
  }
});
