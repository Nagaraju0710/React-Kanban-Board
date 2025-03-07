import React from "react";
import { useDrop } from "react-dnd";
import { Typography, MenuList, MenuItem, ListSubheader } from "@mui/material";
import Task from "./Task";
import "./KanbanBoard.css";

const Column = ({ status, tasks, moveTask }) => {
  const [, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => moveTask(item.id, status),
  }));

  return (
    <div ref={drop} className="kanban-column">
      <Typography variant="h5" className="column-title">{status}</Typography>
      <MenuList>
        <ListSubheader>{status}</ListSubheader>
        {tasks.map((task) => (
          <MenuItem key={task.id}>
            <Task task={task} moveTask={moveTask} />
          </MenuItem>
        ))}
      </MenuList>
    </div>
  );
};

export default Column;