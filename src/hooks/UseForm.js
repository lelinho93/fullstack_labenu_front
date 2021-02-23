import useState from "react";

export const useform = (initialValues) => {
    const [form, setForm] = useState(initialValues)

    const onChange = (value, name) => {
        setForm({...form, [name]: value})
    }
    return {form, onChange}
}