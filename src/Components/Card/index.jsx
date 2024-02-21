export const Card = ({picture,fullname,abstract}) => {
    return (
        <div className="border border-gray-500 rounded-lg p-4 flex flex-col items-center">
            <img src={picture} className="rounded-full w-[200px] h-[200px] object-cover" alt="" />
            <p className="py-2 px-4 text-xl">{fullname}</p>
            <p className="py-2 px-4 text-xl">{abstract}</p>
        </div>
    )
}