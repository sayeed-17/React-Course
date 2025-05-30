import { CDN_URL } from "../../utils/constants";
const ItemsCategory=({items})=>{
    
    return (
        <div>
            {
                items.itemCards?.map(item=>(
                    <div key={item?.card?.info?.id} className="m-2 p-2 border-gray-200 border-b-2 shadow-lg text-left">
                        <div className="flex justify-between m-1 ">
                        <div className="flex flex-col ">
                        <div className="font-semibold">
                        {item?.card?.info?.name}
                        </div>
                        <div>
                           ₹ {item?.card?.info?.price?item?.card?.info?.price/100:item?.card?.info?.finalprice/100}
                        </div>
                        <div>
                        {item?.card?.info?.description}
                        </div>
                        </div>
                        <div className="w-40 h-32 relative flex items-center justify-center">
                        <img className="w-full h-full object-contain rounded-lg shadow-sky-200" src={CDN_URL+item?.card?.info?.imageId} alt="images"/>
                        <button className="absolute bottom-2 bg-black text-cyan-300 font-semibold right-3 cursor-pointer  transform px-2 py-0.5 -translate-x-1/4 rounded-md shadow-md hover:bg-white">Add +</button> 
                        </div>
                        </div>
                    </div>
                ))
            }
        </div>

)
}
export default ItemsCategory;