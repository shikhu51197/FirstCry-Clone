import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUsers } from "../Redux/MyAccount/action";

const MyAccount = () => {
  let dispatch = useDispatch();
  const UserData = useSelector((state) => state.myProfileData.UserData);
  console.log("UserData", UserData);
  const [userChild, setUserChild] = useState({
    childName: "",
    childDob: "",
    childGender: "",
    childWeight: "",
    childHeight: "",
  });
  const { childName, childDob, childGender, childWeight, childHeight } =
    userChild;
  useEffect(() => {
    dispatch(loadUsers());
  }, []);
  const handleDeleteChild = (id) => {
    if (window.confirm("Are you sure wanted to delete the users")) {
      dispatch(deleteUser(id));
      dispatch(loadUsers());
    }
  };
  return (
    <div className="myaccount-bg pb-4 pt-4">
      <div className="mx-auto col-md-9 col-11">
        <div className="account-card-shadow p-3">
          <div className="row">
            <div className="col-md-3 col-12">
              <h1 className="fw-bold px-2 account-head">My Account</h1>
              <ul className="list-group list-group-flush mt-3">
                <li className="list-group-item font-desc">Personal Details</li>
                <li className="list-group-item font-desc">Contact Details</li>
                <li className="list-group-item font-desc">Child Details</li>
                <li className="list-group-item font-desc">My Address Book</li>
                <li className="list-group-item font-desc">Change Password</li>
                <li className="list-group-item font-desc">
                  Manage Subscription
                </li>
                <li className="list-group-item font-desc">Order History</li>
                <li className="list-group-item font-desc">Logout</li>
              </ul>
            </div>
            <div className="col-md-9 col-12">
              <h3 className="fw-bold account-sub-head">My Profile</h3>
              {UserData &&
                UserData.map((user) => (
                  <div className="card profile-card-shadow mt-3" key={user.id}>
                    <div className="p-4">
                      <div className="row">
                        <div className="col-6">
                          <div>
                            <h1 className="account-head fw-bold">
                              {user.name}
                            </h1>
                            <p>{user.occupation}</p>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="row">
                            <div className="col-6"></div>
                            <div className="col-6">
                              <i className="bi bi-pencil-square"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="">
                      <div className="card-header">
                        <div className="row">
                          <div className="col-10">My Contact</div>
                          <div className="col-2 text-end">
                            <i className="bi bi-pencil-square"></i>
                          </div>
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="row">
                          <div className="col-6">
                            <div className="mb-3 row">
                              <label
                                htmlFor="staticEmail"
                                className="col-sm-4 col-form-label"
                              >
                                Email:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="text"
                                  readOnly
                                  className="form-control-plaintext"
                                  id="staticEmail"
                                  value={user.email}
                                />
                              </div>
                            </div>
                            <div className="mb-3 row">
                              <label
                                htmlFor="inputPassword"
                                className="col-sm-4 col-form-label"
                              >
                                Mobile:
                              </label>
                              <div className="col-sm-8">
                                <input
                                  readOnly
                                  type="number"
                                  className="form-control-plaintext"
                                  value={user.mobile}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <h4>Your Mobile Number is Verified</h4>
                            <p className="font-desc mt-3">
                              By verifying your mobile number with us you can
                              now Shop'n'Earn Club Cash at our FirstCry.com
                              stores too! To earn Club Cash on store purchases,
                              simply provide your verified mobile number at the
                              time of billing.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="card-header">
                        <div className="row">
                          <div className="col-10">Child Details</div>
                          <div className="col-2 text-end"></div>
                        </div>
                      </div>
                      <div className="p-3">
                        <div
                          className="alert alert-warning font-alert"
                          role="alert"
                        >
                          Please enter your child details so that we can help in
                          choosing the best products for your child
                        </div>
                        {user.child.length == 0 ? (
                          <div className="row">
                            <div className="col-8">
                              <div className="mb-3 row">
                                <label
                                  htmlFor="nameField"
                                  className="col-sm-4 col-form-label"
                                >
                                  Name
                                </label>
                                <div className="col-sm-8">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="nameField"
                                    value={childName}
                                  />
                                </div>
                              </div>
                              <div className="mb-3 row">
                                <label
                                  htmlFor="DobField"
                                  className="col-sm-4 col-form-label"
                                >
                                  Date Of Birth
                                </label>
                                <div className="col-sm-8">
                                  <input
                                    type="date"
                                    className="form-control"
                                    id="DobField"
                                    value={childDob}
                                  />
                                </div>
                              </div>
                              <div className="mb-3 row">
                                <label
                                  htmlFor="genderField"
                                  className="col-sm-4 col-form-label"
                                >
                                  Gender
                                </label>
                                <div className="col-sm-8">
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="inlineRadio1"
                                      value="option1"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="inlineRadio1"
                                    >
                                      Boy
                                    </label>
                                  </div>
                                  <div className="form-check form-check-inline">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="inlineRadioOptions"
                                      id="inlineRadio2"
                                      value="option2"
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="inlineRadio2"
                                    >
                                      Girl
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="mb-3 row">
                                <div className="col-6">
                                  <div className="row">
                                    <label
                                      htmlFor="DobField"
                                      className="col-sm-4 col-form-label"
                                    >
                                      Weight
                                    </label>
                                    <div className="col-sm-8">
                                      <div className="input-group mb-3">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder=""
                                          aria-label=""
                                          aria-describedby="basic-addon2"
                                          value={childWeight}
                                        />
                                        <span
                                          className="input-group-text"
                                          id="basic-addon2"
                                        >
                                          Kg
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-6">
                                  <div className="row">
                                    <label
                                      htmlFor="DobField"
                                      className="col-sm-4 col-form-label"
                                    >
                                      Height
                                    </label>
                                    <div className="col-sm-8">
                                      <div className="input-group mb-3">
                                        <input
                                          type="text"
                                          className="form-control"
                                          placeholder=""
                                          aria-label=""
                                          aria-describedby="basic-addon2"
                                          value={childHeight}
                                        />
                                        <span
                                          className="input-group-text"
                                          id="basic-addon2"
                                        >
                                          cm
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="text-center">
                                <button className="btn btn-warning btn-md pl-2 pr-2">
                                  SAVE
                                </button>
                              </div>
                            </div>
                            <div className="col-4"></div>
                          </div>
                        ) : (
                          <div className="">
                            {user.child.map((item) => {
                              return (
                                <div
                                  className="row mb-2 border border-warning p-2 m-2"
                                  key={user.id}
                                >
                                  <div className="col-8">
                                    <b>{item.name}</b>
                                    <div className="mb-2 row">
                                      <label className="col-sm-4 col-form-label">
                                        Date of Birth
                                      </label>
                                      <div className="col-sm-8">{item.dob}</div>
                                    </div>
                                    <div className="mb-2 row">
                                      <label className="col-sm-4 col-form-label">
                                        Gender
                                      </label>
                                      <div className="col-sm-8">
                                        {item.Gender}
                                      </div>
                                    </div>
                                    <div className="mb-2 row">
                                      <label className="col-sm-4 col-form-label">
                                        Weigth
                                      </label>
                                      <div className="col-sm-8">
                                        {item.Weight} kg
                                      </div>
                                    </div>
                                    <div className="mb-2 row">
                                      <label className="col-sm-4 col-form-label">
                                        Height
                                      </label>
                                      <div className="col-sm-8">
                                        {item.Height} cm
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-4">
                                    <img
                                      src={item.imageUrl}
                                      alt={item.name}
                                      style={{ height: "120px" }}
                                    />
                                    <span className="mt-3">
                                      {" "}
                                      <i className="bi bi-pencil-square"></i>
                                    </span>
                                    <span>
                                      {" "}
                                      <i
                                        className="bi bi-trash"
                                        onClick={() => handleDeleteChild()}
                                      ></i>
                                    </span>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="">
                      <div className="card-header">
                        <div className="row">
                          <div className="col-10">My Address Book</div>
                          <div className="col-2 text-end"></div>
                        </div>
                      </div>
                      <div className="p-3">
                        <div
                          className="alert alert-warning font-alert"
                          role="alert"
                        >
                          Add an address for delivery in your address book and
                          make checkout faster
                        </div>
                        {user.address.length == 0 ? (
                          <div className="row">
                            <div className="col-8">
                              <div className="mb-3 row">
                                <label
                                  htmlFor="AdressnameField"
                                  className="col-sm-4 col-form-label"
                                >
                                  Name
                                </label>
                                <div className="col-sm-8">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="AdressnameField"
                                    placeholder="Name"
                                  />
                                </div>
                              </div>
                              <div className="mb-3 row">
                                <label
                                  htmlFor="FlatField"
                                  className="col-sm-4 col-form-label"
                                >
                                  Flat/House No./ Building :
                                </label>
                                <div className="col-sm-8">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="FlatField"
                                    placeholder="Flat/House No./ Building"
                                  />
                                </div>
                              </div>
                              <div className="mb-3 row">
                                <label
                                  htmlFor="StreetField"
                                  className="col-sm-4 col-form-label"
                                >
                                  Street Address / Colony :
                                </label>
                                <div className="col-sm-8">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="StreetField"
                                    placeholder="Street Address / Colony"
                                  />
                                </div>
                              </div>
                              <div className="mb-3 row">
                                <label
                                  htmlFor="LandMarkField"
                                  className="col-sm-4 col-form-label"
                                >
                                  Landmark (Optional):
                                </label>
                                <div className="col-sm-8">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="LandMarkField"
                                    placeholder="Landmark"
                                  />
                                </div>
                              </div>
                              <div className="mb-3 row">
                                <label
                                  htmlFor="PincodeField"
                                  className="col-sm-4 col-form-label"
                                >
                                  PinCode
                                </label>
                                <div className="col-sm-8">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="PincodeField"
                                    placeholder="PinCode"
                                  />
                                </div>
                              </div>
                              <div className="mb-3 row">
                                <label
                                  htmlFor="CityField"
                                  className="col-sm-4 col-form-label"
                                >
                                  City:
                                </label>
                                <div className="col-sm-8">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="CityField"
                                    placeholder="City Name"
                                  />
                                </div>
                              </div>
                              <div className="mb-3 row">
                                <label
                                  htmlFor="StateField"
                                  className="col-sm-4 col-form-label"
                                >
                                  State:
                                </label>
                                <div className="col-sm-8">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="StateField"
                                    placeholder="State Name"
                                  />
                                </div>
                              </div>
                              <div className="mb-3 row">
                                <label
                                  htmlFor="CountryField"
                                  className="col-sm-4 col-form-label"
                                >
                                  Country:
                                </label>
                                <div className="col-sm-8">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="CountryField"
                                    placeholder="Country Name"
                                  />
                                </div>
                              </div>
                              <div className="mb-3 row">
                                <label
                                  htmlFor="MobileField"
                                  className="col-sm-4 col-form-label"
                                >
                                  Mobile:
                                </label>
                                <div className="col-sm-8">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="MobileField"
                                    placeholder="Mobile Number"
                                  />
                                </div>
                              </div>
                              <div className="text-center">
                                <button className="btn btn-warning btn-md pl-2 pr-2">
                                  SAVE
                                </button>
                                <button className="btn btn-secondary btn-md pl-2 pr-2 mx-2">
                                  CANCEL
                                </button>
                              </div>
                            </div>
                            <div className="col-4"></div>
                          </div>
                        ) : (
                          <>
                            <div key={user.id}>
                              <h2 className="fw-bold mb-2">My Saved Address</h2>
                              <div className="row">
                                {user.address.map((add) => {
                                  return (
                                    <div className="col-5 border border-warning p-2 m-2">
                                      <p>Name: {add.name}</p>
                                      <p>{add.flat}</p>
                                      <span>
                                        {add.street} {add.Landmark}
                                      </span>
                                      <p>Pin:{add.pincode}</p>
                                      <p>City:{add.city}</p>
                                      <p>91+{add.mobile}</p>
                                      <span className="mt-3">
                                        {" "}
                                        <i className="bi bi-pencil-square"></i>
                                      </span>
                                      <span>
                                        {" "}
                                        <i className="bi bi-trash"></i>
                                      </span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="">
                      <div className="card-header">
                        <div className="row">
                          <div className="col-10">Change Password</div>
                          <div className="col-2 text-end"></div>
                        </div>
                      </div>
                      <div className="p-3">
                        <div
                          className="alert alert-warning font-alert"
                          role="alert"
                        >
                          Note:Password must be at least 8 characters long with
                          1 Uppercase, 1 Lowercase & 1 Numeric character
                        </div>
                        <div className="row">
                          <div className="col-8">
                            <div className="mb-3 row">
                              <label
                                htmlFor="currentPassField"
                                className="col-sm-4 col-form-label"
                              >
                                Current Password
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="currentPassField"
                                />
                              </div>
                            </div>
                            <div className="mb-3 row">
                              <label
                                htmlFor="newPassField"
                                className="col-sm-4 col-form-label"
                              >
                                New Password
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="newPassField"
                                />
                              </div>
                            </div>
                            <div className="mb-3 row">
                              <label
                                htmlFor="confirmPassField"
                                className="col-sm-4 col-form-label"
                              >
                                Confirm Password
                              </label>
                              <div className="col-sm-8">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="confirmPassField"
                                />
                              </div>
                            </div>
                            <div className="text-center">
                              <button className="btn btn-warning btn-md pl-2 pr-2">
                                SAVE
                              </button>
                            </div>
                          </div>
                          <div className="col-4"></div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <div className="card-header">
                        <div className="row">
                          <div className="col-10">My Subscription</div>
                          <div className="col-2 text-end"></div>
                        </div>
                      </div>
                      <div className="p-3">
                        <div className="">
                          <div className="form-check form-switch">
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckDefault"
                            >
                              Receive our Top Offer Details Via Email
                            </label>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                            />
                          </div>
                          <div className="form-check form-switch">
                            <label
                              className="form-check-label"
                              htmlFor="flexSwitchCheckChecked"
                            >
                              Receive Top Deals Via Sms
                            </label>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckChecked"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
