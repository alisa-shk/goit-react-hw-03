import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { nanoid } from 'nanoid';
import s from "./ContactForm.module.css";


const ContactForm = ({ onAdd }) => {
    const initialValues = {
        name: "",
        number: "",
    };

    const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
});
    
    const handleSubmit = (values, actions) => {
        console.log(values);
        onAdd({
            id: nanoid,
            name: values.name,
            number: values.number,
        });
        actions.resetForm();
    };

    return (
        <Formik 
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={s.form}>
            <div className={s.formItem}>
                <label htmlFor="name">Name</label>
                <Field type="text" id="name" name="name" className={s.field} />
                <ErrorMessage name="name" component="div" className={s.error} />
            </div>
            <div className={s.formItem}>
                <label htmlFor="number">Number</label>
                <Field type="text" id="number" name="number" className={s.field} />
                <ErrorMessage name="number" component="div" className={s.error}  />
            </div>
            <button type="submit" className={s.btn} >Add contact</button>
        </Form>
    </Formik>
    )
};
export default ContactForm;