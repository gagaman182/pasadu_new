<template>
  <div id="page-forms">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
          <pasadu-detail
            @update-pasadu="setpasadu"
            :pasadu="pasadu"
            :status_name="status_name"
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
      status_name: "อัพเดท"
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
            name: this.pasadu[0].name
          },
          { "Content-type": "application/x-www-form-urlencoded" }
        )
        .then(response => {
          this.message = response.data;
          Swal.fire({
            title: "สถานะอัพเดท",
            text: this.message[0].message,
            icon: "success",
            confirmButtonText: "ตกลง"
          });
        });
    }
  }
};
</script>
