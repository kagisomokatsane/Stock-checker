const API_KEY = "4KD50A3YMN0QXYH7";
const getApiUrlForStockCode = (stockCode) =>
  `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockCode}&outputsize=compact&apikey=${API_KEY}`;

async function getStockDataForStockCode(stockCode) {
  const apiUrl = getApiUrlForStockCode(stockCode);
  return fetch(apiUrl).then(async function (response) {
    const data = await response.json();

    console.log("TEST DATA", data);

    const formattedData = {
      x: [],
      y: [],
    };

    for (let key in data["Time Series (Daily)"]) {
      formattedData.x.push(key);
      formattedData.y.push(data["Time Series (Daily)"][key]["1. open"]);
    }

    console.log("TEST FORMATTED DATA", formattedData);

    formattedData.x = formattedData.x.reverse();
    formattedData.y = formattedData.y.reverse();

    console.log("TEST FORMATTED DATA AFTER REVERSE", formattedData);

    return formattedData;
  });
}

/*---------------------------------------------------------GOOGLE------------------------------------------------*/
/*---------------------------------------------------------GOOGLE------------------------------------------------*/
let googleBtn = document.getElementById("googleBtn");
let googleChartContainer = document.getElementById("googleDiv");
googleBtn.addEventListener("click", () => {
  if (googleChartContainer.style.display === "none") {
    googleChartContainer.style.display = "block";
  } else {
    googleChartContainer.style.display = "none";
  }
});

async function gChart() {
  const formattedData = await getStockDataForStockCode("GOOGL");

  let googleChart = document.getElementById("googleChart").getContext("2d");

  console.log("GOOGLE After Reverse", formattedData);

  let myChart = new Chart(googleChart, {
    type: "line",
    data: {
      labels: formattedData.x,
      datasets: [
        {
          label: "GOOGLE STOCK",
          data: formattedData.y,
          borderColor: "red",
        },
      ],
    },

    options: {},
  });
}
/* ---------------------------------------------------APPLE------------------------------------------------*/
/* ---------------------------------------------------APPLE------------------------------------------------*/
let appleBtn = document.getElementById("appleBtn");
let appleChartContainer = document.getElementById("appleDiv");
appleBtn.addEventListener("click", () => {
  if (appleChartContainer.style.display === "none") {
    appleChartContainer.style.display = "block";
  } else {
    appleChartContainer.style.display = "none";
  }
});

async function aChart() {
  const formattedData = await getStockDataForStockCode("AAPL");

  let googleChart = document.getElementById("appleChart").getContext("2d");

  let myChart = new Chart(appleChart, {
    type: "line",
    data: {
      labels: formattedData.x,
      datasets: [
        {
          label: "APPLE STOCK",
          data: formattedData.y,
          borderColor: "blue",
        },
      ],
    },

    options: {},
  });
}

/*---------------------------------------------------------TESLA-----------------------------------------------*/
/*---------------------------------------------------------TESLA-----------------------------------------------*/
let teslaBtn = document.getElementById("teslaBtn");
let teslaChartContainer = document.getElementById("teslaDiv");
teslaBtn.addEventListener("click", () => {
  if (teslaChartContainer.style.display === "none") {
    teslaChartContainer.style.display = "block";
  } else {
    teslaChartContainer.style.display = "none";
  }
});

async function tChart() {
  const formattedData = await getStockDataForStockCode("TSLA");

  let googleChart = document.getElementById("teslaChart").getContext("2d");

  console.log("TESLA After Reverse", formattedData);

  let myChart = new Chart(teslaChart, {
    type: "line",
    data: {
      labels: formattedData.x,
      datasets: [
        {
          label: "TESLA STOCK",
          data: formattedData.y,
          borderColor: "green",
        },
      ],
    },

    options: {}, 
  });
}
/*-----------------------------------------------------MICROSOFT--------------------------------------------*/
/*-----------------------------------------------------MICROSOFT--------------------------------------------*/
let microBtn = document.getElementById("microBtn");
let microChartContainer = document.getElementById("microsoftDiv");
microBtn.addEventListener("click", () => {
  if (microChartContainer.style.display === "none") {
    microChartContainer.style.display = "block";
  } else {
    microChartContainer.style.display = "none";
  }
});

async function mChart() {
  const formattedData = await getStockDataForStockCode("MSFT");

  let microChart = document.getElementById("microChart").getContext("2d");

  let myChart = new Chart(microChart, {
    type: "line",
    data: {
      labels: formattedData.x,
      datasets: [
        {
          label: "MICROSOFT STOCK",
          data: formattedData.y,
          borderColor: "purple",
        },
      ],
    },

    options: {},
  });
}

function start() {
  gChart();
  aChart();
  tChart();
  mChart();
}

start();
