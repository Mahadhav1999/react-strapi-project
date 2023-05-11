import { useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Toolbar } from "primereact/toolbar";
import { InputText } from "primereact/inputtext";
import { Avatar } from "primereact/avatar";
import axios from "axios";

import { Link, useLoaderData } from "react-router-dom";

//to get the employee data
export const Loader = async () => {
  const res = await axios.get("api/employees?populate=*");
  console.log(res);
  return res.data.data;
};

const Employees = () => {
  const [selectedEmployees, setSelectedEmployees] = useState(null);
  const [globalFilter, setGlobalFilter] = useState(null);

  const dt = useRef(null);
  const employees = useLoaderData();
  console.log(employees);

  //to export the table data
  const exportCSV = () => {
    dt.current.exportCSV();
  };

  //defining the add and delete buttons as left bar
  const leftToolbarTemplate = () => {
    return (
      <div className="flex flex-wrap gap-2">
        <Link to="create">
          <Button
            label="New"
            outlined
            icon="pi pi-plus"
            severity="secondary"
            tooltip="Add New"
            tooltipOptions={{ position: "bottom" }}
          />
        </Link>
        <Button
          label="Delete"
          icon="pi pi-trash"
          severity="danger"
          outlined
          //   onClick={confirmDeleteSelected}
          disabled={!selectedEmployees || !selectedEmployees.length}
        />
      </div>
    );
  };

  const rightToolbarTemplate = () => {
    return (
      <Button
        label="Export"
        icon="pi pi-upload"
        outlined
        className="p-button-help"
        onClick={exportCSV}
        tooltip="Export"
        tooltipOptions={{ position: "bottom" }}
      />
    );
  };

  const actionBodyTemplate = () => {
    return (
      <>
        <Button
          icon="pi pi-eye"
          severity="info"
          className="mr-2"
          tooltip="View"
          tooltipOptions={{ position: "top" }}
          //    onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-pencil"
          className="mr-2"
          severity="warning"
          tooltip="Edit"
          tooltipOptions={{ position: "top" }}
          //    onClick={() => editProduct(rowData)}
        />
        <Button
          icon="pi pi-trash"
          severity="danger"
          tooltip="Delete"
          tooltipOptions={{ position: "top" }}
          //    onClick={() => confirmDeleteProduct(rowData)}
        />
      </>
    );
  };

  const imageBodyTemplate = ({ attributes }) => {
    return (
      <Avatar
        image={`${axios.defaults.baseURL}${attributes.Image.data.attributes.url}`}
        alt={attributes.Image.data.attributes.name}
        size="large"
        shape="circle"
        // className="shadow-2 border-round"
        style={{ width: "48px", height: "51px" }}
      />
    );
  };

  //Defining the header
  const header = (
    <div className="flex flex-wrap gap-2 align-items-center justify-content-between">
      <h2 className="m-0">Manage Employees {employees?.length}</h2>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search..."
        />
      </span>
    </div>
  );

  return (
    <>
      <div>
        <div className="card">
          <Toolbar
            className="mb-4"
            left={leftToolbarTemplate}
            right={rightToolbarTemplate}
          ></Toolbar>

          <DataTable
            ref={dt}
            value={employees}
            selection={selectedEmployees}
            onSelectionChange={(e) => setSelectedEmployees(e.value)}
            dataKey="id"
            paginator
            rows={5}
            rowsPerPageOptions={[5, 10, 25]}
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"
            globalFilter={globalFilter}
            header={header}
          >
            <Column selectionMode="multiple" exportable={false}></Column>
            <Column
              field="id"
              header="Id"
              sortable
              style={{ minWidth: "5rem" }}
            ></Column>
            <Column
              field="attributes.createdAt"
              header="createdAt"
              sortable
              style={{ minWidth: "12rem" }}
            ></Column>
            <Column
              field="image"
              header="Image"
              sortable
              body={imageBodyTemplate}
            ></Column>
            <Column
              field="attributes.Name"
              header="Name"
              sortable
              style={{ minWidth: "8rem" }}
            ></Column>
            <Column
              field="attributes.Email"
              header="Email"
              sortable
              style={{ minWidth: "14rem" }}
            ></Column>
            <Column
              field="attributes.Mobile"
              header="Mobile"
              sortable
              style={{ minWidth: "8rem" }}
            ></Column>
            <Column
              field="attributes.Gender"
              header="Gender"
              sortable
              style={{ minWidth: "8rem" }}
            ></Column>
            <Column
              field="attributes.Course"
              header="Course"
              sortable
              style={{ minWidth: "9rem" }}
            ></Column>
            <Column
              field="attributes.Designation"
              header="Designation"
              sortable
              style={{ minWidth: "9rem" }}
            ></Column>
            <Column
              header="Actions"
              body={actionBodyTemplate}
              exportable={false}
              style={{ minWidth: "12rem" }}
            ></Column>
          </DataTable>
        </div>
      </div>
    </>
  );
};

export default Employees;
