import { LoginForm } from './components/LoginForm'
import { RegisterForm } from './components/SelfRegisterForm'
const Index = (ctx: { searchParams: { register: string }}) => {
	return (
		<div className="w-full h-full flex justify-center items-center bg-black-rose-800">
			{
				ctx.searchParams.register === 'true' ? <RegisterForm /> : <LoginForm />
			}
		</div>
	)
}
export default Index