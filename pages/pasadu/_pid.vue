<template>
  <div id="page-forms">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
          <pasadu-detail
            @update-pasadu="setpasadu"
            @delete-pasadu="deletepasadu"
            :pasadu="pasadu"
            :status_name="status_name"
            :status_name2="status_name2"
          ></pasadu-detail>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from "@/components/VWidget";
import PasaduDetail from "@/components/widgets/form/PasaduDetail";
import { APIPath } from "@/backend/APIPath";
const apiPath = new APIPath();
import axios from "axios";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default {
  layout: "dashboard",
  components: {
    VWidget,
    PasaduDetail
  },
  data() {
    return {
      pasadu: [
        {
          pasaduid: "",
          noid: "",
          name: "",
          modem: "",
          serialno: "",
          company: "",
          type: "",
          place: "",
          receive: "",
          perunit: "",
          kmoney: "",
          tmoney: "",
          engname: "",
          status: "",
          type_group: ""
        }
      ],
      message: "",
      status_name: "แก้ไข",
      status_name2: "ลบ",
      pasadu_delete: ""
    };
  },
  mounted() {
    this.fetch_pasadu();
  },
  methods: {
    // แสดง ข้อมูลจาก ตาราง pasadu
    async fetch_pasadu() {
      await axios
        .get(`${apiPath.getBaseUrl()}pasadu_detail.php`, {
          params: {
            pasaduid: this.$route.params.pid
          }
        })
        .then(response => {
          this.pasadu = response.data;
        });
    },
    setpasadu() {
      // this.message = payload.pasadu;

      axios
        .put(
          `${apiPath.getBaseUrl()}update_pasadu.php`,
          {
            pasaduid: this.pasadu[0].pasaduid,
            noid: this.pasadu[0].noid,
            name: this.pasadu[0].name,
            modem: this.pasadu[0].modem,
            serialno: this.pasadu[0].serialno,
            company: this.pasadu[0].company,
            type: this.pasadu[0].type,
            place: this.pasadu[0].place,
            receive: this.pasadu[0].receive,
            perunit: this.pasadu[0].perunit,
            kmoney: this.pasadu[0].kmoney,
            tmoney: this.pasadu[0].tmoney,
            engname: this.pasadu[0].engname,
            status: this.pasadu[0].status,
            type_group: this.pasadu[0].type_group
          },
          { "Content-type": "application/x-www-form-urlencoded" }
        )
        .then(response => {
          this.message = response.data;

          if (this.message[0].message == "อัพเดทข้อมูลสำเร็จ") {
            Swal.fire({
              title: "สถานะอัพเดท",
              text: this.message[0].message,
              icon: "success",
              confirmButtonText: "ตกลง"
            });
          } else {
            Swal.fire({
              title: "สถานะอัพเดท",
              text: this.message[0].message,
              icon: "error",
              confirmButtonText: "ตกลง"
            });
            $nuxt._router.push("/dashboard");
          }
        });
    },
    deletepasadu(payload) {
      this.pasadu_delete = payload.pasadu_id;

      axios
        .post(
          `${apiPath.getBaseUrl()}delete_pasadu.php`,
          {
            pasaduid: this.pasadu_delete
          },
          { "Content-type": "application/x-www-form-urlencoded" }
        )
        .then(response => {
          this.message = response.data;
          if (this.message[0].message == "ลบข้อมูลสำเร็จ") {
            Swal.fire({
              title: "สถานะลบ",
              text: this.message[0].message,
              icon: "success",
              confirmButtonText: "ตกลง"
            });
            $nuxt._router.push("/dashboard");
          } else {
            Swal.fire({
              title: "สถานะลบ",
              text: this.message[0].message,
              icon: "error",
              confirmButtonText: "ตกลง"
            });
            $nuxt._router.push("/dashboard");
          }
        });
    }
  }
};
</script>
