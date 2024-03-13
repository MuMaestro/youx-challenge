export default function Index() {
	return (
		<div className="w-full h-full flex justify-center items-center bg-black-rose-800">
			<div className="w-[400px] h-[300px] flex flex-col gap-4 bg-black-rose-50 px-4 py-5 rounded-md">
				<fieldset className="flex flex-col gap-1">
					<label className="text-black-rose-900">Usuário</label>
					<input type='username' autoComplete="false" className="transition-all block w-full rounded-md border-0 outline-none px-2 py-1.5 text-black-rose-950 ring-1 ring-inset ring-black-rose-800 placeholder:text-black-rose-800 focus:ring focus:ring-inset focus:ring-black-rose-800 text-sm leading-6" />
				</fieldset>
				<fieldset className="flex flex-col gap-1">
					<label className="text-black-rose-900">Senha</label>
					<input type='password' autoComplete="false" className="transition-all block w-full rounded-md border-0 outline-none px-2 py-1.5 text-black-rose-950 ring-1 ring-inset ring-black-rose-800 placeholder:text-black-rose-800 focus:ring focus:ring-inset focus:ring-black-rose-800 text-sm leading-6" />
				</fieldset>
				<div className="flex justify-end gap-4 mt-10">
					<button className="text-black-rose-800"> registrar </button>
					<button className="bg-black-rose-700 rounded px-3 py-2 text-black-rose-50">
						login
					</button>
				</div>
			</div>
		</div>
	)
}