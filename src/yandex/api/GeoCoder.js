export default async function(provider = null, address) {
    return new Promise((resolve, reject) => {
        if (provider && address) {
            provider.geocode(address).then(
                (success) => {
                    const geoObject = success.geoObjects.get(0);

                    if (geoObject) {
                        resolve(geoObject);
                    } else {
                        reject(null);
                    }
                },
                () => reject(null));
        } else {
            reject(null);
        }
    });
}