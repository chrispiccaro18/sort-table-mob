export function makeContactRow(contact) {
    const html = /*html*/`
        <tr>
            <td>${contact.isActive ? 'Yes' : 'No'}</td>
            <td>${contact.balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</td>
            <td>${contact.firstName}</td>
            <td>${contact.lastName}</td>
            <td>${contact.company}</td>
            <td>${capFirstLetter(contact.favoriteFruit)}</td>
        </tr> 
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

export function capFirstLetter(fruit) {
    return fruit[0].toUpperCase() + fruit.slice([1]);
}

const contactTableBody = document.getElementById('contacts-table-body');

export default function loadContacts(contacts) {
    clearRows();
    contacts.forEach(contact => {
        const dom = makeContactRow(contact);
        contactTableBody.appendChild(dom);
    });
}

function clearRows() {
    while(contactTableBody.children.length > 0) {
        contactTableBody.lastElementChild.remove();
    }
}
