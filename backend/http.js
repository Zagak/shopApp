const api = 'https://641188ad6a69ae75451ff640.mockapi.io/';

export async function getItems() {
    try {
        const response = await fetch(api + 'items');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export async function getCurrencys() {
    try {
        const response = await fetch(api + 'pocket');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

async function setOwned({id}){
    await fetch(api+`items/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isOwned: true }),
    });
}

async function withdrawCurrency({id},amount,type){
    await fetch(api+`pocket/1`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [type]: amount }),
    });
}

async function setBuyDate({id}){
    await fetch(api+`items/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ buyedAt: new Date() }),
    });
}

export async function buyAnItem({id}){
    try {
        const response = await fetch(api + `items/${id}`);
        const data = await response.json();
        

        if(data.isOwned===true) return 'alreadyOwned';
        else {
            const currencys=await getCurrencys();
            const currencyType=(data.currency==='common' ? 'commonCurrency' : 'premiumCurrency');
            if(currencyType==='commonCurrency'&&currencys[0].commonCurrency<data.price) return 'tooExpensive';
            if(currencyType==='premiumCurrency'&&currencys[0].premiumCurrency<data.price) return 'tooExpensive';
            else{
                await setOwned({id});
                await withdrawCurrency({id},currencys[0].premiumCurrency-data.price,currencyType);
                await setBuyDate({id});
            }
        }

        return data;
    } catch (error) {
        console.error(error);
    }
}