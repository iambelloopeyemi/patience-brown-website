export default function CallToActionForm(): JSX.Element {
  const services: string[] = [
    "Ghostwriting services",
    "Book coaching services",
    "Finding clarity to get started",
    "Pricing",
    "Other (describe below)",
  ];
  return (
    <div>
      <form action="">
        <ul className="mb-5">
          <span className="block font-bold text-[16px] leading-[21px] mb-1">
            I&apos;d like more information about:
          </span>
          {services.map((service, index: number) => (
            <li key={index} className="mb-2">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id={service}
                  className="block w-[14px] h-[14px]"
                />
                <label
                  htmlFor={service}
                  className="block text-[16px] leading-[21px]"
                >
                  {service}
                </label>
              </div>
            </li>
          ))}
        </ul>
        <div className="mb-[20px]">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name
            </label>
            <div className="flex items-center gap-5">
              <div>
                <div className="border w-[160px] h-[38px] px-[10px] py-[6px] flex justify-center items-center mb-[2px]">
                  <input
                    type="text"
                    id="name"
                    className="w-full h-full outline-none text-jet text-[16px] leading-[21px]"
                  />
                </div>
                <span className="block text-[13px] leading-[17px]">First</span>
              </div>
              <div>
                <div className="border w-[160px] h-[38px] px-[10px] py-[6px] flex justify-center items-center mb-[2px]">
                  <input
                    type="text"
                    className="w-full h-full outline-none text-jet text-[16px] leading-[21px]"
                  />
                </div>
                <span className="block text-[13px] leading-[17px]">Last</span>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <div className="border w-[340px] h-[38px] px-[10px] py-[6px] flex justify-center items-center">
              <input
                type="email"
                id="name"
                className="w-full h-full outline-none text-jet text-[16px] leading-[21px]"
              />
            </div>
          </div>
          <div>
            <label htmlFor="messageOrComment" className="block mb-1">
              Comment or Message
            </label>
            <div className="border w-[567px] h-[120px] px-[10px] py-[6px] flex justify-center items-center">
              <textarea
                name="messageOrComment"
                id="messageOrComment"
                className="w-full h-full outline-none text-jet text-[16px] leading-[21px]"
              />
            </div>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-platinum px-[15px] py-[10px] hover:scale-105 ease-in-out"
          >
            <span className="text-jet text-[22px]">Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
}
