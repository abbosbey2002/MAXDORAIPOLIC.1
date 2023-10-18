<div className="bg-white">
    <div className="container mx-auto">
      <h1 className="py-6 ">Calculate ipolis</h1>
      <div className="grid grid-cols-12 gap-3">
        <div className=" border col-span-6">
          <div
            className="mt-6 h-auto max-w-full rounded-lg bg-white p-4"
            id="headlessui-radiogroup-:rf:"
            role="radiogroup"
            aria-labelledby="headlessui-label-:rg:"
          >
            <label
              className="heading-16 font-medium"
              id="headlessui-label-:rg:"
              role="none"
            >
              Polis turini tanlang
            </label>
            <div className="mt-6 bg-white" role="none">
              <div
                onClick={amountDrivers}
                className="last:mb-0 mb-4"
                id="headlessui-radiogroup-option-:rh:"
                role="radio"
                aria-checked="false"
                tabIndex={-1}
                data-headlessui-state=""
              >
                <div className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-[#DEE1E8]">
                  <div className="flex">
                    <div className="mt-1 h-[18px] w-[18px] rounded-full border border-[#C0C3CD]" />
                    <div className="ml-[10px]">
                      <h4 className="medium-16 -576:regular-14">
                        Cheklanmagan (VIP)
                      </h4>
                      <p className="regular-14 text-gray-primary" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                onClick={amountDrivers2}
                className="last:mb-0 mb-4"
                id="headlessui-radiogroup-option-:ri:"
                role="radio"
                aria-checked="true"
                tabIndex={0}
                data-headlessui-state="checked"
              >
                <div className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select">
                  <div className="flex">
                    <div className="mt-1 h-[18px] w-[18px] rounded-full border border-[6px] border-primary" />
                    <div className="ml-[10px]">
                      <h4 className="medium-16 -576:regular-14">
                        5 nafargacha
                      </h4>
                      <p className="regular-14 text-gray-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border col-span-6 flex gap-2">
          <div
            className="mt-4 rounded-lg bg-white p-4"
            id="headlessui-radiogroup-:rj:"
            role="radiogroup"
            aria-labelledby="headlessui-label-:rk:"
          >
            <label
              className="heading-16 font-medium"
              id="headlessui-label-:rk:"
              role="none"
            >
              Sug‘urtalash davri
            </label>
            <div className="mt-6 bg-white" role="none">
              <div
                className="mb-4"
                id="headlessui-radiogroup-option-:rm:"
                role="none"
              >
                {/* <div className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select"> */}
                <select
                  onChange={(e) => setPeriod(e.target.value)}
                  className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select"
                  name=""
                  id=""
                >
                  <option
                    className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select"
                    value="1"
                  >
                    12 oy
                  </option>
                  <option
                    className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select"
                    value="0.7"
                  >
                    6 oy
                  </option>
                  <option
                    className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select"
                    value="0.2"
                  >
                    20 kun
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div
            className="mt-4 rounded-lg bg-white p-4"
            id="headlessui-radiogroup-:rj:"
            role="radiogroup"
            aria-labelledby="headlessui-label-:rk:"
          >
            <label
              className="heading-16 font-medium"
              id="headlessui-label-:rk:"
              role="none"
            >
              Chegirma olish
            </label>
            <div className="mt-6 bg-white" role="none">
              <div
                className="mb-4"
                id="headlessui-radiogroup-option-:rm:"
                role="none"
              >
                {/* <div className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select"> */}
                <select
                  onChange={(e) => setSkidka(e.target.value)}
                  className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select"
                  name=""
                  id=""
                >
                  <option
                    className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select"
                    value="1"
                  >
                    nogiron
                  </option>
                  <option
                    className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select"
                    value="1"
                  >
                    soppasow
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div
            className="mt-4 border rounded-lg bg-white p-4"
            id="headlessui-radiogroup-:rj:"
            role="radiogroup"
            aria-labelledby="headlessui-label-:rk:"
          >
            <label
              className="heading-16 p-1 font-medium"
              id="headlessui-label-:rk:"
              role="none"
            >
              Pay
            </label>
            <div className="m-1 p-1 bg-gray-200 border " role="none">
              <div
                className="mb-4 flex justify-between"
                id="headlessui-radiogroup-option-:rm:"
                role="none"
              >
                <h2 className="text-start mx-2">Polis narxi</h2>
                <h3 className="mx-2 text-end text-slate-600">
                  {Math.round(totalAmount)}
                </h3>
              </div>
              <div
                className="mb-4 flex justify-between"
                id="headlessui-radiogroup-option-:rm:"
                role="none"
              >
                <h2 className="text-start mx-2">Sugurta</h2>
                <h3 className="mx-2 tex-end text-slate-600">
                  {sumInsured}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-8 border">
          <div
            className="mt-4 rounded-lg bg-white p-4"
            id="headlessui-radiogroup-:rj:"
            role="radiogroup"
            aria-labelledby="headlessui-label-:rk:"
          >
            <label
              className="heading-16 font-medium"
              id="headlessui-label-:rk:"
              role="none"
            >
              Sug`urta olish
            </label>
            <div className="mt-6 bg-white" role="none">
              <div
                className="mb-4"
                id="headlessui-radiogroup-option-:rm:"
                role="none"
              >
                {/* <div className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select"> */}
                <select
                  onChange={(e) => setcases(e.target.value)}
                  className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select"
                  name=""
                  id=""
                >
                  <option
                    className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select"
                    value="2"
                  >
                    Oldingi majburiy sug'urta shartnomasi amal qilish
                    davrida yuz bergan bitta sug'urta hodisasi
                  </option>
                  <option
                    className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select"
                    value="2.5"
                  >
                    Oldingi majburiy sug'urta shartnomasi amal qilish
                    davrida yuz bergan ikkita sug'urta hodisasi
                  </option>

                  <option
                    className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select"
                    value="3"
                  >
                    Oldingi majburiy sug'urta shartnomasi amal qilish
                    davrida yuz bergan uch va undan ko'p sug'urta hodisasi
                  </option>

                  <option
                    className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select"
                    value="1"
                  >
                    Birinchi marta, shuningdek oldingi majburiy sug'urta
                    shartnomasi amal qilish davrida sug'urta hodisalari
                    bo'lmasa
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 border">
          <div
            className="mt-6 rounded-lg bg-white p-4"
            id="headlessui-radiogroup-:rf:"
            role="radiogroup"
            aria-labelledby="headlessui-label-:rg:"
          >
            <label
              className="heading-16 font-medium"
              id="headlessui-label-:rg:"
              role="none"
            >
              Polis Sanasi tanlang
            </label>
            <div className="flex gap-2 mt-6 bg-white" role="none">
              <div
                className="last:mb-0 mb-4"
                id="headlessui-radiogroup-option-:rh:"
                role="radio"
                aria-checked="false"
                tabIndex={-1}
                data-headlessui-state=""
              >
                <div className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-[#DEE1E8]">
                  <div className="flex">
                    <div className="mt-1 h-[18px] w-[18px] rounded-full border border-[#C0C3CD]" />
                    <div className="ml-[10px]">
                      <h4 className="medium-16 -576:regular-14">
                        Boshlanish
                      </h4>
                      <input
                        onChange={(e) => setStartDate(e.target.value)}
                        type="date"
                        className="border-none outline-none"
                      />
                      <p className="regular-14 text-gray-primary" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="last:mb-0 mb-4"
                id="headlessui-radiogroup-option-:ri:"
                role="radio"
                aria-checked="true"
                tabIndex={0}
                data-headlessui-state="checked"
              >
                <div className="flex cursor-pointer items-center justify-between rounded-xl border bg-white p-4 border-2 border-primary shadow-select">
                  <div className="flex">
                    <div className="mt-1 h-[18px] w-[18px] rounded-full border border-[6px] border-primary" />
                    <div className="ml-[10px]">
                      <h4 className="medium-16 -576:regular-14">Tugashi</h4>
                      <input
                        onChange={(e) => setEndtDate(e.target.value)}
                        type="date"
                        className="border-none outline-none"
                      />
                      <p className="regular-14 text-gray-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-6 border p-3">
          <button
            onClick={calculateAmount}
            className="bg-red-700 px-7 py-3 text-white mx-5  rounded-2xl"
          >
            calculate
          </button>
          <button
            onClick={finish}
            className="bg-green-700 px-7 py-3 text-white  rounded-2xl"
          >
            Next
          </button>
        </div>
        {amountOfDrivers != 1 && (
          <div className="col-span-6 border p-3">
            <button
              data-popover-target="popover-user-profile"
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Drivers
            </button>
            <div className="absolute z-10 mx-3  inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-1 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
              <div className="p-3">
                <div className="grid grid-col2 gap-3 mb-2">
                  <h2>Passort data of driver</h2>
                  <div>
                    <label
                      htmlFor="setDriversSeria"
                      className="block mb-2 text-sm font-medium dark:text-white"
                    >
                      Seria
                    </label>
                    <input
                      onChange={(e) => setDriversSeria(e.target.value)}
                      type="text"
                      id="setDriversSeria"
                      className="bg-white uppercase border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="AC"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="setDriversNumber"
                      className="block mb-2 text-sm font-medium dark:text-white"
                    >
                      Nomer
                    </label>
                    <input
                      onChange={(e) => setDriversNumber(e.target.value)}
                      type="text"
                      id="setDriversNumber"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder="1110802"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="setDriverBirthdate"
                      className="block mb-2 text-sm font-medium dark:text-white"
                    >
                      birthdate
                    </label>
                    <input
                      onChange={(e) => setDriverBirthdate(e.target.value)}
                      type="date"
                      id="setDriverBirthdate"
                      className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                      placeholder=""
                      required
                    />
                  </div>
                  <div>
                    <button
                      onClick={addDrivers}
                      className="bg-green-700 px-7 py-3 w-full text-white  rounded-2xl"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>
              <div data-popper-arrow="" />
            </div>
          </div>
        )}{" "}
      </div>
    </div>
    <hr className="mt-96" /> {/* start style */}
    <div className="container mx-auto">
      <h3>Calculate osago</h3>
      <div className="">
        <div className="flex justify-around w-[50%] sm:flex-nowrap flex-wrap gap-4 mx-auto">
          <div className="m-2 sm:px-4 sm:py-2 md:px-6 md:py-4 bg-gray-100 border rounded-2xl">
            <h1>
              Bu text container Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Aperiam eius temporibus natus. Ratione
              possimus sed magnam ex error architecto facilis.
            </h1>
          </div>
          <div className="m-2 sm:px-4 sm:py-2 md:px-6 md:py-4 bg-gray-100 border rounded-2xl">
            <h1>
              Bu text container Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Aperiam eius temporibus natus. Ratione
              possimus sed magnam ex error architecto facilis.
            </h1>
          </div>
          <div className="m-2   sm:px-4 sm:py-2 md:px-6 md:py-4 bg-gray-100 border rounded-2xl">
            <div className="w-[200px]">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900"
              >
                Select an option
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>