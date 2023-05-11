import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import { Link, useNavigate } from "react-router-dom";

const MenubarDemo = () => {
  const navigate = useNavigate();
  const items = [
    {
      label: "Home",
      icon: "pi pi-fw pi-home",
      command: () => {
        navigate("/");
      },
    },
    {
      label: "Employee List",
      icon: "pi pi-fw pi-list",
      command : () => {navigate("list/employee");}
    },
    {
      label: "Name",
    },
  ];

  const start = (
    <Link to='/'>
      <img
        alt="logo"
        src="https://www.dealsdray.com/images/logo.png"
        height="40"
        className="mr-2 cursor-pointer"
      />
    </Link>
  );

  const end = (
    <Button
      label="Logout"
      icon="pi pi-power-off"
      className="mr-2 p-button-raised"
    />
  );

  return (
    <div>
      <div className="card">
        <Menubar model={items} start={start} end={end}/>
      </div>
    </div>
  );
};

export default MenubarDemo;