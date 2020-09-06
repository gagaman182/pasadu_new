<template>
  <v-card>
    <v-toolbar card prominent extended color="primary" dark="">
      <v-toolbar-title class="body-2"
        >รายละเอียด - {{ pasadu[0].typegroup_name }}</v-toolbar-title
      >
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-form v-model="valid" ref="form" lazy-validation>
        <v-layout row wrap>
          <v-flex lg6 sm12>
            <v-text-field
              label="เลขไอดี"
              name="title"
              v-model="pasadu[0].pasaduid"
            >
            </v-text-field>
          </v-flex>
          <v-flex sm12 lg6>
            <v-text-field
              label="เลขพัสดุ"
              name="title"
              v-model="pasadu[0].noid"
            >
            </v-text-field>
          </v-flex>
          <v-flex sm12 lg6>
            <v-text-field label="รายการ" name="title" v-model="pasadu[0].name">
            </v-text-field>
          </v-flex>
          <v-flex sm12 lg6>
            <v-text-field label="ยี่ห้อ" name="title" v-model="pasadu[0].modem">
            </v-text-field>
          </v-flex>
          <v-flex sm12 lg6>
            <v-text-field
              label="เลขซีเรียล"
              name="title"
              v-model="pasadu[0].serialno"
            >
            </v-text-field>
          </v-flex>
          <v-flex sm12 lg6>
            <v-text-field
              label="บริษัท"
              name="title"
              v-model="pasadu[0].company"
            >
            </v-text-field>
          </v-flex>

          <v-flex sm12 lg6>
            <v-text-field
              label="ประเภทครุภัณฑ์"
              name="title"
              v-model="pasadu[0].type"
            >
            </v-text-field>
          </v-flex>
          <v-flex sm12 lg6>
            <v-text-field
              label="สถานที่"
              name="title"
              v-model="pasadu[0].place"
            >
            </v-text-field>
          </v-flex>
          <v-flex sm12 lg6>
            <v-menu
              class="pr-2"
              ref="statDate"
              lazy
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              full-width
              :nudge-bottom="-22"
              max-width="290px"
            >
              <v-text-field
                slot="activator"
                label="วันที่รับสินค้า"
                v-model="pasadu[0].receive"
                append-icon="event"
                readonly
              ></v-text-field>
              <v-date-picker v-model="pasadu[0].receive" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="startDateMenu = false"
                  >Cancel</v-btn
                >
                <v-btn
                  flat
                  color="primary"
                  @click="$refs.statDate.save(pasadu[0].receive)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-menu>
          </v-flex>
          <v-flex sm12 lg6>
            <v-text-field label="ราคา" name="title" v-model="pasadu[0].perunit">
            </v-text-field>
          </v-flex>
          <v-flex sm12 lg6>
            <v-text-field
              label="ประเภทงบประมาณ"
              name="title"
              v-model="pasadu[0].kmoney"
            >
            </v-text-field>
          </v-flex>
          <v-flex sm12 lg6>
            <v-text-field
              label="ประเภทการจัดซื้อ"
              name="title"
              v-model="pasadu[0].tmoney"
            >
            </v-text-field>
          </v-flex>
          <v-flex sm12 lg4>
            <v-text-field
              label="ขออนุมัติ"
              name="title"
              v-model="pasadu[0].engname"
            >
            </v-text-field>
          </v-flex>

          <v-flex sm12 lg4>
            <v-select
              :items="status"
              v-model="pasadu[0].status"
              label="สถานะ"
              auto
              required
              item-text="name"
              item-value="name"
            ></v-select>
          </v-flex>

          <v-flex sm12 lg4>
            <v-select
              :items="typegroup"
              v-model="pasadu[0].type_group"
              label="หมวดหมู่"
              auto
              required
              item-text="name"
              item-value="id"
            ></v-select>
          </v-flex>

          <v-spacer></v-spacer>
        </v-layout>
      </v-form>
    </v-card-text>
    <v-card-actions class="pb-3">
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="update_pasadu">{{ status_name }}</v-btn>
      <v-btn color="error" @click="delete_pasadu">{{ status_name2 }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { APIPath } from "@/backend/APIPath";
const apiPath = new APIPath();
import axios from "axios";
export default {
  data: () => ({
    typegroup: [
      {
        id: "1",
        name: "คอมพิวเตอร์"
      },
      {
        id: "2",
        name: "จอมอนิเตอร์"
      },
      {
        id: "3",
        name: "โน๊ตบุ๊ค"
      },
      {
        id: "5",
        name: "ออนอินวัน"
      },
      {
        id: "6",
        name: "ปริ้นเตอร์"
      },
      {
        id: "7",
        name: "ปริ้นเตอร์เทอมอล"
      },
      {
        id: "8",
        name: "สแกนเนอร์"
      },
      {
        id: "9",
        name: "สำรองไฟ"
      },
      {
        id: "10",
        name: "อื่นๆ"
      },
      {
        id: "11",
        name: "เซิฟเวอร์"
      }
    ],
    status: [
      {
        id: "1",
        name: "ใช้งานปกติ"
      },
      {
        id: "2",
        name: "แทงชำรุดแล้ว"
      },
      {
        id: "3",
        name: "รอแทงชำรุด"
      },
      {
        id: "4",
        name: "รอจำหน่าย"
      },
      {
        id: "5",
        name: "ตรวจสอบข้อมูล"
      },
      {
        id: "6",
        name: "จำหน่ายแล้ว"
      }
    ],
    message: null,
    formData: null,
    message: "Hi"
  }),
  props: {
    pasadu: [],
    status_name: {
      type: String
    },
    status_name2: {
      type: String
    }
  },
  mounted() {},
  methods: {
    update_pasadu() {
      this.$emit("update-pasadu", { pasadu: this.pasadu });
    },
    delete_pasadu() {
      this.$emit("delete-pasadu", { pasadu_id: this.pasadu[0].pasaduid });
    }
  }
};
</script>
