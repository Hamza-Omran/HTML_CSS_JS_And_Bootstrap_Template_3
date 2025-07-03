const resources = {
    en: { translation: await(await fetch('./json/en.json')).json() },
    ar: { translation: await(await fetch('./json/ar.json')).json() }
};

if(localStorage.getItem("lang")){
    i18next.init({
        lng: localStorage.getItem("lang"),
        debug: true,
        resources
    }).then(() => updateTexts());

    // Toggle RTL stylesheet
    const rtlStyle = document.getElementById("rtl-style");
    rtlStyle.disabled = localStorage.getItem("lang") !== 'ar';

    document.getElementById("langSelect").value = localStorage.getItem("lang");
}
else {
    i18next.init({
        lng: 'en',
        debug: true,
        resources
    }).then(() => updateTexts());
}

function updateTexts() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        el.innerHTML = i18next.t(el.dataset.i18n);
    });

     // Placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        el.setAttribute("placeholder", i18next.t(el.dataset.i18nPlaceholder));
    });

    // Values (e.g., for buttons)
    document.querySelectorAll("[data-i18n-value]").forEach(el => {
        el.setAttribute("value", i18next.t(el.dataset.i18nValue));
    });
}

window.changeLang = function (lang) {
        i18next.changeLanguage(lang).then(() => updateTexts());
        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';

        localStorage.setItem('lang', lang);

        // Toggle RTL stylesheet
        const rtlStyle = document.getElementById("rtl-style");
        rtlStyle.disabled = lang !== 'ar';
    };
