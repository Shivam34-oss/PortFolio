  function addTask() {
            const taskInput = document.getElementById("taskInput");
            const taskList = document.getElementById("taskList");

            if (taskInput.value === "") {
                alert("Please enter a task!");
                return;
            }

            let li = document.createElement("li");
            li.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">Delete</button>`;
            taskList.appendChild(li);
            taskInput.value = "";
        }

        function removeTask(element) {
            element.parentElement.remove();
        }