/* eslint-disable @typescript-eslint/no-unused-vars */
import { SetStateAction, useState, useContext, Fragment } from "react";
import { Disclosure, Menu, Transition, Switch } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Logo from "../../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/theme";
import { useTranslation } from "react-i18next";

const userNavigation = [
  { name: "Profile", href: "#" },
  { name: "Sign out", href: "/logout" },
];

const classNames = (...classes: string[]): string =>
  classes.filter(Boolean).join(" ");

const Appbar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [enabled, setEnabled] = useState(theme === "dark");
  const { pathname } = useLocation();

  const navigation = [
    { name: "Projects", href: "/account/projects", current: false },
    { name: "Members", href: "/account/members", current: false },
  ];
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);

    // throw new Error("An error occurred while changing the language");
  };

  const toggleTheme = () => {
    let newTheme = "";
    if (theme === "light") {
      newTheme = "dark";
    } else {
      newTheme = "light";
    }
    setEnabled(!enabled);
    setTheme(newTheme);
  };

  return (
    <>
      <Disclosure as="nav" className="border-b border-slate-200">
        {({ open }) => (
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img className="h-8" src={Logo} alt="Smarter Tasks" />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => {
                      const isCurrent = pathname.includes(item.href);

                      return (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            isCurrent
                              ? "bg-slate-50 text-blue-700"
                              : "text-slate-500 hover:text-blue-600",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={isCurrent ? "page" : undefined}
                        >
                          {t(item.name)}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <Switch
                    checked={currentLanguage === "es"}
                    onChange={() => {
                      changeLanguage(currentLanguage === "en" ? "es" : "en");
                    }}
                    className={`${
                      currentLanguage === "es" ? "bg-slate-400" : "bg-slate-700"
                    } relative inline-flex h-7 w-16 border-2 border-transparent rounded-full cursor-pointer transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <span
                      className={`${
                        currentLanguage === "es"
                          ? "translate-x-9"
                          : "translate-x-0"
                      } inline-block w-6 h-6 transform bg-white rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
                    />
                  </Switch>

                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="rounded-full bg-white p-1 text-gray-400 hover:text-blue-600">
                        <UserCircleIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                {t(item.name)}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                        <Menu as="div" className="relative ml-3">
                          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                            {currentLanguage === "en"
                              ? "English"
                              : currentLanguage === "es"
                              ? "Spanish"
                              : "German"}{" "}
                            {/* Add the third language label */}
                            <svg
                              className="-mr-1 ml-2 h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4A1 1 0 0110 12z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </Menu.Button>

                          <Menu.Items className="absolute right-0 z-10 w-40 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active ? "bg-gray-100" : ""
                                  } group flex rounded-md items-center w-full px-2 py-2 text-sm text-gray-900`}
                                  onClick={() => changeLanguage("en")}
                                >
                                  English
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active ? "bg-gray-100" : ""
                                  } group flex rounded-md items-center w-full px-2 py-2 text-sm text-gray-900`}
                                  onClick={() => changeLanguage("es")}
                                >
                                  Spanish
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  className={`${
                                    active ? "bg-gray-100" : ""
                                  } group flex rounded-md items-center w-full px-2 py-2 text-sm text-gray-900`}
                                  onClick={() => changeLanguage("gr")}
                                >
                                  German
                                </button>
                              )}
                            </Menu.Item>
                          </Menu.Items>
                        </Menu>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
        )}
      </Disclosure>
    </>
  );
};

export default Appbar;
