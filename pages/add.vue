<template>
  <div id="page-forms">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
          <pasadu-detail
            @add-pasadu="setaddpasadu"
            :status_name="status_name"
          ></pasadu-detail>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from "@/components/VWidget";
import PasaduDetail from "@/components/widgets/form/PasaduDetail_add";
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
      message: "",
      status_name: "บันทึก",
      pasadu_add: ""
    };
  },
  mounted() {},
  methods: {
    setaddpasadu(payload) {
      this.pasadu_add = payload.pasadu;

      axios
        .post(
          `${apiPath.getBaseUrl()}add_pasadu.php`,
          {
            pasaduid: this.pasadu_add.pasaduid,
            noid: this.pasadu_add.noid,
            name: this.pasadu_add.name,
            modem: this.pasadu_add.modem,
            serialno: this.pasadu_add.serialno,
            company: this.pasadu_add.company,
            type: this.pasadu_add.type,
            place: this.pasadu_add.place,
            receive: this.pasadu_add.receive,
            perunit: this.pasadu_add.perunit,
            kmoney: this.pasadu_add.kmoney,
            tmoney: this.pasadu_add.tmoney,
            engname: this.pasadu_add.engname,
            status: this.pasadu_add.status,
            type_group: this.pasadu_add.type_group
          },
          { "Content-type": "application/x-www-form-urlencoded" }
        )
        .then(response => {
          this.message = response.data;
          if (this.message[0].message == "บันทึกข้อมูลสำเร็จ") {
            Swal.fire({
              title: "สถานะบันทึก",
              text: this.message[0].message,
              icon: "success",
              confirmButtonText: "ตกลง"
            });
            $nuxt._router.push("/dashboard");
          } else {
            Swal.fire({
              title: "สถานะบันทึก",
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
