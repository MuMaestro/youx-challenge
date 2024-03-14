'use client'
import { BasicButton } from '@/web-app/components/buttons/basic-button';
import { TextButton } from '@/web-app/components/buttons/text-button';
import InputField from '@/web-app/components/inputs/input-field';
import TextInput from '@/web-app/components/inputs/text-input';
import { AxiosAtom } from '@/web-app/libs/axios/axiosState';
import { zodResolver } from '@hookform/resolvers/zod';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useForm, type UseFormHandleSubmit } from 'react-hook-form';
import { z } from 'zod';
const registerSchema = z.object({
	username: z.string().min(3, 'Minimo de 3 caractes'),
	password: z.string().min(3, 'Minimo de 3 caractes')
})

type Schema = z.infer<typeof registerSchema>
export function RegisterForm({
	onInvalid, onSubmit
}: {
	onSubmit?: Parameters<UseFormHandleSubmit<Schema, undefined>>[0]
	onInvalid?: Parameters<UseFormHandleSubmit<Schema, undefined>>[1]
}) {
	const [axios] = useAtom(AxiosAtom);
	const pathname = usePathname();
	const { register, handleSubmit } = useForm<Schema>({
		resolver: zodResolver(registerSchema)
	})
	const submitHandler = handleSubmit(data => {
		console.log(data);
		axios.post('/api/profile/register', data)
	}, onInvalid)
	return (
		<form onSubmit={submitHandler} className="w-[400px] flex flex-col gap-4 bg-black-rose-50 px-4 py-5 rounded-md shadow-xl shadow-black-rose-950">
			<h1 className='text-black-rose-900 text-2xl font-medium'>Registrar</h1>
			<InputField>
				<InputField.Label>Usuário</InputField.Label>
				<TextInput.WithRef {...register('username')} type='username' autoComplete="false" />
			</InputField>
			<InputField>
				<InputField.Label>Senha</InputField.Label>
				<TextInput.WithRef {...register('password')} type='password' autoComplete="false" />
			</InputField>
			<div className="flex justify-end items-center gap-4 mt-10">
				<Link href={{ pathname, query: {} }} replace passHref>
					<TextButton type="button"> fazer login </TextButton>
				</Link>
				<BasicButton> registrar </BasicButton>
			</div>
		</form>
	)
}