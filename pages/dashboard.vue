<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <!-- mini statistic start -->
        <v-flex lg3 sm6 xs12>
          <v-card>
            <v-card-text class="pa-0">
              <v-container class="pa-0">
                <div class="layout row ma-0">
                  <div class="sm6 xs6 flex">
                    <div class="layout column ma-0 justify-center align-center">
                      <v-icon size="56px" color="indigo">fa-server </v-icon>
                    </div>
                  </div>
                  <div
                    class="sm6 xs6 flex text-sm-center py-3 indigo white--text "
                  >
                    <div class="headline">
                      <span> {{ this.chart_bar[0].data[2].value }} </span>
                    </div>
                    <span class="caption">คอมพิวเตอร์</span>
                  </div>
                </div>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <v-card>
            <v-card-text class="pa-0">
              <v-container class="pa-0">
                <div class="layout row ma-0">
                  <div class="sm6 xs6 flex">
                    <div class="layout column ma-0 justify-center align-center">
                      <v-icon size="56px" color="red">fa-print</v-icon>
                    </div>
                  </div>
                  <div
                    class="sm6 xs6 flex text-sm-center py-3 red white--text "
                  >
                    <div class="headline">
                      <span> {{ this.chart_bar[0].data[0].value }} </span>
                    </div>
                    <span class="caption">ปริ้นเตอร์</span>
                  </div>
                </div>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <v-card>
            <v-card-text class="pa-0">
              <v-container class="pa-0">
                <div class="layout row ma-0">
                  <div class="sm6 xs6 flex">
                    <div class="layout column ma-0 justify-center align-center">
                      <v-icon size="56px" color="light-blue"
                        >fa-television
                      </v-icon>
                    </div>
                  </div>
                  <div
                    class="sm6 xs6 flex text-sm-center py-3 light-blue white--text "
                  >
                    <div class="headline">
                      <span> {{ this.chart_bar[0].data[4].value }} </span>
                    </div>
                    <span class="caption">จอมอนิเตอร์</span>
                  </div>
                </div>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <v-card>
            <v-card-text class="pa-0">
              <v-container class="pa-0">
                <div class="layout row ma-0">
                  <div class="sm6 xs6 flex">
                    <div class="layout column ma-0 justify-center align-center">
                      <v-icon size="56px" color="purple darken-2"
                        >fa-code-fork</v-icon
                      >
                    </div>
                  </div>
                  <div
                    class="sm6 xs6 flex text-sm-center py-3 purple darken-2 white--text "
                  >
                    <div class="headline">
                      <span> {{ this.chart_bar[0].data[3].value }} </span>
                    </div>
                    <span class="caption">สำรองไฟ</span>
                  </div>
                </div>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
        <!-- mini statistic  end -->
        <v-flex lg6 sm12 xs12>
          <v-widget
            title="ครุภัณฑ์คอมพิวเตอร์จำแนกตามประเภท"
            content-bg="white"
          >
            <div slot="widget-content">
              <div class="chart">
                <bar-chart
                  :data="this.chart_bar"
                  label-rotate
                  rainbow
                  x-name="ประเภท"
                  y-name=""
                />
              </div>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg6 sm12 xs12>
          <v-widget
            title="ครุภัณฑ์คอมพิวเตอร์จำแนกสถานะการใช้งาน"
            content-bg="white"
          >
            <div slot="widget-content">
              <div class="chart">
                <pie-chart
                  :data="this.chart_pie"
                  label-position="center"
                  legend
                />
              </div>
            </div>
          </v-widget>
        </v-flex>

        <v-flex lg12 sm12 xs12>
          <v-widget
            title="ครุภัณฑ์คอมพิวเตอร์สถานะแสดงตามช่วงปี"
            content-bg="white"
          >
            <div slot="widget-content">
              <div class="chart">
                <line-chart :data="this.chart_line" colors="GOLD" />
              </div>
            </div> </v-widget
        ></v-flex>

        <v-flex lg6 sm12 xs12>
          <v-widget
            title="10 อันดับ ครุภัณฑ์คอมพิวเตอร์จำแนกประเภทการจัดซื้อ"
            content-bg="white"
          >
            <div slot="widget-content">
              <div
                class="chart_line_landscape
              "
              >
                <bar-chart
                  :data="this.chart_line_landscape"
                  horizontal
                  zoom
                  y-name="การจัดซื้อ"
                  x-name="จำนวน"
                  colors="MEDIUMPURPLE"
                />
              </div>
            </div> </v-widget
        ></v-flex>

        <v-flex lg6 sm12 xs12>
          <v-widget
            title="10 อันดับ ครุภัณฑ์คอมพิวเตอร์จำแนกประเภทงบประมาณ"
            content-bg="white"
          >
            <div slot="widget-content">
              <div
                class="chart_line_landscape
              "
              >
                <bar-chart
                  :data="this.chart_line_landscape_money"
                  horizontal
                  zoom
                  y-name="'งบประมาณ"
                  x-name="จำนวน"
                  colors="SALMON"
                />
              </div>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg6 sm12 xs12> </v-flex>
        <v-flex lg6 sm12 xs12> </v-flex>
        <v-flex lg6 sm12 xs12> </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import MiniStatistic from "@/components/widgets/statistic/MiniStatistic";

