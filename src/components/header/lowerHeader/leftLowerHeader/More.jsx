import moreIcon from "../../../../assets/more.svg";

const More = () => {
  return (
    <li className="flex group 3xl:hidden justify-between items-center gap-1 hover:cursor-pointer">
      <img src={moreIcon} alt="moreIcon" className="size-6" />
      <div
        className="absolute top-full -mt-4 p-4 bg-white rounded-lg shadow-lg border border-gray-200 z-30
        opacity-0 invisible transition-all duration-200 group-hover:opacity-100 group-hover:visible"
      >
        <ul className="flex flex-col gap-2">
          <li>
            <a
              href=""
              className="block py-2 px-3 text-gray-500 hover:text-[#008AE0]"
            >
              Коммерческая недвижимость
            </a>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default More;
