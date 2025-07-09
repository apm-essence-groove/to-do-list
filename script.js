document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    function addTodoItem() {
        const taskText = todoInput.value.trim();

        if (taskText === '') {
            alert('Please enter a task!'); // Simple user feedback
            todoInput.focus(); // Keep focus on input
            return; // Exit function if input is empty
        }

        const listItem = document.createElement('li');
        listItem.setAttribute('tabindex', '0'); // Make list item focusable for keyboard users
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button aria-label="Delete task ${taskText}">Delete</button>
        `;
        // No need for individual event listeners on span or button here due to delegation below

        todoList.appendChild(listItem);
        todoInput.value = ''; // Clear the input field
        todoInput.focus(); // Return focus to input for quick entry
    }

    // Event Delegation for clicking on list items or delete buttons
    todoList.addEventListener('click', (event) => {
        const target = event.target;

        // Check if the clicked element is a delete button
        if (target.tagName === 'BUTTON' && target.textContent === 'Delete') {
            target.closest('li').remove(); // Remove the parent <li> element
        }
        // Check if the clicked element is the span (task text) or the li itself (to toggle completion)
        else if (target.tagName === 'SPAN' || target.tagName === 'LI') {
            // If span is clicked, toggle class on its parent li
            const listItem = target.tagName === 'SPAN' ? target.parentElement : target;
            listItem.classList.toggle('completed');
        }
    });

    // Add task when Add button is clicked
    addButton.addEventListener('click', addTodoItem);

    // Add task when Enter key is pressed in the input field
    todoInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTodoItem();
            event.preventDefault(); // Prevent default form submission if any
        }
    });
});
