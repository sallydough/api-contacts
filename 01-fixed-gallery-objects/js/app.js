// An array of objects that now replace the array of numbers from last session
const contacts = [
  {
    id: 1,
    name:           "Lema",
    title:        '403-123-4567',
    image: "https://static.thenounproject.com/png/196436-200.png"
  },
  {
    id: 2,
    name:           "Meseret",
    title:        '4363848484',
    image: "https://static.thenounproject.com/png/196436-200.png"
  },
  {
    id: 3,
    name:           "Sally",
    title:        '403-123-4567',
    image: "https://static.thenounproject.com/png/196436-200.png"
  },
  {
    id: 4,
    name:           "Mark",
    title:        '4363848484',
    image: "https://static.thenounproject.com/png/196436-200.png"
  },
  {
    id: 5,
    name:           "Larry",
    title:        '403-123-4567',
    image: "https://static.thenounproject.com/png/196436-200.png"
  },
  {
    id: 6,
    name:           "Medhekj",
    title:        '4363848484',
    image: "https://static.thenounproject.com/png/196436-200.png"
  }
];

let content = '';

/* This loop is broken!
1. Refactor the following code so that it works with an array of objects.
2. Add custom `alt` attributes that use the title property.
*/
for (const person of contacts) {
  
  content += `<div class="contact-card">
  <div class="image-container">
  <img src="${person.image}" alt="" />
  </div>
  <h1 class='contact-list-name' >${person.name}</h1>
  <h2 class='contact-list-number'>${person.title}</h2>
</div>`;

}
/*more changes*/

const gallery = document.querySelector('.gallery');

gallery.innerHTML = content;

// Add a click event listener to each contact card
document.querySelectorAll('.contact-card').forEach((contactCard) => {
  contactCard.addEventListener('click', () => {
    const name = contactCard.querySelector('.contact-list-name').textContent;
    console.log(name);
    window.alert(`WOULD YOU LIKE TO CALL ${name}`);
  });
});

/*my notes*/ 


