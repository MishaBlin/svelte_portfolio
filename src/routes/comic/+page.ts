interface Comic {
	month: number;
	num: number;
	link: string;
	year: number;
	news: string;
	safe_title: string;
	transcript: string;
	alt: string;
	img: string;
	title: string;
	day: number;
}

export const load = async ({ fetch }: { fetch: typeof window.fetch }) => {
	const responseId: Response = await fetch(
		'https://fwd.innopolis.university/api/hw2?email=mi.kalinin@innopolis.university'
	);

	const id = await responseId.json();
	console.log(id);
	const responseImage: Response = await fetch(
		'https://fwd.innopolis.university/api/comic?id=' + id
	);

	const dataImage = (await responseImage.json()) as Comic;

	return {
		dataImage
	};
};
