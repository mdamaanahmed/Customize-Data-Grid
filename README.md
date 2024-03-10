
# Customize Data Grid 




Quickly Create Drag And Drop Tables With The Power Of Material UI Data Grid Table 🎉✌️
## Getting Started

Please follow the step-by-step guide below.
## Installation

Before installing `customize-data-grid` make sure you have already installed all Material Ui all `dependencies`:

```bash
  npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid 
  or
  yarn add @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid
```

Install `customize-data-grid` with `npm` or `yarn`

```bash
  npm i customize-data-grid
  or
  yarn add customize-data-grid
```
    
## Usage/Examples

Basic Usage:

```javascript
import React, { useState } from "react";
import { CustomizeDataGrid, useRowDragging } from "customize-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rowsData = [
  { id: 1, lastName: "Snow", firstName: "Jon" },
  { id: 2, lastName: "Lannister", firstName: "Cersei" },
  { id: 3, lastName: "Lannister", firstName: "Jaime" },
  { id: 4, lastName: "Stark", firstName: "Arya" },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys" },
];

const App = () => {
  const [rows, setRows] = useState(rowsData);
  const { DragableRows } = useRowDragging(rows, setRows);

  return (
    <>
      <CustomizeDataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        dragableRowsIcon
        slots={{
          cell: DragableRows(),
        }}
      />
    </>
  );
};

export default App;
```

Full Usage:

```javascript
import React, { useState } from "react";
import { CustomizeDataGrid, useRowDragging } from "customize-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rowsData = [
  { id: 1, lastName: "Snow", firstName: "Jon" },
  { id: 2, lastName: "Lannister", firstName: "Cersei" },
  { id: 3, lastName: "Lannister", firstName: "Jaime" },
  { id: 4, lastName: "Stark", firstName: "Arya" },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys" },
];

const App = () => {
  const [rows, setRows] = useState(rowsData);

  const apiCall = async (updatedRows, dragRow) => {
    try {
      // write your api or any custom logic here......
      console.log({ updatedRows, dragRow });
    } catch (err) {
      console.log(err, "------err");
    }
  };

  const { DragableRows } = useRowDragging(rows, setRows, apiCall);

  const callback = (colParams) => {
    console.log("colParams:", colParams);
    if (colParams?.hasFocus) {
      // custom logic here......
    }
  };

  return (
    <>
      <CustomizeDataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
        dragableRowsIcon
        slots={{
          cell: DragableRows(callback, {
            hasFocus: false,
            width: 120,
            //.....
          }),
        }}
      />
    </>
  );
};

export default App;
```


## API Reference

#### dragableRowsIcon

`CustomizeDataGrid` props

| Parameter | Type     | Default     | Description                       |
| :-------- | :------- | :------- | :-------------------------------- |
| `dragableRowsIcon`      | `boolean` |`false` | **Required**. for showing drag column with icon |

#### DragableRows(callback, colProps)

`CustomizeDataGrid` function use for drag and drop functionality

| Parameter | Type     | Default     | Description                       |
| :-------- | :------- | :------- | :-------------------------------- |
| `callback`      | `function` |`null` | **Optional**. for doing addtional functional with `colParams` provided by `Material Ui` |
`colProps`      | `object` |`{}` | **Optional**. for set the `colParams` props |

#### useRowDragging(rows, setRows, apiCall)

`CustomizeDataGrid` hook

| Parameter | Type     | Default     | Description                       |
| :-------- | :------- | :------- | :-------------------------------- |
| `rows`      | `array` |`any` | **Required**. render rows on the table. `useState` variable |
`setRows`      | `function` |`any` | **Required**. rows setter function. `useState` function |
`apiCall`      | `function` |`any` | **Optional**. for doing action when the dragging end






## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)


## License

[MIT](https://choosealicense.com/licenses/mit/)


## 🚀 About Me

I'm **Amaan Ansari (Aman Asif)**, a **Full Stack Developer**. As a full-stack developer, I have 2+ years of
experience. Among the technologies I am proficient in are **ReactJS** and **NodeJS**, as well as databases
such as **MongoDB** and **MySQL**. My experience comes from **managing projects**, working with **teams**, and
**handling associate developers** on multiple projects.


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/feed/update/urn:li:ugcPost:7134022007712604160/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/AmaanAnsar49424)

