import * as React from "react";
import { useRef } from "react";
import { GridCell } from "@mui/x-data-grid";

const useRowDragging = (rows, setRows, callback) => {
  const dragRef = useRef({});

  const handleDragStart = (e, params, draggedId) => {
    e.dataTransfer.effectAllowed = "move";
    dragRef.current.draggedId = draggedId;
    dragRef.current.params = params;
  };

  const handleDragOver = (e, id) => {
    e.preventDefault();
    e.dataTransfer.effectAllowed = "move";

    if (dragRef.current?.id === id) return;
    dragRef.current.id = id;

    const draggedIndex = rows.findIndex(
      (row) => row.id === dragRef.current.draggedId
    );
    const dragOverIndex = rows.findIndex((row) => row.id === id);
    const updatedRows = [...rows];
    const [movedRow] = updatedRows.splice(draggedIndex, 1);
    updatedRows.splice(dragOverIndex, 0, movedRow);
    dragRef.current.updatedRows = updatedRows;
    setRows(updatedRows);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    callback && callback(dragRef.current.updatedRows, dragRef.current.params);
    dragRef.current = {};
  };

  const DragableRows =
    (callback = null, colParams = {}) =>
    (params) => {
      if (callback) callback(params);
      return (
        <>
          {params?.field === "customDragIcon" ? (
            <GridCell
              style={{
                outline: "none",
              }}
              key={params?.rowId}
              id={params?.rowId}
              draggable
              onDragStart={(e) => handleDragStart(e, params, params?.rowId)}
              onDragOver={(e) => handleDragOver(e, params?.rowId)}
              onDrop={(e) => handleDrop(e)}
              {...params}
              {...colParams}
            />
          ) : (
            <GridCell
              key={params?.rowId}
              id={params?.rowId}
              {...params}
              {...colParams}
            />
          )}
        </>
      );
    };

  return {
    DragableRows,
  };
};

export { useRowDragging };
