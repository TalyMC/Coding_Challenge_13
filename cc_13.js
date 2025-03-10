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

    //Task 5 Inline Editing for Employee Cards-----------------------------------
    editButton.addEventListener('click', function(){
        const nameEdit = document.createElement('input');
        nameEdit.setAttribute('type','text')
        nameEdit.value = heading.textContent;
        
        const positionEdit = document.createElement('input');
        positionEdit.setAttribute('type','text');
        positionEdit.value = paragraph.textContent;

        const saveButton = document.createElement('button');
        saveButton.textContent = 'Save';

        //Appending Functions
        employeeCard.innerHTML='';
        employeeCard.appendChild(nameEdit);
        employeeCard.appendChild(positionEdit);
        employeeCard.appendChild(saveButton);

        //Making Save Button Respond
        saveButton.addEventListener('click', function() {
            heading.textContent = nameEdit.value;
            paragraph.textContent = positionEdit.value;
            
            employeeCard.innerHTML = '';
            employeeCard.appendChild(heading);
            employeeCard.appendChild(paragraph);
            employeeCard.appendChild(editButton);
            employeeCard.appendChild(removeButton);
        });
    });//End of Task 5-------------------------------------------------------------

    //Remove Button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Abolish';
    
    //Task 4 Implementing Removal of Employee Cards with Event Bubbling-----------
    removeButton.addEventListener('click',(event) => {
        console.log('Abolish button clicked for an employee');
        employeeCard.remove();
        event.stopPropagation();
    });
    //End of Task 4----------------------------------------------------------------

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