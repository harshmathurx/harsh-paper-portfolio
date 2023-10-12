import Image from "next/image"
import Link from "next/link"

const ReccoCard = ({reccoLink,imageSrc,title}) => {
  return (
    <Link href={reccoLink} target="_blank" className="m-3 hover:scale-105 transform transition duration-50">
        <Image alt={title} src={imageSrc} className="w-28 md:w-40 rounded-md" width={200} height={200} />
    </Link>
  )
}
export default ReccoCard