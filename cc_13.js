//Task 2  Adding Employee Cards Dynamically
function createElement(name, position) {
    const employeeCard = document.createElement ('div');
    employeeCard.setAttribute('class', 'employee-card');
    
    
    //Employee name as the heading
    const heading = document.createElement('h3');
    heading.textContent = name; 
    
    //Employee Position
    const paragraph = document.createElement('h4');
    paragraph.textContent = position;

    //Edit Button
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';

    //Remove Button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'abolish';
    
    //Task 4
    removeButton.addEventListener('click',(event) => {
        console.log('Abolish button clicked for an employee');
        employeeCard.remove();
        event.stopPropagation();
    });

    //Appending Elements
    employeeCard.appendChild(heading);
    employeeCard.appendChild(paragraph);
    employeeCard.appendChild(editButton);
    employeeCard.appendChild(removeButton);

    document.getElementById('employeeContainer').appendChild(employeeCard)
}

//Employee Example
createElement('Alberto', 'Finance Manager');
createElement('Marvin', 'Accounting');
createElement('Enrique', 'Marketing Director');

//Task 3 Converting NodeLists to Arrays for Bulk Updates
function bulkUpdate () {
    const cards = document.querySelectorAll('.employee-card');
    const cardArray = Array.from(cards);

    cardArray.forEach(card => {
        card.style.backgroundColor = 'rgb(213, 176, 231)'
    });//function for bulk updating and card color
}
bulkUpdate();