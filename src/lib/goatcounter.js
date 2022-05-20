/**
 * @param {HTMLElement} elem
 * @param {{ click?: string, title?: string, referrer?: string }} [opts]
 */
export function goatCounter(elem, opts) {
    if(!('goatcounter' in window)) return;
    if (elem.dataset.goatcounterBound && elem.dataset.goatcounterBound !== 'false')
        return
    const counter = function() {
        // @ts-ignore
        window.goatcounter.count({
            event:    true,
            // @ts-ignore
            path:     (opts.click || elem.dataset.goatcounterClick || elem.name || elem.id || ''),
            title:    (opts.title || elem.dataset.goatcounterTitle || elem.title || (elem.innerHTML || '').substring(0, 200) || ''),
            referrer: (opts.referrer || elem.dataset.goatcounterReferrer || elem.dataset.goatcounterReferral || ''),
        })
    }
    elem.addEventListener("click", counter, false);
    elem.addEventListener("auxclick", counter, false);
    elem.dataset.goatcounterBound = 'true'
    return {
        destroy() {
            elem.removeEventListener("click", counter, false);
            elem.removeEventListener("auxclick", counter, false);
            elem.dataset.goatcounterBound = 'false'
        }
    }
}