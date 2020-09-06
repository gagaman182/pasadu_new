<template>
  <div id="page-alerts">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6 sm12 xs12>
          <v-widget
            title="ครุภัณฑ์คอมพิวเตอร์จำแนกสถานการใช้งาน"
            content-bg="white"
          >
            <div slot="widget-content">
              <div class="chart">
                <pie-chart
                  :data="this.chart_pie_detail"
                  label-position="center"
                  legend
                />
              </div>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg6 sm12 xs12>
          <v-widget
            title="10 อันดับ ครุภัณฑ์คอมพิวเตอร์จำแนกกลุ่มงาน"
            content-bg="white"
          >
            <div slot="widget-content">
              <div class="chart">
                <bar-chart
                  :data="this.chart_bar_place_detail"
                  label-rotate
                  rainbow
                  x-name="ประเภท"
                  y-name=""
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
                <line-chart :data="this.chart_line_detail" colors="GOLD" />
              </div>
            </div> </v-widget
        ></v-flex>
        <v-flex lg12>
          <v-widget title="ตารางข้อมูล">
            <div slot="widget-content">
              <v-card>
                <v-card-title>
                  <h4>{{ this.complex.items[0].name }}</h4>
                  <v-spacer></v-spacer>

                  <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="ค้นหา"
                    single-line
                    hide-details
                  ></v-text-field>
                  <v-btn
                    color="primary"
                    dark
                    class="mb-1"
                    v-bind="attrs"
                    @click="on"
                    ><v-icon color="white">add_to_queue</v-icon></v-btn
                  >
                </v-card-title>

                <v-card-text class="pa-0">
                  <v-data-table
                    :headers="complex.headers"
                    :search="search"
                    :items="complex.items"
                    :rows-per-page-items="[
                      10,
                      25,
                      50,
                      { text: 'All', value: -1 }
                    ]"
                    class="elevation-1"
                    item-key="name"
                    v-model="complex.selected"
                  >
                    <template slot="items" slot-scope="props">
                      <tr @click="showAlert(props.item)">
                        <td>{{ props.item.pasaduid }}</td>
                        <td>{{ props.item.noid }}</td>
                        <td>{{ props.item.name }}</td>
                        <td>{{ props.item.modem }}</td>
                        <td>{{ props.item.serialno }}</td>
                        <td>
                          <v-chip :color="getColor(props.item.status)" dark>{{
                            props.item.status
                          }}</v-chip>
                        </td>
                      </tr></template
                    >
                  </v-data-table>
                </v-card-text>
              </v-card>
            </div>
          </v-widget>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from "@/components/VWidget";
