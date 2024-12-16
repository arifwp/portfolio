import Link from "next/link";
import { bottomNavigationList } from "../constants/bottomNavigation";

export default function BottomNavigation() {
  return (
    <div className="w-full mx-auto max-w-calc-24 md:max-w-lg p-2 bg-white rounded-neo flex flex-row gap-4 fixed bottom-4 left-0 right-0 z-10 overflow-x-scroll hide-scrollbar">
      {bottomNavigationList.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          className="w-full p-2 bg-hardOrange font-medium rounded-neo flex flex-1 shrink-0 whitespace-nowrap text-black justify-center items-center rounded-md md:rounded-lg"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
