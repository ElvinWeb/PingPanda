import InteractiveDiscordUI from "@/components/interactive-discord-ui"
import CustomerReviews from "@/components/customer-reviews"
import BenefitsList from "@/components/benefits-list"
import Hero from "@/components/hero"

const Page = () => {
  return (
    <>
      <Hero />
      <InteractiveDiscordUI />
      <BenefitsList />
      <CustomerReviews />
    </>
  )
}

export default Page
