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
    console.log(id);
    console.log(amount);
    console.log(type);
    await fetch(api+`pocket/1`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ [type]: amount }),
      });
}

export async function buyAnItem({id}){
    try {
        const response = await fetch(api + `items/${id}`);
        const data = await response.json();
        console.log(data);

        if(data.isOwned===true) return 'isOwned';
        else {
            const currencys=await getCurrencys();
            const currencyType=(data.currency==='common' ? 'commonCurrency' : 'premiumCurrency');
            if((currencys[0].commonCurrency||currencys[0].premiumCurrency)<data.price) return 'tooExpensive';
            else{
                await setOwned({id});
                await withdrawCurrency({id},currencys[0].premiumCurrency-data.price,currencyType);
            }
        }

        return data;
    } catch (error) {
        console.error(error);
    }
}