import { ButtonHTMLAttributes, ComponentProps } from "react";

export function TextButton({
	className,
	...props
}: ComponentProps<'button'>) {
	return (
		<button className={"text-black-rose-800 rounded px-3 py-2" + className} {...props} />
	)
}