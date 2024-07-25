import AppointmentForm from "@/components/forms/AppointmentForm"
import { getPatient, getUser } from "@/lib/actions/patient.actions"
import Image from "next/image"


const NewAppointment = async ({params : {userId}} : SearchParamProps) => {
  
    const patient = await getPatient(userId)

    return (
     <div className="flex h-screen max-h-screen">

    {/* TODO OTP VERIFICATION */}
    <section className="remove-scrollbar container">
      <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
        <Image
          src="/assets/icons/logo-full.svg"
          alt="patient"
          width={1000}
          height={1000}
          className="mb-12 h-10 w-fit"
        />

       <AppointmentForm 
            type="create"
            userId = {userId}
            patientId={patient.$id}
             />

       <p className="copyright py-12 mt-10">
            © 2024 CarePulse
          </p>
     </div>
     </section>

     <Image 
         src="/assets/images/appointment-img.png"
         width={1000}
         height={1000}
         alt="appointment"
         className="side-img max-w-[390px] bg-bottom"/>
       </div>
  )
}

export default NewAppointment