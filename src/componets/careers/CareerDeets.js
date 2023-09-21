import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDeets() {
  const { id } = useParams ()
  const career = useLoaderData()

  return (
    <div className='career-details' >
        <h2> Career details for {career.title}</h2>
        <p> Starting salary: {career.salary}</p>
        <p> location: {career.location}</p>
    </div>
  )
}

export const CareerDeetsLoader = async ({params}) => {
  const {id} = params
  const res = await fetch ("http://localhost:4000/careers/" + id)

  // checks if the career res is okay
  if(!res.ok){
    throw Error ("Could not find career")
  }

 return res.json()
}