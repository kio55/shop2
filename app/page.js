import { Card } from "@/components/card/Card";
import prisma from '../lib/prisma';

export default async function Home() {
  const cardList = await prisma.card.findMany();


  return (
    <div>
      <h1>Магазин</h1>

      {
        cardList.map((item) => {
          return (<Card key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            id={item.id}
          />)
        })

      }
    </div>
  );
}
