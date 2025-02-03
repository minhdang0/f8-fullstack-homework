//Load content
const loadTask = () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td class="${item.completed ? 'completed-task' : ''}">${item.name}</td>
            <td style="color:${item.completed ? 'green' : 'red'}">${item.completed ? "Đã hoàn thành" : "Chưa hoàn thành"}</td>
            <td>
                <button class="btn toggle" onclick="toggleTask(${index})"><i class="ri-check-line"></i></button>
                <button class="btn edit" onclick="editTask(${index})"><i class="ri-edit-line"></i></button>
                <button class="btn delete" onclick="deleteTask(${index})"><i class="ri-delete-bin-line"></i></button>
            </td>
        `;
        taskList.appendChild(row);
    });
}

// Add content


const addTask = () => {
    const add = document.getElementById("add-task");
    const addButton = document.getElementById("button-add");
    add.classList.toggle("active");
    if (add.classList.contains("active")) {
        addButton.innerHTML = `<i class="ri-subtract-line"></i>`;
    } else {
        addButton.innerHTML = `<i class="ri-add-line"></i>`;
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

// Save content
const saveData = () => {
    const dataInput = document.getElementById("data-input");
    const taskName = dataInput.value.trim();

    if (taskName !== "") {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push({ name: taskName, completed: false });
        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTask();
        dataInput.value = "";
        showNotification("Công việc đã được lưu thành công!", "success");
    } else {
        showNotification("Vui lòng nhập tên công việc!", "error");
    }
}

// Change state
const toggleTask = (index) => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));

    tasks[index].completed = !tasks[index].completed; 
    localStorage.setItem("tasks", JSON.stringify(tasks));
    loadTask();
}

// Edit task
const editTask = (index) => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const task = tasks[index];

    const editDisplay = document.getElementById("edit-task");
    if (!editDisplay) {
        console.error("Không tìm thấy phần tử chỉnh sửa!");
        return;
    }
    editDisplay.innerHTML = `
            <h3>Chỉnh sửa công việc</h3>
            <div>
                <label for="edit-name">Tên công việc:</label>
                <input type="text" id="edit-name" value="${task.name}" />
            </div>
            <div>
                <label for="edit-status">Trạng thái:</label>
                <select id="edit-status">
                    <option value="false" ${!task.completed ? "selected" : ""}>Chưa hoàn thành</option>
                    <option value="true" ${task.completed ? "selected" : ""}>Đã hoàn thành</option>
                </select>
            </div>
            <div class="edit-btn">
                <button onclick="saveEdit(${index})">Lưu</button>
                <button onclick="cancelEdit()">Hủy</button>
            </div>`;
    editDisplay.classList.toggle("inactive")
    editDisplay.classList.add("active");
}

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
    document.getElementById("edit-task").classList.add("inactive");
    document.getElementById("edit-task").classList.remove("active")
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

document.addEventListener("DOMContentLoaded", loadTask);
