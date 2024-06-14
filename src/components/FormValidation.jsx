import { Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

let initialValues = {
    name: "",
    age: "",
    email: "",
    street: "",
    city: "",
    friend: "",
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required."),
    email: Yup.string()
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format.")
        .required("Email is required."),
    street: Yup.string().required("Street is required."),
    city: Yup.string().required("City is required."),
    friend: Yup.string().required("Friend is required."),
    age: Yup.number("Age has to be a  number.").min(18, "Must be at least 18."),
});

const FormValidation = () => {
    const [modalVisibility, setModalVisibility] = useState(true);
    const submitForm = (values, { resetForm }) => {
        setModalVisibility(true);
        // alert("Form submitted successfully!!");
        resetForm();
    };

    return (
        <>
            {!modalVisibility ? (
                <div className="wrapper">
                    <h1>Form validation with Formik</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={submitForm}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleSubmit,
                            handleBlur,
                            isValid,
                            dirty,
                        }) => (
                            <Form onSubmit={handleSubmit}>
                                <div className="form_group">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter a name"
                                        value={values.name}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />
                                    {errors.name && touched.name && (
                                        <span>{errors.name}</span>
                                    )}
                                </div>
                                <div className="form_group">
                                    <input
                                        type="text"
                                        name="email"
                                        onBlur={handleBlur}
                                        placeholder="Enter your email"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && touched.email && (
                                        <span>{errors.email}</span>
                                    )}
                                </div>
                                <div className="form_group">
                                    <input
                                        type="number"
                                        name="age"
                                        onBlur={handleBlur}
                                        placeholder="Enter your age"
                                        value={values.age}
                                        onChange={handleChange}
                                    />
                                    {errors.age && touched.age && (
                                        <span>{errors.age}</span>
                                    )}
                                </div>
                                <div className="form_group">
                                    <input
                                        type="text"
                                        name="street"
                                        onBlur={handleBlur}
                                        placeholder="Enter your street"
                                        value={values.street}
                                        onChange={handleChange}
                                    />
                                    {errors.street && touched.street && (
                                        <span>{errors.street}</span>
                                    )}
                                </div>
                                <div className="form_group">
                                    <input
                                        type="text"
                                        name="city"
                                        onBlur={handleBlur}
                                        placeholder="Enter your city"
                                        value={values.city}
                                        onChange={handleChange}
                                    />
                                    {errors.city && touched.city && (
                                        <span>{errors.city}</span>
                                    )}
                                </div>
                                <div className="form_group">
                                    <input
                                        type="text"
                                        name="friend"
                                        placeholder="Enter a friend"
                                        value={values.friend}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />
                                    {errors.friend && touched.friend && (
                                        <span>{errors.friend}</span>
                                    )}
                                </div>
                                <button
                                    disabled={!(dirty && isValid)}
                                    type="submit"
                                >
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            ) : (
                <div className="modal_container">
                    <div className="modal_content">
                        <span>Form submitted successfully</span>
                        <button onClick={() => setModalVisibility(false)}>
                            close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default FormValidation;
