import classNames from "classnames"

function Pill({ text, color }) {
  return (
    <div className={classNames("rounded-full", "shadow-lg", "px-6", "py-2", "inline-block", 
    "mb-2", "mr-2",{
      "bg-zinc-100": color === "zinc",
    })}>
      {text}
    </div>
  )
}

export default Pill