import VWidget from "@/components/VWidget";
import Material from "vuetify/es5/util/colors";

import * as firebase from "firebase";
import { APIPath } from "../backend/APIPath";
const apiPath = new APIPath();
import axios from "axios";
export default {
  layout: "dashboard",
  components: {
    VWidget,
    MiniStatistic
  },
  data: () => ({
    user: "",

    chart_pie: [
      {
        name: "คอมพิวเตอร์",
        value: 763
      },
      {
        name: "จอ",
        value: 411
      },
      {
        name: "โน๊ตบุ๊ค",
        value: 223
      },
      {
        name: "ออนอินวัน",
        value: 46
      },
      {
        name: "ปริ้นเตอร์",
        value: 1139
      },
      {
        name: "ปริ้นเตอร์เทอมอล",
        value: 210
      },
      {
        name: "สแกนเนอร์",
        value: 130
      },
      {
        name: "สำรองไฟ",
        value: 720
      },
      {
        name: "อื่นๆ",
        value: 857
      },
      {
        name: "เซิฟเวอร์",
        value: 19
      }
    ],
    chart_bar: [
      {
        name: "ประเภท",
        data: [
          {
            label: "คอมพิวเตอร์",
            value: 763
          },
          {
            label: "จอ",
            value: 411
          },
          {
            label: "โน๊ตบุ๊ค",
            value: 223
          },
          {
            label: "ออนอินวัน",
            value: 46
          },
          {
            label: "ปริ้นเตอร์",
            value: 1139
          },
          {
            label: "ปริ้นเตอร์เทอมอล",
            value: 210
          },
          {
            label: "สแกนเนอร์",
            value: 130
          },
          {
            label: "สำรองไฟ",
            value: 720
          },
          {
            label: "อื่นๆ",
            value: 857
          },
          {
            label: "เซิฟเวอร์",
            value: 19
          }
        ]
      }
    ],
    chart_line: [
      {
        name: "จำนวน",
        data: [
          {
            label: "1975",
            value: 1
          },
          {
            label: "1993",
            value: 1
          },
          {
            label: "1994",
            value: 3
          },
          {
            label: "1995",
            value: 9
          },
          {
            label: "1996",
            value: 17
          },
          {
            label: "1997",
            value: 31
          },
          {
            label: "1998",
            value: 111
          },
          {
            label: "1999",
            value: 40
          },
          {
            label: "2000",
            value: 51
          },
          {
            label: "2001",
            value: 153
          },
          {
            label: "2002",
            value: 43
          },
          {
            label: "2003",
            value: 17
          },
          {
            label: "2004",
            value: 27
          },
          {
            label: "2005",
            value: 30
          },
          {
            label: "2006",
            value: 58
          },
          {
            label: "2007",
            value: 45
          },
          {
            label: "2008",
            value: 96
          },
          {
            label: "2009",
            value: 213
          },
          {
            label: "2010",
            value: 174
          },
          {
            label: "2011",
            value: 220
          },
          {
            label: "2012",
            value: 286
          },
          {
            label: "2013",
            value: 264
          },
          {
            label: "2014",
            value: 278
          },
          {
            label: "2015",
            value: 430
          },
          {
            label: "2016",
            value: 313
          },
          {
            label: "2017",
            value: 54
          },
          {
            label: "2018",
            value: 112
          },
          {
            label: "2019",
            value: 145
          },
          {
            label: "2020",
            value: 116
          }
        ]
      }
    ],
    chart_line_landscape: [
      {
        name: "จำนวน",
        data: [
          {
            label: "ตกลงราคา",
            value: 3079
          },
          {
            label: "สอบราคา",
            value: 445
          },
          {
            label: "บริจาค",
            value: 365
          },
          {
            label: "เฉพาะเจาะจง",
            value: 192
          },
          {
            label: "ได้มาพร้อมกับได้มาพร้อมกับเครื่องไมโครคอมพิวเตอร์",
            value: 80
          },
          {
            label: "ได้มาพร้อมกับเครื่องคอมพิวเตอร์ราคารวมกับเครื่อง",
            value: 60
          },
          {
            label: "ได้มาจากการสำรวจ ปี 61",
            value: 58
          },
          {
            label: "ประกวดราคา",
            value: 46
          },
          {
            label: "ได้มาจากการสำรวจปี 2562",
            value: 23
          },
          {
            label: "ได้มาพร้อมอาคารรังสีรักษา (นาหม่อม)",
            value: 16
          }
        ]
      }
    ],
    chart_line_landscape_money: [
      {
        name: "จำนวน",
        data: [
          {
            label: "เงินบำรุง",
            value: 3002
          },
          {
            label: "เงินบริจาค",
            value: 314
          },
          {
            label: "เงินประกันสังคม",
            value: 254
          },
          {
            label: "เงินงบประมาณศูนย์แพทย์",
            value: 193
          },
          {
            label: "ได้มาจากการสำรวจ",
            value: 91
          },
          {
            label: "เงินงบประมาณ",
            value: 90
          },
          {
            label: "เงินบำรุงศูนย์แพทย์",
            value: 80
          },
          {
            label: "เงินงบสำนักงานประกันสุขภาพแห่งชาติ",
            value: 78
          },
          {
            label: "เงินงบประมาณศูนย์แพทยศาสตรชั้นคลินิกศึกษา",
            value: 46
          },
          {
            label: "เงินนอกงบประมาณ",
            value: 34
          }
        ]
      }
    ],

    color: Material
  }),
  mounted() {
    this.fetch_chart_pie();
    this.fetch_chart_bar();
    this.fetch_chart_line();
    this.fetch_chart_line_landscape();
    this.fetch_chart_line_landscape_money();
  },

  methods: {
    //แสดง chart_pie
    async fetch_chart_pie() {
      await axios
        .get(`${apiPath.getBaseUrl()}pasadu_chart_pie.php`)
        .then(response => {
          this.chart_pie = response.data;
        });
    },
    //แสดง chart_bar
    async fetch_chart_bar() {
      await axios
        .get(`${apiPath.getBaseUrl()}pasadu_chart_bar.php`)
        .then(response => {
          this.chart_bar = response.data;
        });
      // alert(this.chart_bar[0].data[7].value);
    },
    //แสดง chart_line
    async fetch_chart_line() {
      await axios
        .get(`${apiPath.getBaseUrl()}pasadu_chart_line.php`)
        .then(response => {
          this.chart_line = response.data;
        });
    },
    //แสดง chart_line_landscape
    async fetch_chart_line_landscape() {
      await axios
        .get(`${apiPath.getBaseUrl()}pasadu_chart_line_landscape.php`)
        .then(response => {
          this.chart_line_landscape = response.data;
        });
    },
    //แสดง chart_line_landscape
    async fetch_chart_line_landscape_money() {
      await axios
        .get(`${apiPath.getBaseUrl()}pasadu_chart_line_landscape_money.php`)
        .then(response => {
          this.chart_line_landscape_money = response.data;
        });
    }
  }
};
</script>
<style>
.chart {
  width: 100%;
  height: 300px;
}
.chart_line_landscape {
  width: 100%;
  height: 700px;
}
</style>
