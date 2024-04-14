import FormInput from "../components/form-input"
import FormButton from "../components/form-btn"
import SocialLogin from "../components/social-login"

export default function login() {
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl ">안녕하세요</h1>
                <h2 className="text-xl">Log in with email and password</h2>
            </div>
            <form action="" className="flex flex-col gap-3">
                <FormInput
                    type="text"
                    placeholder="email"
                    required
                    errors={[]} 
                />
                <FormInput
                    type="password"
                    placeholder="Password"
                    required
                    errors={[]} 
                />
                <FormButton loading={false} text="Create account" />
            </form>
            
            <SocialLogin/>
        </div>
         
    )
}