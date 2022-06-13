import React from "react";

export default function User() {
  const [field, setField] = React.useState({
    stationName: "",
    stationAddress: "",
    city: "",
    lattitude: "",
    longitude: "",
    price: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setField((prevField) => ({
      ...prevField,
      [name]: value,
    }));
  }
  return (
    <main>
      <div className="parent-form">
        <div className="form">
          <input
            type="text"
            placeholder="Enter station name"
            className="station-field"
            name="stationName"
            value={field.stationName}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Station address"
            className="address-field"
            name="stationAddress"
            value={field.stationAddress}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter city"
            className="city-name"
            name="city"
            value={field.city}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter Lattitude"
            className="lattitude"
            name="lattitude"
            value={field.lattitude}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Enter Longitude"
            className="Longitude"
            name="longitude"
            value={field.longitude}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Enter price"
            className="price-field"
            name="price"
            value={field.price}
            onChange={handleChange}
          />
        </div>
      </div>
    </main>
  );
}
