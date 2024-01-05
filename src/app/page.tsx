import { getInventions } from '@/sanity/utils'
import Image from 'next/image'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from 'react'

export default async function Home() {

  const data = await getInventions()
  console.error("Here wee goo",data)

  return (
      <div>
        Hello world

        {
          data.map((invention: { name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | Iterable<ReactNode> | null | undefined }, i: Key | null | undefined) => (
            <div key={i} > 
              {invention.name}
            </div>
          ))
        }
      </div>
  )
}
