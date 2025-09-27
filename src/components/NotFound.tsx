import GoBackButton from 'components/GoBackButton'

export default function NotFoundPage() {

  return (
    <aside className="flex flex-col gap-5 text-center">
      <h1 className="pt-5 text-3xl font-semibold tracking-tight first:mt-0 text-destructive">
        404 - Page Not Found
      </h1>
      <p className="text-destructive mb-10">
        Sorry, the page you are looking for does not exist.
      </p>
      <GoBackButton/> 
    </aside>
  )
}
