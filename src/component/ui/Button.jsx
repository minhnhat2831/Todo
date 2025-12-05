export default function Button({children, ...props}){
    return(<>
        <button
            {...props}
            className="bg-indigo-400 mr-1 w-28 rounded-4xl h-8 cursor-pointer transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-green-400"
        >
            {children}
        </button>
    </>)
}