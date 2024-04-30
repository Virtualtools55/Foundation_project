import Whatwedogallary from "../secondcomponents/whatwedogallary";

export default function Whatwedo(){

    return(

        <>
         <div class="max-w-screen-3xl mx-auto p-2 sm:p-10 md:p-16">

<div class="rounded overflow-hidden flex flex-col max-w-3xl mx-auto">

    <a href="#">
        <img class="w-full" src="https://images.pexels.com/photos/5120892/pexels-photo-5120892.jpeg?auto=compress&amp;cs=tinysrgb&amp;fit=crop&amp;h=625.0&amp;sharp=10&amp;w=1000" alt="Sunset in the mountains"/>
    </a>
    <div class="relative -mt-16 px-10 pt-5 pb-16 bg-white m-10">
        <a href="#"
            class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">The
            Best Activewear from the Nordstrom Anniversary Sale</a>
        <p class="text-gray-500 text-sm">
            Today, I’m covering one of my favorite parts of the Nordstrom Anniversary Sale: the activewear!
        </p>
        <p class="mt-5 text-gray-600 text-xs">
            By
            <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                Mehdi Ahmadi
            </a> | in <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                Cooking
            </a>, <a href="#" class="text-xs text-indigo-600 transition duration-500 ease-in-out">
                Recipe
            </a>
        </p>
    </div>

</div>

</div>
<Whatwedogallary/>
        </>
    )
}