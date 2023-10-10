import { useTheme } from "next-themes"
import Link from "next/link"

const RedirectButton = ({btnText,link}) => {

  const {theme} = useTheme()

  return (
    <Link href={link}>
        <button className={`text-lg inline-block px-2 py-2 rounded-lg transition delay-300 backdrop-filter backdrop-blur-lg bg-opacity-60 cursor-pointer  border-[1.5px] ${ theme == "light" ? "border-gray-400" : "border-white-400"} overflow-hidden`}>{btnText}</button>
    </Link>
  )
}
export default RedirectButton