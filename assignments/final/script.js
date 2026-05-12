// ============================================================
//  IT030 — Final Project Starter
//  script.js
//
//  This file powers the Interest Filter on interests.html.
//
//  What this feature does when finished:
//    - Stores your projects/interests as structured data
//    - Renders them as cards on the page when it loads
//    - When the user picks a category from the dropdown,
//      shows only the items that match
//
//  HOW TO WORK THROUGH THIS FILE:
//    1. Read every comment block before touching any code
//    2. Complete the TODOs from top to bottom — do not skip ahead
//    3. After each TODO: save → refresh browser → check the result
//    4. If something breaks, open DevTools (F12) → Console tab
//       and read the red error message before changing anything
//
//  Concepts you are using:
//    const        — a variable whose value does not change
//    array        — a list of items [ ]
//    object       — a item with named properties { key: value }
//    function     — a named block of code you can call by name
//    switch       — a cleaner way to handle multiple specific cases
//    for loop     — repeating code for each item in a list
//    innerHTML    — writing HTML content into a page element
//    getElementById — finding a page element by its id
// ============================================================


// ============================================================
//  PART 1 — YOUR DATA
//
//  An array of objects stores structured information.
//  Each object { } represents one item and has named properties.
//
//  Your objects need exactly these three properties:
//    name        — what the item is called (a string)
//    category    — which group it belongs to (a string)
//                  this MUST exactly match the <option> values
//                  you set in interests.html — same spelling, same case
//    description — a short sentence about it (a string)
//
//  How to read/write an object:
//    { name: "HTML", category: "Language", description: "Markup for web pages" }
//
//  How to access a property:
//    items[0].name        gives you the name of the first item
//    items[2].category    gives you the category of the third item
//
//  TODO 1: Replace every "___" with your real data.
//  Requirements:
//    - At least 6 items total
//    - At least 3 different categories
//    - Each category must have at least 2 items
//    - Category values must match your <option> values in the HTML
// ============================================================

const items = [
  {
    name: "Super Smash Bros",          // TODO 1 — item name
    category: "games",      // TODO 1 — must match an <option> value exactly
    description: "A 2D fighting game featuring characters from all across gaming."    // TODO 1 — one sentence description
  },
  {
    name: "Mario Kart",
    category: "games",
    description: "Race across the world of Mario with your friends!"
  },
  {
    name: "Avengers Endgame",
    category: "movies",
    description: "After the events of the previous film, the Avengers try to save the people of the universe snapped away by Thanos."
  },
  {
    name: "Superman",
    category: "movies",
    description: "The start of the DCU, Superman finally loses his first fight defending Metropolis."
  },
  {
    name: "Lego Sets",
    category: "hobbies",
    description: "Build different structures out of the different pieces each set provides you."
  },
  {
    name: "Trading Cards",
    category: "hobbies",
    description: "Collect, play with, or trade these cards around with friends."
  },
  // You can add more objects here if you want
];


// ============================================================
//  PART 2 — THE RENDER FUNCTION
//
//  This function takes a list of items and draws them as
//  cards on the page. It is called by filterItems() below.
//
//  It works in three steps:
//    Step 1 — Find the container element on the page
//    Step 2 — Clear whatever is currently inside it
//    Step 3 — Loop through the list and build a card for each item
//
//  After rendering, it also updates the result count.
//
//  Read each TODO comment carefully before filling it in.
// ============================================================

function renderItems(list) {

  // ── Step 1: Find the container ──────────────────────────────
  //
  //  document.getElementById("some-id") finds the element on the
  //  page whose id attribute matches and returns it as a variable.
  //
  //  TODO 2: Fill in the id of the <div> in interests.html
  //  where the cards should appear. Look at the HTML — what is its id?

  const container = document.getElementById("results-container");  // TODO 2


  // ── Step 2: Clear the container ─────────────────────────────
  //
  //  Before drawing new cards, you must erase whatever is already there.
  //  Setting innerHTML to an empty string "" wipes all child elements.
  //
  //  If you skip this step, old cards stay on the page every time
  //  the user picks a new category — they pile up instead of replacing.
  //
  //  TODO 3: Clear the container before building new cards.
  //  Hint: assign an empty string to container.innerHTML

  container.innerHTML = "";  // TODO 3


  // ── Step 3: Loop and build cards ────────────────────────────
  //
  //  A for loop runs the code inside it once for each item.
  //  The variable i is the current position (index) in the list.
  //  It starts at 0 (first item) and counts up to list.length - 1.
  //
  //  Inside the loop:
  //    list[i]             — the current item (one object)
  //    list[i].name        — the name property of that item
  //    list[i].category    — the category property
  //    list[i].description — the description property
  //
  //  For each item, you will:
  //    1. Create a new <div> element
  //    2. Give it the CSS class "item-card"
  //    3. Set its innerHTML to show the item's properties
  //    4. Append it to the container
  //
  //  TODO 4a: Fill in the loop condition — what should i count up to?
  //  TODO 4b: Fill in the three property accesses inside innerHTML
  //  TODO 4c: Fill in the appendChild call

  for (let i = 0; i < list.length - 1; i++) {  // TODO 4a — what is the length of?

    const card = document.createElement("div");
    card.className = "item-card";

    // innerHTML lets you write HTML as a string.
    // The + operator joins strings together.
    // list[i].name accesses the name property of the current item.

    card.innerHTML =
      "<h3>" + list[i].name + "</h3>" +             // TODO 4b — which property is the title?
      "<p>"  + list[i].description + "</p>" +              // TODO 4b — which property is the description?
      "<span class='item-tag'>" + list[i].category + "</span>";  // TODO 4b — which property is the label?

    container.innerHTML.appendChild(card);  // TODO 4c — which variable is the container?
  }


  // ── Update the result count ──────────────────────────────────
  //
  //  After building the cards, update the result count paragraph
  //  to show how many items are currently displayed.
  //
  //  list.length gives you the number of items in the list
  //  that was passed into this function (already filtered).
  //
  //  TODO 5a: Fill in the id of the result count element
  //  TODO 5b: Fill in what gives you the number of items shown

  document.getElementById("result-count").textContent =   // TODO 5a
    list.length + " items shown";                         // TODO 5b — what holds the count?
}


