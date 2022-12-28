import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined"
import SearchIcon from "@mui/icons-material/Search"
import EastIcon from "@mui/icons-material/East"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"
import hero from "../assets/heroimg.png"
import product1 from "../assets/product1.png"
import Pill from "../components/Pill"

function Home() {
  return (
    <div>
      <header className="mt-6">
        <section className="flex justify-between">
          <div>
            <h2 className="text-xs font-sans font-light">Welcome Back!</h2>
            <h1 className="text-sm font-medium">Samuel</h1>
          </div>

          <div className="shadow-lg rounded-full w-10 grid place-items-center">
            <ShoppingBagOutlinedIcon />
          </div>
        </section>

        <div className="relative mt-5 flex items-center text-gray-400 focus-within:text-gray-600">
          <SearchIcon className="w-5 h-5 absolute ml-3 " />
          <input
            type="text"
            className="bg-zinc-100 w-full rounded-full placeholder-gray-400 pl-10 py-3 text-sm focus:ring-gray-500 focus:ring-2"
            placeholder="What are you looking for..."
          />
        </div>
      </header>

      <section className="banner mt-4">
        <div className="bg-zinc-100 flex justify-between  rounded-2xl">
          <div className="p-4 flex flex-col items-start gap-4">
            <h1 className="text-sm font-base">Shop With us!</h1>
            <p className="text-xl font-bold">Get 20% off on your first order</p>
            <button>
              <span className="text-sm font-bold">
                Shop Now <EastIcon fontSize="small" />{" "}
              </span>
            </button>
          </div>
          <img src={hero} className="pt-2" alt="" />
        </div>
      </section>

      <section className="filter mt-4">
        <Pill text="All" />
        <Pill text="Shoes" color="zinc" />
        <Pill text="Jackets" color="zinc" />
        <Pill text="Jeans" color="zinc" />
        <Pill text="Skirt" color="zinc" />
      </section>

      <section className="products mt-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-zinc-100 rounded-2xl p-4 relative">
            <div>
              <div className="shadow-lg rounded-full w-10 grid place-items-center">
                <FavoriteBorderIcon />
              </div>
              <img src={product1} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
