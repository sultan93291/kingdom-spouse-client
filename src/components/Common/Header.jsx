/* eslint-disable react/prop-types */


export default function Header({content, color}) {
  return (
    <h2  className="text-[55px] font-bold"
    style={{ color }}>{content}</h2>
  )
}
