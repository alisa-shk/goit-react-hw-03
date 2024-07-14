import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { nanoid } from 'nanoid';


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
        <Formik initialValues={initialValues}>
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            <Form>
                <label>
                    <span>Name</span>
                    <Field type="text" id="name" name="name"></Field>
                    <ErrorMessage name="name" component="span"></ErrorMessage>
                </label>
                <label>
                    <span>Number</span>
                    <Field type="text" id="number" name="number"></Field>
                    <ErrorMessage name="number" component="span"></ErrorMessage>
                </label>
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    )
};
export default ContactForm;