import { ForwardedRef, InputHTMLAttributes, forwardRef } from "react";

function TextInput({
	className,
	...props
}: InputHTMLAttributes<HTMLInputElement>, ref: ForwardedRef<HTMLInputElement>) {
	return (
		<input
			type="text"
			className={" w-full px-2 py-1.5 rounded-md border-0 outline-none ring-1 ring-inset focus:ring focus:ring-inset focus:ring-black-rose-800 ring-black-rose-800 text-black-rose-950 placeholder:text-black-rose-800 text-sm leading-6 transition-all " + className}
			ref={ref}
			{...props}
		/>
	)
}

const TextInputWithRef = forwardRef(TextInput);
TextInput.WithRef = TextInputWithRef;
export default TextInput as Anatomical<typeof TextInput, {
	WithRef: typeof TextInputWithRef
}>;