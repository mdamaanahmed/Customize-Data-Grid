import * as React from "react";
import { useMemo } from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { DragIndicator } from "@mui/icons-material";

const CustomizeDataGrid = (props) => {
  const { columns, dragableRowsIcon = false, ...rest } = props;

  const handleColumns = useMemo(() => {
    if (dragableRowsIcon)
      return [
        {
          headerName: "",
          field: "customDragIcon",
          width: 10,
          sortable: false,
          filterable: false,
          hideable: false,
          renderCell: () => (
            <DragIndicator fontSize="small" sx={{ cursor: "grab" }} />
          ),
        },
        ...columns,
      ];
    else return columns;
  }, [dragableRowsIcon]);

  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <DataGrid {...rest} columns={handleColumns} />
    </Box>
  );
};

export { CustomizeDataGrid };
