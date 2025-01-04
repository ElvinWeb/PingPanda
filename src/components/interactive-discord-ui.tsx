import { DiscordMessage } from "./discord-messages"
import { MaxWidthWrapper } from "./max-width-wrapper"
import { MockDiscordUI } from "./mock-discord-ui"
import { AnimatedList } from "./ui/animated-list"

export const InteractiveDiscordUI = () => {
  return (
    <section className="relative bg-brand-25 pb-4">
      <div className="absolute inset-x-0 bottom-24 top-24 bg-brand-700" />
      <div className="relative mx-auto">
        <MaxWidthWrapper className="relative">
          <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <MockDiscordUI>
              <AnimatedList>
                <DiscordMessage
                  avatarSrc="/brand-asset-profile-picture.png"
                  avatarAlt="PingPanda Avatar"
                  username="PingPanda"
                  timestamp="Today at 12:35PM"
                  badgeText="SignUp"
                  badgeColor="#43b581"
                  title="👤 New user signed up"
                  content={{
                    name: "Mateo Ortiz",
                    email: "m.ortiz19@gmail.com",
                  }}
                />
                <DiscordMessage
                  avatarSrc="/brand-asset-profile-picture.png"
                  avatarAlt="PingPanda Avatar"
                  username="PingPanda"
                  timestamp="Today at 12:35PM"
                  badgeText="Revenue"
                  badgeColor="#faa61a"
                  title="💰 Payment received"
                  content={{
                    amount: "$49.00",
                    email: "zoe.martinez2001@email.com",
                    plan: "PRO",
                  }}
                />
                <DiscordMessage
                  avatarSrc="/brand-asset-profile-picture.png"
                  avatarAlt="PingPanda Avatar"
                  username="PingPanda"
                  timestamp="Today at 5:11AM"
                  badgeText="Milestone"
                  badgeColor="#5865f2"
                  title="🚀 Revenue Milestone Achieved"
                  content={{
                    recurringRevenue: "$5.000 USD",
                    growth: "+8.2%",
                  }}
                />
              </AnimatedList>
            </MockDiscordUI>
          </div>
        </MaxWidthWrapper>
      </div>
    </section>
  )
}

export default InteractiveDiscordUI
