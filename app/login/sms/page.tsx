import FormButton from "@/app/components/form-btn";
import FormInput from "@/app/components/form-input";

export default function SMSLogin() {
    return (
        <div className="flex flex-col gap-10 py-8 px-6">
            <div className="flex flex-col gap-2 *:font-medium">
                <h1 className="text-2xl ">SMSLogin안녕하세요</h1>
                <h2 className="text-xl">Verify</h2>
            </div>
            <form action="" className="flex flex-col gap-3">
                <FormInput
                    type="number"
                    placeholder="Phone Number"
                    required
                    errors={[]} 
                />
                <FormInput
                    type="number"
                    placeholder="Verification Code"
                    required
                    errors={[]} 
                />
                <FormButton loading={false} text="Verify" />
            </form>
        </div>
         
    )
}