import prisma from '@/lib/prisma';

export async function generateStaticParams() {
    const cards = await prisma.card.findMany();
   
    return cards.map((card) => ({
      slug: card.id,
    }))
  }

export default async function DetailPage({ params }) {

    const slug = (await params).slug;

    const card = await prisma.card.findFirst({
        where: {
            id: slug
        }
    });

    return (
        <>
            <h1>Страница товара</h1>

            <h2>{card.name}</h2>
            <h2>{card.description}</h2>
            <h2>{card.price}</h2>
        </>
    );
}