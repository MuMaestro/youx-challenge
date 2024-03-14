import { ButtonHTMLAttributes, ComponentProps } from "react";

export function BasicButton({
	className,
	...props
}: ComponentProps<'button'>) {
	return (
		<button className={"bg-black-rose-700 rounded px-3 py-2 text-black-rose-50 " + className} {...props} />
	)
}