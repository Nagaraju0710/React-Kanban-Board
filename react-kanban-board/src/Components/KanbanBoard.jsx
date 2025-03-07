import React, { useState } from "react";
// import { DndProvider, HTML5Backend } from "react-dnd-html5-backend";
// import { DndProvider, HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Button, TextField, Grid, Modal, ListSubheader, MenuItem, MenuList } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Column from "./Column";
import "./KanbanBoard.css";

const TASK_STATUSES = ["To Do", "In Progress", "Peer Review", "Done"];

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Task 1", description: "This is task 1", status: "To Do" },
    { id: 2, title: "Task 2", description: "This is task 2", status: "In Progress" },
  ]);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [newTask, setNewTask] = useState({ title: "", description: "" });

  const moveTask = (id, newStatus) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, status: newStatus } : task)));
  };

  const handleAddTask = () => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask, status: "To Do" }]);
    setNewTask({ title: "", description: "" });
    setOpen(false);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="kanban-board">
        <TextField
          label="Search Tasks"
          variant="outlined"
          fullWidth
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
        <Grid container spacing={2} className="kanban-container">
          {TASK_STATUSES.map((status) => (
            <Grid item xs={12} sm={6} md={3} key={status}>
              <Column
                status={status}
                tasks={tasks.filter(
                  (task) => task.status === status && task.title.toLowerCase().includes(search.toLowerCase())
                )}
                moveTask={moveTask}
              />
            </Grid>
          ))}
        </Grid>
        <Button
          variant="contained"
          color="primary"
          className="add-task-button"
          startIcon={<AddIcon />}
          onClick={() => setOpen(true)}
        >
          Add Task
        </Button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <div className="modal-content">
            <h2>Add New Task</h2>
            <TextField
              label="Title"
              fullWidth
              margin="dense"
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />
            <TextField
              label="Description"
              fullWidth
              margin="dense"
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            />
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={handleAddTask} variant="contained" color="primary">Add</Button>
          </div>
        </Modal>
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;