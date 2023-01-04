(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('vintage', {
        "color": [
            "#ff72b6",
            "#709dff",
            "#c681ff",
            "#ffd875",
            "#75ffa9",
            "#4f1470",
            "#787464",
            "#cc7e63",
            "#724e58",
            "#4b565b"
        ],
        "backgroundColor": "#feecfc",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#321a7e"
            },
            "subtextStyle": {
                "color": "#778dff"
            }
        },
        "line": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": false
        },
        "radar": {
            "itemStyle": {
                "borderWidth": 1
            },
            "lineStyle": {
                "width": 2
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": false
        },
        "bar": {
            "itemStyle": {
                "barBorderWidth": "",
                "barBorderColor": "#ccc"
            }
        },
        "pie": {
            "itemStyle": {
                "borderWidth": "",
                "borderColor": "#ccc"
            }
        },
        "scatter": {
            "itemStyle": {
                "borderWidth": "",
                "borderColor": "#ccc"
            }
        },
        "boxplot": {
            "itemStyle": {
                "borderWidth": "",
                "borderColor": "#ccc"
            }
        },
        "parallel": {
            "itemStyle": {
                "borderWidth": "",
                "borderColor": "#ccc"
            }
        },
        "sankey": {
            "itemStyle": {
                "borderWidth": "",
                "borderColor": "#ccc"
            }
        },
        "funnel": {
            "itemStyle": {
                "borderWidth": "",
                "borderColor": "#ccc"
            }
        },
        "gauge": {
            "itemStyle": {
                "borderWidth": "",
                "borderColor": "#ccc"
            }
        },
        "candlestick": {
            "itemStyle": {
                "color": "#c23531",
                "color0": "#314656",
                "borderColor": "#c23531",
                "borderColor0": "#314656",
                "borderWidth": 1
            }
        },
        "graph": {
            "itemStyle": {
                "borderWidth": "",
                "borderColor": "#ccc"
            },
            "lineStyle": {
                "width": 1,
                "color": "#aaaaaa"
            },
            "symbolSize": 4,
            "symbol": "emptyCircle",
            "smooth": false,
            "color": [
                "#ff72b6",
                "#709dff",
                "#c681ff",
                "#ffd875",
                "#75ffa9",
                "#4f1470",
                "#787464",
                "#cc7e63",
                "#724e58",
                "#4b565b"
            ],
            "label": {
                "color": "#eeeeee"
            }
        },
        "map": {
            "itemStyle": {
                "areaColor": "#eeeeee",
                "borderColor": "#444444",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#000000"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444444",
                    "borderWidth": 1
                },
                "label": {
                    "color": "rgb(100,0,0)"
                }
            }
        },
        "geo": {
            "itemStyle": {
                "areaColor": "#eeeeee",
                "borderColor": "#444444",
                "borderWidth": 0.5
            },
            "label": {
                "color": "#000000"
            },
            "emphasis": {
                "itemStyle": {
                    "areaColor": "rgba(255,215,0,0.8)",
                    "borderColor": "#444444",
                    "borderWidth": 1
                },
                "label": {
                    "color": "rgb(100,0,0)"
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#333"
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#333"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#333"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": true,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "color": "#333"
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#ccc"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "iconStyle": {
                    "borderColor": "#666666"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#333333"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#cccccc",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#cccccc",
                    "width": 1
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#293c55",
                "width": 1
            },
            "itemStyle": {
                "color": "#293c55",
                "borderWidth": 1
            },
            "controlStyle": {
                "color": "#293c55",
                "borderColor": "#293c55",
                "borderWidth": 0.5
            },
            "checkpointStyle": {
                "color": "#e43c59",
                "borderColor": "#c23531"
            },
            "label": {
                "color": "#293c55"
            },
            "emphasis": {
                "itemStyle": {
                    "color": "#a9334c"
                },
                "controlStyle": {
                    "color": "#293c55",
                    "borderColor": "#293c55",
                    "borderWidth": 0.5
                },
                "label": {
                    "color": "#293c55"
                }
            }
        },
        "visualMap": {
            "color": [
                "#ff0000",
                "#d88273",
                "#f6efa6"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(47,69,84,0)",
            "dataBackgroundColor": "rgba(47,69,84,0.3)",
            "fillerColor": "rgba(167,183,204,0.4)",
            "handleColor": "#a7b7cc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#333333"
            }
        },
        "markPoint": {
            "label": {
                "color": "#eeeeee"
            },
            "emphasis": {
                "label": {
                    "color": "#eeeeee"
                }
            }
        }
    });
}));
