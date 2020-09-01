<template>
  <div id="page-alerts">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
          <v-widget title="คอมพิวเตอร์">
            <div slot="widget-content">
              <v-card>
                <v-card-title>
                  ครุภัณฑ์คอมพิวเตอร์ - คอมพิวเตอร์
                  <v-spacer></v-spacer>
                  <v-text-field
                    v-model="search"
                    append-icon="search"
                    label="ค้นหา"
                    single-line
                    hide-details
                  ></v-text-field>
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
                      <td>{{ props.item.pasaduid }}</td>
                      <td>{{ props.item.noid }}</td>
                      <td>{{ props.item.name }}</td>
                      <td>{{ props.item.modem }}</td>
                      <td>{{ props.item.serialno }}</td>
                    </template>
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
    }
  }),
  mounted() {
    this.fetch_table();
  },
  methods: {
    //แสดงตาราง
    async fetch_table() {
      await axios
        .get(`${apiPath.getBaseUrl()}pasadu_table_1.php`)
        .then(response => {
          this.complex.items = response.data;
          console.log(this.complex.items[0].pasaduid);
        });
    }
  }
};
</script>
