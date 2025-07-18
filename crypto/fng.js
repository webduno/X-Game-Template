export const updatePublicSecretKey = async (hash, keys) => {
  const requestRes = await fetch('/api/auth', {
    method: 'POST',
    body: JSON.stringify({
      hash, keys
    })
  })
  if (requestRes.status > 300) {
    return
  }
  alert("Success!")
}
  
export const getFearNGreed = async () => {
  const requestRes = await fetch('https://api.alternative.me/fng/')
    if (requestRes.status > 300) {
    return
  }
  const parsedRes = await requestRes.json()
  return parsedRes
}
export async function getTotalMarketCap() {
  const apiUrl = 'https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest';

  try {
    const response = await fetch("https://webqub.com/api/market", {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    const totalMarketCap = data

    // console.log('Total Cryptocurrency Market Cap:', totalMarketCap);
    return totalMarketCap;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error;
  }
}
export const getTradeLogs = async (symbol) => {
  const requestRes = await fetch('/api/order/logs?symbol='+symbol)
    if (requestRes.status > 300) {
    return
  }
  const parsedRes = await requestRes.json()
  return parsedRes
}
export async function fetchLoginByHref(href) {
  try {
    const response = await fetch("/api/auth/login", { method: "POST",
      body: JSON.stringify({
        theSrc: href,
      }),
    })
    const jsonResponse = await response.json()
    if (jsonResponse.data == null) {
      return false
    }
    return jsonResponse.data
  } catch (error) {
    return false
  }
}

export async function fetchPutNews(dataPack) {  
  try {
    const localBackendRes = await fetch("/api/market/daily", {method:"POST", body:JSON.stringify(dataPack)})
    if (!localBackendRes) {
      return false
    }
  } catch (e) {
    console.error(e)
    return false
  }
  return true
}

export async function fetchPostDerivativeTrade(dataPack) {  
  
  try {
    const localBackendRes = await fetch("/api/order/place/derivative", {method:"POST", body:JSON.stringify(dataPack)})
    if (!localBackendRes) { return false }
  } catch (e) {
    console.warn("LOCAL BACKEND ERROR")
    console.error(e)
    return false
  }
  return true
}

export async function fetchMakeAgentOrder(dataPack) {  
  try {
    const localBackendRes = await fetch("/api/order/place", {method:"POST", body:JSON.stringify(dataPack)})
    if (!localBackendRes) { return false }
  } catch (e) {
    console.warn("LOCAL BACKEND ERROR")
    console.error(e)
    return false
  }
  return true
}

export async function fetchDeleteVirtualOrder(dataPack) {  
  try {
    const localBackendRes = await fetch("/api/order/limit", {method:"DELETE", body:JSON.stringify(dataPack)})
    if (!localBackendRes) { return false }
  } catch (e) {
    console.warn("LOCAL BACKEND ERROR")
    console.error(e)
    return {success:false,message:"Unknown"}
  }
  return true
}

export async function fetchPostVirtualOrder(dataPack) {    
  try {
    const localBackendRes = await fetch("/api/order/limit", {method:"POST", body:JSON.stringify(dataPack)})
    if (!localBackendRes) { return false }
  } catch (e) {
    console.warn("LOCAL BACKEND ERROR")
    console.error(e)
    return false
  }
  return true
}