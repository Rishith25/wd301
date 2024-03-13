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
      currentLanguage === "es" ? "translate-x-9" : "translate-x-0"
    } inline-block w-6 h-6 transform bg-white rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
  />
</Switch>;
