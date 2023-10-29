import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  // ChartComponent,
  checkValidCount,
  DashboardCardComponent,
  MetaTags
} from "../../../components";
// import routesMap from "../../../routeControl/adminRoutes";
import { logger } from "../../../utils";

function Dashboard() {
  const { t } = useTranslation();

  const [dashboardCardValues, setDashboardCardValues] = useState({});
  const [loading, setLoading] = useState(false);
  const [registeredUserYear, setRegisteredUserYear] = useState("");
  const [visitorBuyerUserYear, setVisitorBuyerUserYear] = useState("");
  const [earningYear, setEarningYear] = useState("");
  const [categoryProductYear, setCategoryProductYear] = useState("");

  const [registeredUserData, setRegisteredUserData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        label: "Buyer",
        backgroundColor: "#c8a452",
        borderColor: "#c8a452",
        pointBackgroundColor: "#212529",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        fill: false
      },
      {
        label: "Seller",
        fill: false,
        backgroundColor: "#3aff00",
        borderColor: "#3aff00",
        pointBackgroundColor: "#212529",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  });

  const [visitorBuyerGraphData, setVisitorBuyerGraphData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        label: "Visitors",
        backgroundColor: "#0088ff",
        borderColor: "#0088ff",
        pointBackgroundColor: "#212529",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        fill: false
      },
      {
        label: "Buyers",
        fill: false,
        backgroundColor: "#c8a452",
        borderColor: "#c8a452",
        pointBackgroundColor: "#212529",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  });

  const [earningData, setEarningData] = useState({
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    datasets: [
      {
        label: "Buyer",
        backgroundColor: "rgba(200, 164, 82, 0.15)",
        borderWidth: 2,
        borderRadius: 60,
        borderColor: "#c8a452",
        pointBackgroundColor: "#212529",
        pointBorderWidth: 2,
        pointHoverBorderWidth: 2,
        barPercentage: 0.3,
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        fill: false
      }
    ]
  });

  const [categoriesData, setCategoriesData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ["#FF6384", "#c8a452", "#84FF63", "#8463FF", "#6384FF"]
      }
    ]
  });

  const [productData, setProductData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ["#FF6384", "#c8a452", "#84FF63", "#8463FF", "#6384FF"]
      }
    ]
  });

  const visitOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        displayColors: false,
        callbacks: {
          label(tooltipItems) {
            return `Count : ${tooltipItems.formattedValue}`;
          }
        }
      },
      title: {
        display: true
      },
      legend: {
        align: "end",
        labels: {
          color: "white",
          boxWidth: 10,
          boxHeight: 7,
          usePointStyle: true,
          font: {
            size: 14
          }
        }
      }
    },
    elements: {
      line: {
        tension: 0.5,
        borderWidth: 2,
        fill: false,
        borderJoinStyle: "round"
      },
      point: {
        radius: 8,
        hoverRadius: 8,
        pointStyle: "circle",
        // pointBorderColor: 'white',
        color: "white"
      }
    },
    scales: {
      xAxes: {
        display: true,
        beginAtZero: true,
        ticks: {
          color: "white"
          // padding: 10
        },
        grid: {
          display: false,
          tickBorderDash: [5, 5],
          drawBorder: true,
          borderColor: "#262626"
        },
        title: {
          display: true,
          // text: "Year - 2022",
          // padding: {
          //   top: 20,
          // },
          color: "#8094ae",
          font: {
            size: 14
          }
        }
      },
      yAxes: {
        display: true,
        beginAtZero: true,
        // min: 0,
        // max: 50000,
        ticks: {
          color: "white",
          padding: 15,
          stepSize: 10000,
          precision: 0,
          callback(tickValue) {
            let ranges = [
              {
                divider: 1e6,
                suffix: "M"
              },
              {
                divider: 1e3,
                suffix: "k"
              }
            ];

            function formatNumber(n) {
              for (let i = 0; i < ranges.length; i += 1) {
                if (n >= ranges[i].divider) {
                  return (n / ranges[i].divider).toString() + ranges[i].suffix;
                }
              }
              return n;
            }
            return formatNumber(tickValue);
          }
        },
        grid: {
          display: true,
          borderColor: "#262626",
          color: "#0d0d0d",
          borderDash: [5, 5],
          tickBorderDash: [5, 5],
          drawTicks: false,
          drawBorder: true
        },
        title: {
          display: true,
          text: "Count of Visits & Orders",
          // padding: 20,
          color: "#8094ae",
          font: {
            size: 14
          }
        }
      }
    }
  };

  const registeredUserOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        displayColors: false,
        callbacks: {
          label(tooltipItems) {
            return `Count : ${tooltipItems.formattedValue}`;
          }
        }
      },
      title: {
        display: true
      },
      legend: {
        align: "end",
        labels: {
          color: "white",
          boxWidth: 10,
          boxHeight: 7,
          usePointStyle: true,
          font: {
            size: 14
          }
        }
      }
    },
    elements: {
      line: {
        tension: 0.5,
        borderWidth: 2,
        fill: false,
        borderJoinStyle: "round"
      },
      point: {
        radius: 8,
        hoverRadius: 8,
        pointStyle: "circle",
        // pointBorderColor: 'white',
        color: "white"
      }
    },
    scales: {
      xAxes: {
        display: true,
        beginAtZero: true,
        ticks: {
          color: "white"
          // padding: 10
        },
        grid: {
          display: false,
          tickBorderDash: [5, 5],
          drawBorder: true,
          borderColor: "#262626"
        },
        title: {
          display: true,
          // text: "Year - 2022",
          // padding: {
          //   top: 20,
          // },
          color: "#8094ae",
          font: {
            size: 14
          }
        }
      },
      yAxes: {
        display: true,
        beginAtZero: true,
        // min: 0,
        // max: 50000,
        ticks: {
          color: "white",
          padding: 15,
          stepSize: 10000,
          precision: 0,
          callback(tickValue) {
            let ranges = [
              {
                divider: 1e6,
                suffix: "M"
              },
              {
                divider: 1e3,
                suffix: "k"
              }
            ];

            function formatNumber(n) {
              for (let i = 0; i < ranges.length; i += 1) {
                if (n >= ranges[i].divider) {
                  return (n / ranges[i].divider).toString() + ranges[i].suffix;
                }
              }
              return n;
            }
            return formatNumber(tickValue);
          }
        },
        grid: {
          display: true,
          borderColor: "#262626",
          color: "#0d0d0d",
          borderDash: [5, 5],
          tickBorderDash: [5, 5],
          drawTicks: false,
          drawBorder: true
        },
        title: {
          display: true,
          text: "Count of Buyer and Seller",
          // padding: 20,
          color: "#8094ae",
          font: {
            size: 14
          }
        }
      }
    }
  };

  const earningOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        displayColors: false,
        callbacks: {
          label(tooltipItems) {
            return `Count : ${tooltipItems.formattedValue}`;
          }
        }
      },
      title: {
        display: true
      },
      legend: {
        display: false,
        align: "end",
        labels: {
          color: "white",
          boxWidth: 10,
          boxHeight: 7,
          usePointStyle: true,
          font: {
            size: 14
          }
        }
      }
    },
    elements: {
      point: {
        radius: 8,
        hoverRadius: 8,
        pointStyle: "circle",
        // pointBorderColor: 'white',
        color: "white"
      }
    },
    scales: {
      xAxes: {
        display: true,
        beginAtZero: true,
        ticks: {
          color: "white"
          // padding: 10
        },
        grid: {
          display: false,
          tickBorderDash: [5, 5],
          drawBorder: true,
          borderColor: "#262626"
        },
        title: {
          display: true,
          // text: "Year - 2022",
          // padding: {
          //   top: 20,
          // },
          color: "#8094ae",
          font: {
            size: 14
          }
        }
      },
      yAxes: {
        display: true,
        beginAtZero: true,
        // min: 0,
        // max: 50000,
        ticks: {
          color: "white",
          padding: 15,
          stepSize: 10000,
          precision: 0,
          callback(tickValue) {
            let ranges = [
              {
                divider: 1e6,
                suffix: "M"
              },
              {
                divider: 1e3,
                suffix: "k"
              }
            ];

            function formatNumber(n) {
              for (let i = 0; i < ranges.length; i += 1) {
                if (n >= ranges[i].divider) {
                  return (n / ranges[i].divider).toString() + ranges[i].suffix;
                }
              }
              return n;
            }
            return formatNumber(tickValue);
          }
        },
        grid: {
          display: true,
          borderColor: "#262626",
          color: "#0d0d0d",
          borderDash: [5, 5],
          tickBorderDash: [5, 5],
          drawTicks: false,
          drawBorder: true
        },
        title: {
          display: true,
          text: "Earning Amount",
          // padding: 20,
          color: "#8094ae",
          font: {
            size: 14
          }
        }
      }
    }
  };

  const categoriesOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        align: "center",
        labels: {
          color: "white",
          boxWidth: 10,
          boxHeight: 7,
          usePointStyle: true,
          font: {
            size: 14
          }
        }
      }
    }
  };

  const productOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "left",
        align: "center",
        rtl: true,
        labels: {
          color: "white",
          boxWidth: 10,
          boxHeight: 7,
          usePointStyle: true,
          textAlign: "right",
          font: {
            size: 14
          }
        }
      }
    }
  };

  return (
    <>
      <MetaTags title={t("text.common.dashboard")} />
      Dashboard
      <div className="nk-block-head nk-block-head-sm">
        <div className="nk-block-between">
          <div className="nk-block-head-content">
            <h3 className="nk-block-title page-title">
              {t("text.common.dashboard")}
            </h3>
          </div>
        </div>
      </div>
      <div className="nk-block">
        <div className="row g-gs dashboardSets">
          <DashboardCardComponent
            linkPath="#"
            title={t("text.dashboard.totalCustomer")}
            // count={1250}
            count={checkValidCount(dashboardCardValues?.totalBuyer)}
            image="ic_buyer.svg"
          />
          <DashboardCardComponent
            linkPath="#"
            title={t("text.dashboard.totalSellers")}
            // count={1000}
            count={checkValidCount(dashboardCardValues?.totalSeller)}
            image="ic_sellers.svg"
          />
          <DashboardCardComponent
            linkPath="#"
            title={t("text.dashboard.totalProducts")}
            // count={100}
            count={checkValidCount(dashboardCardValues?.totalProduct)}
            image="ic_products.svg"
          />
          <DashboardCardComponent
            linkPath="#"
            title={t("text.dashboard.totalEarnings")}
            // count={50}
            count={
              loading
                ? 0
                : checkValidCount(
                    dashboardCardValues?.totalEarning === null
                      ? dashboardCardValues?.totalEarning
                      : parseFloat(dashboardCardValues?.totalEarning).toFixed(2)
                  )
            }
            image="ic_earnings.svg"
          />
          <DashboardCardComponent
            linkPath="#"
            title={t("text.dashboard.activeOrders")}
            // count={3420}
            count={checkValidCount(dashboardCardValues?.activeOrder)}
            image="ic_active_order.svg"
          />
          <DashboardCardComponent
            linkPath="#"
            title={t("text.dashboard.completedOrders")}
            // count={2450}
            count={checkValidCount(dashboardCardValues?.completeOrder)}
            image="ic_completed_order.svg"
          />
          <DashboardCardComponent
            linkPath="#"
            title={t("text.dashboard.cancelledOrders")}
            // count={100}
            count={checkValidCount(dashboardCardValues?.cancelOrder)}
            image="ic_cancelled_order.svg"
          />
        </div>
        <div className="row g-gs dashboardCharts">
          {/* <ChartComponent
            type="line"
            options={visitOptions}
            data={visitorBuyerGraphData}
            title={t("text.dashboard.visitOrderTitle")}
            year={visitorBuyerUserYear}
            setYear={setVisitorBuyerUserYear}
          />
          <ChartComponent
            type="bar"
            options={earningOptions}
            data={earningData}
            title={t("text.dashboard.earningsTitle")}
            year={earningYear}
            setYear={setEarningYear}
          />
          <ChartComponent
            type="line"
            options={registeredUserOptions}
            data={registeredUserData}
            title={t("text.dashboard.registeredUsersTitle")}
            year={registeredUserYear}
            setYear={setRegisteredUserYear}
          />
          <ChartComponent
            type="pie"
            options={categoriesOptions}
            data={categoriesData}
            title={t("text.dashboard.topSellingTitle")}
            optionsSecond={productOptions}
            dataSecond={productData}
            titleOne={t("text.dashboard.categoriesTitle")}
            titleSecond={t("text.dashboard.productsTitle")}
            chartCount={2}
            year={categoryProductYear}
            setYear={setCategoryProductYear}
          /> */}
        </div>
      </div>
    </>
  );
}

export default React.memo(Dashboard);
