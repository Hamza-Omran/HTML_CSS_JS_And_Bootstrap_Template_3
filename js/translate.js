const resources = {
    en: { translation: await(await fetch('./json/en.json')).json() },
    ar: { translation: await(await fetch('./json/ar.json')).json() }
};

const lang = localStorage.getItem("lang") || "en";

i18next.init({
    lng: lang,
    debug: true,
    resources
}).then(() => updateTexts());

// Toggle RTL stylesheet
const rtlStyle = document.getElementById("rtl-style");
rtlStyle.disabled = lang !== 'ar';

document.getElementById("langSelect").value = lang;

function updateTexts() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        el.innerHTML = i18next.t(el.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        el.setAttribute("placeholder", i18next.t(el.dataset.i18nPlaceholder));
    });

    document.querySelectorAll("[data-i18n-value]").forEach(el => {
        el.setAttribute("value", i18next.t(el.dataset.i18nValue));
    });
}

window.changeLang = function (lang) {
        i18next.changeLanguage(lang).then(() => updateTexts());
        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';

        localStorage.setItem('lang', lang);

        const rtlStyle = document.getElementById("rtl-style");
        rtlStyle.disabled = lang !== 'ar';
};
