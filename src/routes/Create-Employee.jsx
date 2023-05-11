import { useState } from "react";
import { Dropdown } from "primereact/dropdown";





const CreateEmployee = () => {
  const [selectedDesignation, setselectedDesignation] = useState(null);
  const [selectedCourse, setselectedCourse] = useState(null);
  const [selectedGenders, setselectedGenders] = useState(null);


  const designation = [
    { name: "Hr" },
    { name: "Manager" },
    { name: "Sales" },
  ];

  const course = [
    { name: "MCA"},
    { name: "BCA"},
    { name: "BSC"}
  ];

  const gender = [ 
    { name: "Male"},
    { name: "Female"},
]


  return (
    <>
      <div className="px-4 py-8 md:px-6 lg:px-8">
        <div className="text-900 font-medium text-900 text-xl mb-3">
          <h3 style={{ marginLeft: "91px" }}>Create Employee</h3>
        </div>
        <div className="surface-card p-4 shadow-2 border-round lg:w-10 m-auto">
          <div className="grid formgrid p-fluid">
            <div className="field mb-4 col-6">
              <label htmlFor="name" className="font-medium text-900">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="Name"
                className="p-inputtext p-component"
                placeholder="Enter name"
              />
            </div>
            <div className="field mb-4 col-6">
              <label htmlFor="email" className="font-medium text-900">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="Email"
                className="p-inputtext p-component"
                placeholder="Enter email"
              />
            </div>
            <div className="field mb-4 col-6">
              <label htmlFor="mobile" className="font-medium text-900">
                Mobile
              </label>
              <input
                id="mobile"
                type="tel"
                name="Mobile"
                className="p-inputtext p-component"
                placeholder="Enter mobile"
              />
            </div>
            <div className="field mb-4 col-12 md:col-6 lg:col-6">
              <label htmlFor="avatar2" className="font-medium text-900">
                Image
              </label>
              <div className="flex align-items-center">
                <img
                  src="/demo/images/blocks/avatars/circle/avatar-f-4.png"
                  alt="image"
                  className="mr-4"
                />
                <div className="p-fileupload p-fileupload-basic p-component">
                  <label
                    className="p-button p-component p-button-plain p-button-outlined"
                    tabIndex={0}
                    icon="pi pi-check"
                  >
                    <svg
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="p-icon p-button-icon p-button-icon-left"
                      aria-hidden="true"
                    >
                      <g clipPath="url(#clip0_306_11939)">
                        <path
                          d="M7.67742 6.32258V0.677419C7.67742 0.497757 7.60605 0.325452 7.47901 0.198411C7.35197 0.0713707 7.17966 0 7 0C6.82034 0 6.64803 0.0713707 6.52099 0.198411C6.39395 0.325452 6.32258 0.497757 6.32258 0.677419V6.32258H0.677419C0.497757 6.32258 0.325452 6.39395 0.198411 6.52099C0.0713707 6.64803 0 6.82034 0 7C0 7.17966 0.0713707 7.35197 0.198411 7.47901C0.325452 7.60605 0.497757 7.67742 0.677419 7.67742H6.32258V13.3226C6.32492 13.5015 6.39704 13.6725 6.52358 13.799C6.65012 13.9255 6.82106 13.9977 7 14C7.17966 14 7.35197 13.9286 7.47901 13.8016C7.60605 13.6745 7.67742 13.5022 7.67742 13.3226V7.67742H13.3226C13.5022 7.67742 13.6745 7.60605 13.8016 7.47901C13.9286 7.35197 14 7.17966 14 7C13.9977 6.82106 13.9255 6.65012 13.799 6.52358C13.6725 6.39704 13.5015 6.32492 13.3226 6.32258H7.67742Z"
                          fill="currentColor"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_306_11939">
                          <rect width={14} height={14} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="p-button-label p-clickable">
                      <span
                        className="p-button-label p-clickable"
                      >
                        Upload Image
                      </span>
                    </span>
                    <input type="file" accept="image/*" hidden />
                  </label>
                </div>
              </div>
            </div>
            <div className="surface-border border-top-1 opacity-50 mb-3 col-12" />

            <div className="field mb-4 col-12 md:col-3 lg:col-4">
              <label htmlFor="course" className="font-medium text-900">
                Gender
              </label>
              <div className="p-dropdown p-component p-inputwrapper p-dropdown-clearable">
                <div className="p-hidden-accessible">
                  <input
                    id="country2"
                    type="text"
                    readOnly
                    aria-haspopup="listbox"
                  />
                </div>
                <Dropdown
                  value={selectedGenders}
                  onChange={(e) => setselectedGenders(e.value)}
                  options={gender}
                  optionLabel="name"
                  placeholder="Select a Course"
                  className="w-full"
                />
                {/* <div className="p-hidden-accessible p-dropdown-hidden-select">
                  <select tabIndex={-1} aria-hidden="true">
                    <option value selected>
                      Select a Course
                    </option>
                  </select>
                </div> */}
                {/* <span className="p-dropdown-label p-inputtext p-placeholder">
                  Select a Course
                </span> */}
              </div>
            </div>

            <div className="field mb-4 col-12 md:col-3 lg:col-4">
              <label htmlFor="course" className="font-medium text-900">
                Designation
              </label>
              <div className="p-dropdown p-component p-inputwrapper p-dropdown-clearable">
                <div className="p-hidden-accessible">
                  <input
                    id="country2"
                    type="text"
                    readOnly
                    aria-haspopup="listbox"
                  />
                </div>
                <Dropdown
                  value={selectedDesignation}
                  onChange={(e) => setselectedDesignation(e.value)}
                  options={designation}
                  optionLabel="name"
                  placeholder="Select a Course"
                  className="w-full"
                />
                {/* <div className="p-hidden-accessible p-dropdown-hidden-select">
                  <select tabIndex={-1} aria-hidden="true">
                    <option value selected>
                      Select a Course
                    </option>
                  </select>
                </div> */}
                {/* <span className="p-dropdown-label p-inputtext p-placeholder">
                  Select a Course
                </span> */}
              </div>
            </div>

            <div className="field mb-4 col-12 md:col-3 lg:col-4">
              <label htmlFor="course" className="font-medium text-900">
                Course
              </label>
              <div className="p-dropdown p-component p-inputwrapper p-dropdown-clearable">
                <div className="p-hidden-accessible">
                  <input
                    id="country2"
                    type="text"
                    readOnly
                    aria-haspopup="listbox"
                  />
                </div>
                <Dropdown
                  value={selectedCourse}
                  onChange={(e) => setselectedCourse(e.value)}
                  options={course}
                  optionLabel="name"
                  placeholder="Select a Course"
                  className="w-full"
                />
                {/* <div className="p-hidden-accessible p-dropdown-hidden-select">
                  <select tabIndex={-1} aria-hidden="true">
                    <option value selected>
                      Select a Course
                    </option>
                  </select>
                </div> */}
                {/* <span className="p-dropdown-label p-inputtext p-placeholder">
                  Select a Course
                </span> */}
              </div>
            </div>

            {/* <div className="field mb-4 col-12 md:col-4">
              <label htmlFor="course" className="font-medium text-900">
                Designation
              </label>
              <div className="p-dropdown p-component p-inputwrapper p-dropdown-clearable">
                <div className="p-hidden-accessible">
                  <input
                    id="country2"
                    type="text"
                    readOnly
                    aria-haspopup="listbox"
                  />
                </div>
                <div className="p-hidden-accessible p-dropdown-hidden-select">
                  <select tabIndex={-1} aria-hidden="true">
                    <option value selected>
                      Select a Designation
                    </option>
                  </select>
                </div>
                <span className="p-dropdown-label p-inputtext p-placeholder">
                  Select a Designation
                </span>
              </div>
            </div> */}
            <div className="surface-border border-top-1 opacity-50 mb-2 col-12" />
            <div className="col-12">
              <button
                aria-label="Save Changes"
                className="p-button p-component w-auto mt-3"
              >
                <span className="p-button-icon p-c p-button-icon-left pi pi-plus"></span>
                <span className="p-button-label p-c">Create Employee</span>
                <span
                  role="presentation"
                  className="p-ink"
                  style={{ height: "144.01px", width: "144.01px" }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateEmployee;
