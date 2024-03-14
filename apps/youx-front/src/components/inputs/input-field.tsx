import { ComponentProps, ReactNode, isValidElement } from 'react';
type InputFieldLabelProps = ComponentProps<'label'>

function InputFieldLabel({ className, ...props }: InputFieldLabelProps) {
	return <label className={'text-black-rose-900 ' + className} {...props} />
}

type InputFieldProps = {
	children: [label: ReactNode, input: ReactNode]
} & ComponentProps<'fieldset'>

function InputField({
	children: [label, input],
	className,
	...props
}: InputFieldProps) {
	const labelIsComponent = isValidElement(label) || Array.isArray(label);
	return (
		<fieldset className={"flex flex-col gap-1 " + className} {...props}>
			{
				labelIsComponent
					? label
					: <InputFieldLabel className="text-black-rose-900">{label}</InputFieldLabel>
			}
			{input}
		</fieldset>
	)
}

InputField.Label = InputFieldLabel;

export default InputField as Anatomical<typeof InputField, { Label: typeof InputFieldLabel }>
