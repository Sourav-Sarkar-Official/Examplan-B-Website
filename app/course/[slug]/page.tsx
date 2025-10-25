import CourseDetail from "@/components/course-detail"

export default async function CourseDetailPage({
  params,
}: {
  params: { slug: string | Promise<string> }
}) {
  // Next 15+ requires awaiting params if they may be async proxies in some routing modes
  const slug = await params.slug
  return <CourseDetail slug={slug} />
}
