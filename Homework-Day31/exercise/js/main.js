document.addEventListener("DOMContentLoaded", () => {
    loadTask();
    document.getElementById("filter").addEventListener("change", loadTask);
});

const getTask = () => JSON.parse(localStorage.getItem("tasks")) || [];
const saveTask = (tasks) => localStorage.setItem("tasks", JSON.stringify(tasks));

const loadTask = () => {
    const tasks = getTask();
    renderTask(filterTasks(tasks));
};

const filterTasks = (tasks) => {
    const filter = document.getElementById("filter").value;
    return tasks.filter(task => 
        filter === "all" ? true : (filter === "finished" ? task.completed : !task.completed)
    );
};

const renderTask = (tasks) => {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = tasks.map((task, index) => `
        <tr>
            <td>${index + 1}</td>
            <td>${task.name}</td>
            <td>${task.completed ? "✅" : "❌"}</td>
            <td>
                <button class="btn toggle" onclick="toggleTask(${index})"><i class="ri-check-line"></i></button>
                <button class="btn edit" onclick="editTask(${index})"><i class="ri-edit-line"></i></button>
                <button class="btn delete" onclick="deleteTask(${index})"><i class="ri-delete-bin-line"></i></button>
            </td>
        </tr>
    `).join("");
};

const addTask = () => {
    document.getElementById("add-task").style.display = "block";
};

const saveData = () => {
    const dataInput = document.getElementById("data-input");
    const taskName = dataInput.value.trim();

    if (!taskName) return alert("Vui lòng nhập tên công việc!");

    const tasks = getTask();
    tasks.push({ name: taskName, completed: false });
    saveTask(tasks);
    dataInput.value = "";
    loadTask();
};

const toggleTask = (index) => {
    const tasks = getTask();
    if (index < 0 || index >= tasks.length) return;
    tasks[index].completed = !tasks[index].completed;
    saveTask(tasks);
    loadTask();
};

const editTask = (index) => {
    const tasks = getTask();
    if (index < 0 || index >= tasks.length) return;
    
    const editDisplay = document.getElementById("edit-task");
    editDisplay.innerHTML = `
         <h3>Chỉnh sửa công việc</h3>
            <div>
                <label for="edit-name">Tên công việc:</label>
                <input type="text" id="edit-name" value="${tasks[index].name}" />
            </div>
            <div>
                <label for="edit-status">Trạng thái:</label>
                <select id="edit-status">
                    <option value="false" ${!tasks.completed ? "selected" : ""}>Chưa hoàn thành</option>
                    <option value="true" ${tasks.completed ? "selected" : ""}>Đã hoàn thành</option>
                </select>
            </div>
            <div class="edit-btn">
                <button onclick="saveEdit(${index})">Lưu</button>
                <button onclick="cancelEdit()">Hủy</button>
            </div>`;
    editDisplay.style.display = "block";
};

const saveEdit = (index) => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const newName = document.getElementById("edit-name").value.trim();
    const newStatus = document.getElementById("edit-status").value === "true";

    if (newName) {
        tasks[index] = { name: newName, completed: newStatus };
        localStorage.setItem("tasks", JSON.stringify(tasks)); 
        loadTask();
        cancelEdit();
        showNotification("Cập nhật thành công", "success");
    } else {
        showNotification("Cập nhật thất bại", "error");
    }
}

const cancelEdit = () => {
    document.getElementById("edit-task").style.display = "none"
}

// Delete content
const deleteTask = (index) => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks.length > index) {
        tasks.splice(index, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTask();

        showNotification("Công việc đã được xóa", "success");
    }
}
const showNotification = (message, type) => {
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.innerText = message;
    
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
};
