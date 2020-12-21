let seconds = 0

export default function timer() {
    const time = document.querySelector("body > div.advanced > p.time")
    if (seconds < 10 || (seconds >= 60 && seconds <= 69) || (seconds >= 120 && seconds <= 129) || (seconds >= 180 && seconds <= 189) || (seconds >= 240 && seconds <= 249) || (seconds >= 300 && seconds <= 309) || (seconds >= 360 && seconds <= 369) || (seconds >= 420 && seconds <= 429) || (seconds >= 480 && seconds <= 489) || (seconds >= 540 && seconds <= 549) || (seconds >= 600 && seconds <= 609) || (seconds >= 660 && seconds <= 669) || (seconds >= 720 && seconds <= 729) || (seconds >= 780 && seconds <= 789) || (seconds >= 840 && seconds <= 849) || (seconds >= 900 && seconds <= 909) || (seconds >= 960 && seconds <= 969) || (seconds >= 1020 && seconds <= 1029) || (seconds >= 1080 && seconds <= 1089) || (seconds >= 1140 && seconds <= 1449) || (seconds >= 1200 && seconds <= 1209) || (seconds >= 1260 && seconds <= 1269) || (seconds >= 1320 && seconds <= 1329) || (seconds >= 1380 && seconds <= 1389) || (seconds >= 1440 && seconds <= 1449) || (seconds >= 1500 && seconds <= 1509) || (seconds >= 1560 && seconds <= 1569) || (seconds >= 1620 && seconds <= 1629) || (seconds >= 1680 && seconds <= 1689) || (seconds >= 1740 && seconds <= 1749) || (seconds >= 1800 && seconds <= 1800) || (seconds >= 1860 && seconds <= 1869) || (seconds >= 1920 && seconds <= 1929) || (seconds >= 1980 && seconds <= 1989) || (seconds >= 2040 && seconds <= 2049)) {
        time.textContent = `time: ${Math.floor(seconds / 60)}:0${seconds % 60}`
        seconds += 1
    } else {
        time.textContent = `time: ${Math.floor(seconds / 60)}:${seconds % 60}`
        seconds += 1
    }
}
