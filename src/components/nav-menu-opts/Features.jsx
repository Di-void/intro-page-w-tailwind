import { featureIcons } from "../../libs/featureIcons";

const Features = () => {
  return (
    <div className="invisible opacity-0 group-hover:opacity-100 pointer-events-none group-hover:visible group-hover:top-7 group-hover:pointer-events-auto transition-all duration-75 absolute top-11 left-[-80px] z-10 bg-white shadow-2xl p-6 rounded-xl">
      <ul className="grid grid-rows-4 gap-y-2">
        {featureIcons.map((item) => {
          return (
            <li
              key={item.id}
              className="capitalize flex place-items-center gap-x-5 text-medium-gray hover:outline-dotted hover:outline-2 hover:outline-medium-gray"
            >
              <span>{item.icon}</span>
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Features;
