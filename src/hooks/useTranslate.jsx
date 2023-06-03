function useTranslate() {

    const getLinkName = (name) => {
        let translatedName
        switch (name) {
            case 'code':
                translatedName = 'Kısayol Kodu'
                break;
            case 'short_link':
                translatedName = 'Kısa Link 1'
                break;
            case 'full_short_link':
                translatedName = 'Uzun Link 1'
                break;
            case 'short_link2':
                translatedName = 'Kısa Link 2'
                break;
            case 'full_short_link2':
                translatedName = 'Uzun Link 3'
                break;
            case 'short_link3':
                translatedName = 'Kısa Link 3'
                break;
            case 'full_short_link3':
                translatedName = 'Uzun Link 3'
                break;
            case 'share_link':
                translatedName = 'Kısa Paylaşım Linki'
                break;
            case 'full_share_link':
                translatedName = 'Uzun Paylaşım Linki'
                break;
            case 'original_link':
                translatedName = 'Gerçek Link'
                break;
            case 'copied_link':
                translatedName = 'Kopyalanan Link'
                break;
            default:
                break;
        }
        return translatedName
    }

    return { getLinkName }
}

export default useTranslate