// import { Items as Users } from "@/api/user";
import { APIPath } from "../backend/APIPath";
const apiPath = new APIPath();
import axios from "axios";
export default {
  layout: "dashboard",
  components: {
    VWidget
  },
  data: () => ({
    search: "",
    complex: {
      selected: [],
      headers: [
        {
          text: "ไอดี",
          value: "pasaduid"
        },
        {
          text: "เลขคุรุภัณฑ์",
          value: "noid"
        },
        {
          text: "รายการ",
          value: "name"
        },
        {
          text: "ยี่ห้อ",
          value: "modem"
        },
        {
          text: "ซีเรียลโค้ด",
          value: "serialno"
        },
        {
          text: "สถานะ",
          value: "status"
        }
      ],
      items: [
        {
          pasaduid: "10092",
          noid: "7440-001-0038/189",
          name: "เครื่องคอมพิวเตอร์",
          modem: "comtec extra",
          serialno: "450500190"
        }
      ]
    },
    chart_pie_detail: [
      {
        name: "จำนวน",
        data: [
          {
            label: null,
            value: 158
          },
          {
            label: null,
            value: 73
          },
          {
            label: null,
            value: 19
          },
          {
            label: null,
            value: 53
          },
          {
            label: null,
            value: 460
          }
        ]
      }
    ],
    chart_line_detail: [
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
    chart_bar_place_detial: [
      {
        name: "จำนวน",
        data: [
          {
            label: "",
            value: 0
          },
          {
            label: "2501 - ศูนย์แพทย์ศาสตร์ศึกษาชั้นคลินิก",
            value: 0
          },
          {
            label: "9500 - กลุ่มงานเวชกรรมสังคม",
            value: 0
          },
          {
            label: "9401 - ห้องผ่าตัดใหญ่ OR",
            value: 0
          },
          {
            label: "9202 - กลุ่มงานเวชกรรมสังคม",
            value: 0
          },
          {
            label: "2008 - ศูนย์คอมพิวเตอร์",
            value: 0
          },
          {
            label: "3001 - ฝ่ายพัสดุและบำรุงรักษา",
            value: 0
          },
          {
            label: "4003 - ฝ่ายการเงินและบัญชี",
            value: 0
          },
          {
            label: "2501 - ศูนย์แพทย์ศาสตรศึกษาชั้นคลินิก",
            value: 0
          },
          {
            label: "9201 - สนง.ประกันสุขภาพ",
            value: 0
          }
        ]
      }
    ],
    type_group_name: ""
  }),
  mounted() {
    this.fetch_type_group_name();
    this.fetch_table();
    this.fetch_chart_pie_detail();
    this.fetch_chart_line_detail();
    this.fetch_chart_bar_place_detail();
  },
  methods: {
    //แสดงตาราง
    async fetch_table() {
      await axios
        .get(`${apiPath.getBaseUrl()}pasadu_table.php`, {
          params: {
            type_group: this.$route.params.id
          }
        })
        .then(response => {
          this.complex.items = response.data;
        });
    },
    //แสดง chard pie
    async fetch_chart_pie_detail() {
      await axios
        .get(`${apiPath.getBaseUrl()}pasadu_chart_pie_detail.php`, {
          params: {
            type_group: this.$route.params.id
          }
        })
        .then(response => {
          this.chart_pie_detail = response.data;
        });
    },
    //แสดง chard line detail
    async fetch_chart_line_detail() {
      await axios
        .get(`${apiPath.getBaseUrl()}pasadu_chart_line_detail.php`, {
          params: {
            type_group: this.$route.params.id
          }
        })
        .then(response => {
          this.chart_line_detail = response.data;
        });
    }, //แสดง chard bar place detail
    async fetch_chart_bar_place_detail() {
      await axios
        .get(`${apiPath.getBaseUrl()}pasadu_chart_bar_place_detail.php`, {
          params: {
            type_group: this.$route.params.id
          }
        })
        .then(response => {
          this.chart_bar_place_detail = response.data;
        });
    }, //แสดง type group name
    async fetch_type_group_name() {
      await axios
        .get(`${apiPath.getBaseUrl()}type_group_name.php`, {
          params: {
            type_group: this.$route.params.id
          }
        })
        .then(response => {
          this.type_group_name = response.data;
        });
    },
    showAlert(a) {
      // this.$router.plus หน้าต่างเดียวกัน
      // let routeData = this.$router.resolve({ path: `/pasadu/${a.pasaduid}` });
      // window.open(routeData.href, "_blank");

      // this.$router.plus({ path: `/pasadu/${a.pasaduid}` });
      $nuxt._router.push(`/pasadu/${a.pasaduid}`);
    },
    getColor(status) {
      if (status == "จำหน่ายแล้ว" || status == "แทงชำรุดแล้ว") return "red";
      else if (
        status == "รอจำหน่าย" ||
        status == "ตรวจสอบข้อมูล" ||
        status == "รอแทงชำรุด"
      )
        return "orange";
      else return "green";
    },
    on() {
      $nuxt._router.push("/add");
    }
  }
};
</script>
<style>
.chart {
  width: 100%;
  height: 300px;
}
</style>
