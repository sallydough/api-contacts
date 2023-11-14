// An array of objects that now replace the array of numbers from last session
const contacts = [
  {
    id:           "Lema",
    title:        '403-123-4567',
    image: "https://static.thenounproject.com/png/196436-200.png"
  },
  {
    id:           "Meseret",
    title:        '4363848484',
    image: "https://static.thenounproject.com/png/196436-200.png"
  },
  {
    id:           "Sally",
    title:        '403-123-4567',
    image: "https://static.thenounproject.com/png/196436-200.png"
  },
  {
    id:           "Mark",
    title:        '4363848484',
    image: "https://static.thenounproject.com/png/196436-200.png"
  },
  {
    id:           "Larry",
    title:        '403-123-4567',
    image: "https://static.thenounproject.com/png/196436-200.png"
  },
  {
    id:           "Medhekj",
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
  
  content += `<div onClick=call() class="contact-card">
  <div class="image-container">
  <img src="${person.image}" alt="" />
  </div>
  <h1 class='contact-list-name' id="${person.id}">${person.id}</h1>
  <h2 class='contact-list-number'>${person.title}</h2>
</div>`;

console.log(person.id)

}

const gallery = document.querySelector('.gallery');

gallery.innerHTML = content;



const call = () => {
  // const person.id = contacts.id
  const contactCardName = document.querySelector('.contact-card');
  contactCardName.addEventListener('click', () => {
    const contactName = document.querySelector('h1').textContent;
    console.log(contactName)
    window.alert(`WOULD YOU LIKE TO CALL ${contactName}`)

    // const personId = h1.dataset.contact-listId

    // console.log(person.id)
    // window.alert(`WOULD YOU LIKE TO CALL ${personId}`)
  })
  ;
}

// document.querySelectorAll('.contact-list-name').forEach(('.contact-card') => {
//   gallery.addEventListener

//   })
// })

