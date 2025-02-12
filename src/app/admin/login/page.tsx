import Image from 'next/image';
import logo from "../../../components/logoDark.png"

const page = () => {
  return (
    <div>
        <div className="container flex flex-col items-center justify-center h-screen w-full">
            <Image src={logo} alt="logo" width={350} height={130} priority/>
            <div className='w-[500px] bg-white h-[250px] rounded-[20px] shadow-xl p-5'>
            <form className='mx-10'>
                <div className="text- font-bold text-center mb-5">
                    Admin Panel Login
                </div>
                <div className="mb-4 flex flex-row items-center justify-between" >
                    <label htmlFor="username" 
                           className="block text-gray-700 text-sm font-bold mb-2">
                        Username :
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        className="shadow border rounded w-60 py-2 px-3 text-gray-700 leading-none focus:outline-none "
                        placeholder="Enter username"
                    />
                </div>
                <div className="mb-6 flex items-center justify-between">
                    <label htmlFor="password" 
                           className="block text-gray-700 text-sm font-bold mb-2">
                        Password :
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="shadow border rounded w-60 py-2 px-3 text-gray-700 mb-1 leading-none focus:outline-none ml-1"
                        placeholder="Enter password"
                    />
                </div>
                <div className="flex float-right">
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-[var(--secondary)] to-[var(--primary)] text-white text-sm font-medium py-1 px-6 rounded-full focus:outline-none focus:shadow-outline"
                    >
                        LOGIN
                    </button>
                </div>
            </form>
            </div>
        </div>
    </div>
  )
}

export default page
