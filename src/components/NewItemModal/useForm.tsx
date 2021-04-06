import React, { useState } from "react";

export const useForm = () => {
	const initialValues = {
		id: Date.now(),
		name: "",
		category: "",
		amount: 0,
		price: 0,
		image:
			"http://autosdutriomphe.fr/wp-content/uploads/2018/04/default-image.png",
		description: "",
	};

	const [values, setValues] = useState(initialValues);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setValues({
			...values,
			[name]: value,
		});
	};

	const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setValues(initialValues);
	};

	return { values, handleChange, handleSubmit };
};