// ============================================================
//  PART 3 — THE FILTER FUNCTION
//
//  This function runs every time the user picks a category
//  from the dropdown menu. The HTML calls it like this:
//    onchange="filterItems(this.value)"
//  where this.value is the value of the selected <option>.
//
//  A switch statement checks one value against multiple cases.
//  It is cleaner than a long if/else chain when you know
//  exactly which values to expect.
//
//  Structure:
//    switch (someValue) {
//      case "exact match":
//        // code for this case
//        break;
//      case "another match":
//        // code for this case
//        break;
//      default:
//        // runs if nothing matched
//    }
//
//  IMPORTANT: Every case needs a break statement at the end.
//  Without break, JavaScript falls through and runs the next
//  case too — which is almost never what you want.
//
//  In this function:
//    - Each case matches one of your category values
//    - Inside each case, build a filtered array by looping
//      through items and collecting only the matching ones
//    - Then call renderItems() with that filtered array
//    - The empty string "" case ("All") passes the full array
//
//  TODO 6a: Fill in the parameter name in the function signature
//           (the word in the parentheses — this is what receives
//           the selected category value from the dropdown)
//  TODO 6b: Fill in the switch target — what value are you switching on?
//  TODO 6c: Add a case for each of your categories
//  TODO 6d: Inside each case, build a filtered array and call renderItems
//  TODO 6e: Fill in the default case
// ============================================================

function filterItems(filter_thing) {  // TODO 6a — name the parameter

  switch (filter_thing) {             // TODO 6b — what are you switching on?

    case "":
      // Empty string means the user selected "All"
      // Pass the full items array — no filtering needed
      renderItems(items);
      break;

    case "games":              // TODO 6c — your first category value (must match <option> value)
      // Build a filtered list for this category
      //
      // How filtering works:
      //   1. Start with an empty array
      //   2. Loop through all items
      //   3. If the item's category matches this case, add it to the array
      //   4. Pass the result to renderItems()
      //
      // The push() method adds an item to the end of an array:
      //   myArray.push(someValue)
      //
      // TODO 6d: Complete the filtering logic for this case

      const filtered1 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "games") {  // TODO 6d — which category?
          filtered1.push(items[i]);
        }
      }
      renderItems(filtered1);
      break;

    case "movies":              // TODO 6c — your second category value
      // TODO 6d: Same pattern as above — build filtered array and render

      const filtered2 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "movies") {  // TODO 6d
          filtered2.push(items[i]);
        }
      }
      renderItems(filtered2);
      break;

    case "hobbies":              // TODO 6c — your third category value
      // TODO 6d: Same pattern

      const filtered3 = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "hobbies") {  // TODO 6d
          filtered3.push(items[i]);
        }
      }
      renderItems(filtered3);
      break;

    default:
      // This runs if the selected value does not match any case above.
      // As a safe fallback, show everything.
      //
      // TODO 6e: Call renderItems with the full items array

      renderItems(items);  // TODO 6e
      break;
  }
}


// ============================================================
//  PART 4 — RUN ON LOAD
//
//  When the page first loads, the dropdown shows "All"
//  but nothing is rendered yet — because the filter function
//  only runs when the user changes the dropdown.
//
//  This line calls filterItems with an empty string ""
//  so all items appear immediately when the page opens.
//
//  No changes needed here. But be ready to explain in your
//  presentation: WHY does this line need to be at the bottom
//  of this file, after the functions above are defined?
// ============================================================

filterItems("");
