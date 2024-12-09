import ContactComponent from "@/components/ContactComponent"
import { Metadata } from "next"

export const metadata:Metadata = {
  title:"Contact us",
  description:"This is the contact page of TriomegaB official website."
}


const Contact = () => {
  return (
    <ContactComponent/>
  )
}

export default Contact