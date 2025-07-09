document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.getElementById('todo-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    // Function to add a new to-do item
    function addTodoItem() {
        const taskText = todoInput.value.trim();

        if (taskText !== '') {
            const listItem = document.createElement('li');

            // Create a span for the task text
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            taskSpan.addEventListener('click', () => {
                listItem.classList.toggle('completed'); // Toggle 'completed' class on click
            });

            // Create a delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(listItem); // Remove the list item when delete is clicked
            });

            listItem.appendChild(taskSpan);
            listItem.appendChild(deleteButton);
            todoList.appendChild(listItem);

            todoInput.value = ''; // Clear the input field
        }
    }

    // Add task when Add button is clicked
    addButton.addEventListener('click', addTodoItem);

    // Add task when Enter key is pressed in the input field
    todoInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTodoItem();
        }
    });
});
