import React from 'react'

export default function App() {
  
  const [data, setData] = React.useState({})

  console.log('App component rendered');

  React.useEffect(() => {
    fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo")
      .then(res => res.json())
      .then(apiData => {
        setData(apiData["Global Quote"]);
      })
      .catch(error => console.error(`Error getting data: ${error}`));
  }, []);

  const dateData = data["07. latest trading day"];
  const symbolData = data["01. symbol"];
  const openData = data["02. open"];
  const highData = data["03. high"];
  const lowData = data["04. low"];
  const priceData = data["05. price"];
  const volumeData = data["06. volume"];
  const changeData = data["09. change"];
  const changePercentData = data["10. change percent"];

  return (
    <div className="container row p-2" id="api-data-container">
        <h1 className="p-3">USING API PRACTICE PROJECT - REACT</h1>
        <div className="sub-container">
            <div className="header-container d-flex justify-content-center col-12">
                <div className="col-6"><h4>Stock Info</h4></div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="info-container col-11 p-1">
                    <h3>Symbol</h3>
                    <span id="symbol">{symbolData}</span>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="info-container col-5 p-1 m-1">
                    <h3>Current Price</h3>
                    <span id="price">{priceData}</span>
                </div>
                <div className="info-container col-5 p-1 m-1">
                    <h3>Open</h3>
                    <span id="open">{openData}</span>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="info-container col-5 p-1 m-1">
                    <h3>Low</h3>
                    <span id="low">{lowData}</span>
                </div>
                <div className="info-container col-5 p-1 m-1">
                    <h3>High</h3>
                    <span id="high">{highData}</span>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="info-container col-3 p-1 m-1">
                    <h3>Change</h3>
                    <span id="change">{changeData}</span>
                </div>
                <div className="info-container col-4 p-1 m-1">
                    <h3>Change Percent</h3>
                    <span id="change-percent">{changePercentData}</span>
                </div>
                <div className="info-container col-3 p-1 m-1">
                    <h3>Volume</h3>
                    <span id="volume">{volumeData}</span>
                </div>
            </div>
            <div className="footer-container mt-3">
                <span id="date">{dateData}</span>
                <span>|</span>
                <span id="">Info provided by <a href="https://www.alphavantage.co/">Alpha Vantage</a></span>
            </div>
        </div>    
    </div>
  )
}
