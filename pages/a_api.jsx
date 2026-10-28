import { useState } from "react";

export default function SimpleForm() {
  const [formData, setFormData] = useState({});
  const [apiSuccess, setApisuccess] = useState(false);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData({ ...formData, [fieldName]: fieldValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const BASEURL = "https://fakestoreapi.com/";

    const postApiCall = async (payload) => {
      try {
        const url = BASEURL + "/users";
        const option = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        };
        const response = await fetch(url, option);
        const responseData = await response.json();
        return responseData;
      } catch (error) {
        console.log("error===>", error);
      }
    };

    try {
      const payload = {
        id: 0,
        username: formData["canididate-name"],
        email: formData["canididate-email"],
        password: formData["canididate-name"],
      };
      const response = await postApiCall(payload);

      console.log("response===>", response);
    } catch (error) {
      console.error("Error:::", error);
    }
  };

  return (
    <>
      <div className="container m-3">
        <div className="h3 text-center text-primary">Register Form</div>
        <form onSubmit={handleSubmit}>
          <div>
            <lable className="form-label">Enter Your Name</lable>
            <input
              type="text"
              name="canididate-name"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div>
            <lable className="form-label">Enter Your Email</lable>
            <input
              type="text"
              name="canididate-email"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div>
            <lable className="form-label">Enter Your Phone</lable>
            <input
              type="text"
              name="canididate-Phone"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div>
            <input type="submit" value="Register" />
          </div>
        </form>
      </div>
    </>
  );
}
