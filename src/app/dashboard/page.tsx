import { CreateEventCategoryModal } from "@/components/create-event-category-modal"
import { DashboardPage } from "@/components/dashboard-page"
import { DashboardPageContent } from "@/components/dashboard-page-content"
import { Button } from "@/components/ui/button"
import { db } from "@/db"
import { currentUser } from "@clerk/nextjs/server"
import { PlusIcon } from "lucide-react"
import { redirect } from "next/navigation"

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}

const Page = async ({ searchParams }: PageProps) => {
  const auth = await currentUser()

  if (!auth) {
    redirect("/sign-in")
  }

  const user = await db.user.findUnique({
    where: { externalId: auth.id },
  })

  if (!user) {
    return redirect("/welcome")
  }

  const intent = searchParams.intent

  const success = searchParams.success

  return (
    <DashboardPage cta={
      <CreateEventCategoryModal>
        <Button className="w-full sm:w-fit">
          <PlusIcon className="size-4 mr-2" />
          Add Category
        </Button>
      </CreateEventCategoryModal>
    } title="Dashboard">
      <DashboardPageContent />
    </DashboardPage>
  )
}

export default Page
