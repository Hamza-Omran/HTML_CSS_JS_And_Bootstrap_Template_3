const resources = {
    en: { translation: await(await fetch('../json/en.json')).json() },
    ar: { translation: await(await fetch('../json/ar.json')).json() }
};

i18next.init({
    lng: 'en',
    debug: true,
    resources
}).then(() => updateTexts());

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

        // Toggle RTL stylesheet
    const rtlStyle = document.getElementById("rtl-style");
    rtlStyle.disabled = lang !== 'ar';
    };