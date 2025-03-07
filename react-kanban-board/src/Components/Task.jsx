import React from "react";
import { useDrag } from "react-dnd";
import { Card, CardContent, Typography } from "@mui/material";
import "./KanbanBoard.css";

const Task = ({ task }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id: task.id, status: task.status },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <Card ref={drag} className="task-card" style={{ opacity: isDragging ? 0.5 : 1 }}>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2">{task.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default Task;