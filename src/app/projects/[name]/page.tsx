export default function ProjectsNamePage({
	params: { name },
}: {
	params: { name: string };
}) {
	return <div>My Projects: {name}</div>;
}
